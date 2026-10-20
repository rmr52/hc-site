"use client";

import { FormEvent, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  date: "",
  guests: "",
  location: "",
  details: "",
};

export function QuoteForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-[#dfe6dc] p-8 sm:p-12" role="status">
        <p className="eyebrow">Demonstration submission</p>
        <h2 className="display mt-4 text-4xl text-[#263f35]">Thanks, {form.name.split(" ")[0] || "there"}.</h2>
        <p className="mt-5 max-w-md text-sm leading-7 text-[#58635c]">
          This prototype does not send or save inquiries yet. Your form details stayed in this browser session only.
        </p>
        <button type="button" onClick={() => { setForm(initialForm); setSubmitted(false); }} className="focus-ring mt-8 rounded-full bg-[#263f35] px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white">
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-6 bg-white p-6 shadow-[0_12px_50px_rgba(38,63,53,0.07)] sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-[#263f35]">Name <input required value={form.name} onChange={(e) => update("name", e.target.value)} className="focus-ring mt-2 w-full rounded-none border-b border-[#b9beb8] bg-transparent px-0 py-3 text-base font-normal outline-none placeholder:text-[#9ba29c]" placeholder="Your name" /></label>
        <label className="block text-sm font-semibold text-[#263f35]">Email <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="focus-ring mt-2 w-full rounded-none border-b border-[#b9beb8] bg-transparent px-0 py-3 text-base font-normal outline-none placeholder:text-[#9ba29c]" placeholder="you@example.com" /></label>
        <label className="block text-sm font-semibold text-[#263f35]">Phone <input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="focus-ring mt-2 w-full rounded-none border-b border-[#b9beb8] bg-transparent px-0 py-3 text-base font-normal outline-none placeholder:text-[#9ba29c]" placeholder="(208) 000-0000" /></label>
        <label className="block text-sm font-semibold text-[#263f35]">Event type <select required value={form.eventType} onChange={(e) => update("eventType", e.target.value)} className="focus-ring mt-2 w-full rounded-none border-b border-[#b9beb8] bg-transparent px-0 py-3 text-base font-normal outline-none"><option value="">Select one</option><option>Wedding</option><option>Corporate event</option><option>Celebration</option><option>Other event</option></select></label>
        <label className="block text-sm font-semibold text-[#263f35]">Event date <input required type="date" value={form.date} onChange={(e) => update("date", e.target.value)} className="focus-ring mt-2 w-full rounded-none border-b border-[#b9beb8] bg-transparent px-0 py-3 text-base font-normal outline-none" /></label>
        <label className="block text-sm font-semibold text-[#263f35]">Estimated guests <input required type="number" min="1" value={form.guests} onChange={(e) => update("guests", e.target.value)} className="focus-ring mt-2 w-full rounded-none border-b border-[#b9beb8] bg-transparent px-0 py-3 text-base font-normal outline-none placeholder:text-[#9ba29c]" placeholder="Approximate count" /></label>
        <label className="block text-sm font-semibold text-[#263f35] sm:col-span-2">Event location <input required value={form.location} onChange={(e) => update("location", e.target.value)} className="focus-ring mt-2 w-full rounded-none border-b border-[#b9beb8] bg-transparent px-0 py-3 text-base font-normal outline-none placeholder:text-[#9ba29c]" placeholder="Venue or city" /></label>
        <label className="block text-sm font-semibold text-[#263f35] sm:col-span-2">Tell us about your event <textarea required rows={4} value={form.details} onChange={(e) => update("details", e.target.value)} className="focus-ring mt-2 w-full resize-y rounded-none border border-[#b9beb8] bg-transparent p-3 text-base font-normal outline-none placeholder:text-[#9ba29c]" placeholder="Tell us anything helpful about your plans, menu preferences, or service needs." /></label>
      </div>
      <div className="flex flex-col items-start justify-between gap-5 border-t border-[#dedbd3] pt-6 sm:flex-row sm:items-center">
        <p className="max-w-sm text-xs leading-5 text-[#7b827c]">Prototype only: this form validates in your browser and does not send or save data.</p>
        <button type="submit" className="focus-ring inline-flex items-center rounded-full bg-[#b78649] px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white hover:bg-[#c9985a]">Review inquiry</button>
      </div>
    </form>
  );
}
