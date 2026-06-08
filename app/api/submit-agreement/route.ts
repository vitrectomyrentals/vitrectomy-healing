import { NextResponse } from "next/server";
import { agreementBullets } from "../../rental-agreement/agreementTerms";

export const runtime = "nodejs";

type AgreementSubmission = {
  renterName: string;
  customerEmail: string;
  date: string;
  rentalStartDate: string;
  rentalEndDate: string;
  clinicName: string;
  doctorName: string;
  pamphletGiven: string;
  referralSource: string;
  electronicSignature: string;
  agreementAccepted: string;
  submittedAt: string;
};

const requiredFields: Array<keyof AgreementSubmission> = [
  "renterName",
  "customerEmail",
  "date",
  "electronicSignature",
  "agreementAccepted",
];

function getFormValue(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeFilePart(value: string) {
  return value
    .trim()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function escapePdfText(value: string) {
  return value
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[–—]/g, "-")
    .replace(/[\u2022]/g, "-")
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function wrapText(text: string, maxChars: number) {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }

  if (line) {
    lines.push(line);
  }

  return lines;
}

function createPdf(submission: AgreementSubmission) {
  const pages: string[] = [];
  let commands: string[] = [];
  let y = 742;

  function newPage() {
    if (commands.length) {
      pages.push(commands.join("\n"));
    }
    commands = [];
    y = 742;
  }

  function ensureSpace(height: number) {
    if (y - height < 54) {
      newPage();
    }
  }

  function textLine(text: string, options: { size?: number; bold?: boolean; x?: number; gap?: number } = {}) {
    const size = options.size ?? 10.5;
    const x = options.x ?? 54;
    const gap = options.gap ?? size + 5;
    ensureSpace(gap);
    commands.push(`BT /${options.bold ? "F2" : "F1"} ${size} Tf ${x} ${y} Td (${escapePdfText(text)}) Tj ET`);
    y -= gap;
  }

  function paragraph(
    text: string,
    options: { size?: number; bold?: boolean; x?: number; maxChars?: number; afterGap?: number } = {}
  ) {
    const size = options.size ?? 10.5;
    const x = options.x ?? 54;
    const maxChars = options.maxChars ?? 88;
    for (const line of wrapText(text, maxChars)) {
      textLine(line, { size, bold: options.bold, x, gap: size + 4 });
    }
    y -= options.afterGap ?? 3;
  }

  // PDF generation: the completed agreement is assembled here from the same terms shown on the page.
  textLine("Face Down Recovery Rentals-Agreement", { size: 14, bold: true, gap: 21 });
  textLine(`Submission timestamp: ${submission.submittedAt}`, { size: 9.5 });
  y -= 7;

  textLine("Rental Terms and Conditions", { size: 14, bold: true, gap: 21 });
  agreementBullets.forEach((term) => paragraph(`- ${term}`, { maxChars: 90, afterGap: 6 }));

  textLine("Submitted Agreement Details", { size: 14, bold: true, gap: 21 });
  const rows = [
    ["Name of Renter", submission.renterName],
    ["Email Address", submission.customerEmail],
    ["Date", submission.date],
    ["Rental Start Date", submission.rentalStartDate || "Not provided"],
    ["Rental End Date", submission.rentalEndDate || "Not provided"],
    ["Name of Clinic", submission.clinicName || "Not provided"],
    ["Name of Doctor", submission.doctorName || "Not provided"],
    ["Pamphlet Given", submission.pamphletGiven || "Not provided"],
    ["Referral Source", submission.referralSource || "Not provided"],
    ["Electronic Signature", submission.electronicSignature],
    ["Agreement Accepted", "Yes"],
  ];

  rows.forEach(([label, value]) => paragraph(`${label}: ${value}`, { maxChars: 90 }));
  y -= 8;
  paragraph(
    `Electronic signature statement: ${submission.electronicSignature} typed their full legal name as an electronic signature and accepted the rental agreement.`,
    { bold: true, maxChars: 86 }
  );

  newPage();

  const objects: string[] = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    `<< /Type /Pages /Kids [${pages.map((_, index) => `${3 + index * 2} 0 R`).join(" ")}] /Count ${pages.length} >>`,
  ];

  pages.forEach((pageCommands, index) => {
    const pageObjectNumber = 3 + index * 2;
    const contentObjectNumber = pageObjectNumber + 1;
    objects.push(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> /F2 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> >> >> /Contents ${contentObjectNumber} 0 R >>`
    );
    objects.push(`<< /Length ${Buffer.byteLength(pageCommands, "utf8")} >>\nstream\n${pageCommands}\nendstream`);
  });

  const chunks = ["%PDF-1.4\n"];
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(chunks.join(""), "utf8"));
    chunks.push(`${index + 1} 0 obj\n${object}\nendobj\n`);
  });

  const xrefOffset = Buffer.byteLength(chunks.join(""), "utf8");
  chunks.push(`xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`);
  offsets.slice(1).forEach((offset) => {
    chunks.push(`${offset.toString().padStart(10, "0")} 00000 n \n`);
  });
  chunks.push(`trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`);

  return Buffer.from(chunks.join(""), "utf8");
}

async function sendAgreementEmail({
  to,
  subject,
  html,
  filename,
  pdf,
}: {
  to: string;
  subject: string;
  html: string;
  filename: string;
  pdf: Buffer;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = "agreements@facedownrecoveryrentals.com";
  const replyToAddress = process.env.ADMIN_EMAIL || "fdrrentals@gmail.com";

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  console.log("Sending agreement email with Resend", {
    from: fromAddress,
    replyTo: replyToAddress,
    to,
    subject,
  });

  // Email sending: Resend receives the completed PDF as a base64 attachment here.
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Face Down Recovery Rentals <${fromAddress}>`,
      to: [to],
      subject,
      html,
      reply_to: replyToAddress,
      attachments: [
        {
          filename,
          content: pdf.toString("base64"),
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Resend email failed", {
      status: response.status,
      from: fromAddress,
      replyTo: replyToAddress,
      to,
      subject,
      body: errorBody,
    });
    throw new Error(`Resend failed with status ${response.status}`);
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const submission: AgreementSubmission = {
      renterName: getFormValue(formData, "renterName"),
      customerEmail: getFormValue(formData, "customerEmail"),
      date: getFormValue(formData, "date"),
      rentalStartDate: getFormValue(formData, "rentalStartDate"),
      rentalEndDate: getFormValue(formData, "rentalEndDate"),
      clinicName: getFormValue(formData, "clinicName"),
      doctorName: getFormValue(formData, "doctorName"),
      pamphletGiven: getFormValue(formData, "pamphletGiven"),
      referralSource: getFormValue(formData, "referralSource"),
      electronicSignature: getFormValue(formData, "electronicSignature"),
      agreementAccepted: getFormValue(formData, "agreementAccepted"),
      submittedAt: new Date().toISOString(),
    };

    const missingRequiredField = requiredFields.find((field) => !submission[field]);
    if (missingRequiredField || submission.agreementAccepted !== "yes" || !isValidEmail(submission.customerEmail)) {
      return NextResponse.json({ error: "Missing or invalid required fields" }, { status: 400 });
    }

    const pdf = createPdf(submission);
    const filename = `Agreement-${sanitizeFilePart(submission.renterName)}-${sanitizeFilePart(submission.date)}.pdf`;
    const adminEmail = process.env.ADMIN_EMAIL || "fdrrentals@gmail.com";

    await Promise.all([
      sendAgreementEmail({
        to: adminEmail,
        subject: `New Rental Agreement - ${submission.renterName}`,
        html: `<p>A new rental agreement has been submitted by ${submission.renterName}.</p>`,
        filename,
        pdf,
      }),
      sendAgreementEmail({
        to: submission.customerEmail,
        subject: "Your Face Down Recovery Rentals Agreement",
        html: "<p>Thank you. A copy of your completed rental agreement is attached for your records.</p>",
        filename,
        pdf,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Rental agreement submission failed", error);
    return NextResponse.json({ error: "Agreement submission failed" }, { status: 500 });
  }
}
