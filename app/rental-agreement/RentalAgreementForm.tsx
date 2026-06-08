"use client";

import { FocusEvent, FormEvent, MouseEvent, useState } from "react";

function RequiredMark() {
  return <span className="ml-1 text-red-600">*</span>;
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  function openDatePicker(event: FocusEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>) {
    if (type !== "date") {
      return;
    }

    const input = event.currentTarget;
    if (typeof input.showPicker === "function") {
      try {
        input.showPicker();
      } catch {
        input.focus();
      }
    }
  }

  return (
    <label className="block">
      <span className="font-serif text-base text-neutral-800">
        {label}
        {required ? <RequiredMark /> : null}
      </span>
      <input
        className="mt-2 h-12 w-full rounded-md border border-neutral-300 bg-white px-3 text-base outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        onClick={openDatePicker}
        onFocus={openDatePicker}
      />
    </label>
  );
}

function getTodayDateValue() {
  const today = new Date();
  const offsetDate = new Date(today.getTime() - today.getTimezoneOffset() * 60 * 1000);
  return offsetDate.toISOString().slice(0, 10);
}

export function RentalAgreementForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      action="/api/submit-agreement"
      method="POST"
      onSubmit={handleSubmit}
      className="rounded-xl border border-neutral-200 bg-white p-5 shadow-xl shadow-neutral-950/5 sm:p-8"
    >
      <input type="hidden" name="_subject" value="New rental agreement submission" />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name of Renter" name="renterName" required />
        <Field label="Email Address" name="customerEmail" type="email" required />
        <Field label="Date" name="date" type="date" required defaultValue={getTodayDateValue()} />
        <Field label="Rental Start Date" name="rentalStartDate" type="date" />
        <Field label="Rental End Date" name="rentalEndDate" type="date" />
        <Field label="Name of Clinic" name="clinicName" />
        <Field label="Name of Doctor" name="doctorName" />
      </div>

      <fieldset className="mt-6">
        <legend className="font-serif text-base text-neutral-800">Was the patient given a pamphlet at the clinic?</legend>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:gap-8">
          <label className="flex items-center gap-3 font-serif text-base text-neutral-800">
            <input className="size-4 accent-teal-500" type="radio" name="pamphletGiven" value="Yes" />
            Yes
          </label>
          <label className="flex items-center gap-3 font-serif text-base text-neutral-800">
            <input className="size-4 accent-teal-500" type="radio" name="pamphletGiven" value="No" />
            No
          </label>
        </div>
      </fieldset>

      <label className="mt-6 block">
        <span className="font-serif text-base text-neutral-800">
          If patient was not given a pamphlet, how did they find us?
        </span>
        <textarea
          className="mt-2 min-h-14 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-base outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
          name="referralSource"
          rows={2}
        />
      </label>

      <div className="mt-6">
        <Field label="Electronic Signature" name="electronicSignature" required />
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          Typing your full name constitutes your electronic signature and acceptance of the rental agreement.
        </p>
      </div>

      <label className="mt-6 flex gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-base leading-6 text-neutral-800">
        <input className="mt-1 size-5 shrink-0 accent-teal-500" name="agreementAccepted" type="checkbox" value="yes" required />
        <span>
          <span className="text-red-600">*</span> I have read and agree to the Rental Terms and Conditions.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 flex min-h-14 w-full items-center justify-center rounded-full bg-teal-400 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-neutral-950 shadow-lg shadow-teal-950/15 transition hover:bg-teal-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Submitting..." : "Submit Agreement"}
      </button>

      {status === "success" ? (
        <p className="mt-5 rounded-lg border border-teal-200 bg-teal-50 px-4 py-3 font-serif text-lg text-teal-800">
          Thank you. Your rental agreement has been submitted successfully.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          Something went wrong. Please try again or contact us directly.
        </p>
      ) : null}
    </form>
  );
}
