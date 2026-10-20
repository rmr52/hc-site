import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { QuoteForm } from "@/components/quote-form";
import { PageHero } from "@/components/ui";
import { business, images } from "@/lib/content";

export const metadata = {
  title: "Request a Catering Quote",
  description: "Tell Billman's Catering about your event and start planning your menu.",
};

export default function ContactPage() {
  return (
    <>
      <div className="relative">
        <PageHero eyebrow="Let’s plan together" title="Tell us about your gathering." description="Share a few details and use this prototype form to explore the inquiry experience. When you’re ready to speak with the team, call or email Billman’s directly." image={images.steak} />
        <SiteHeader />
      </div>
      <main className="bg-[#f7f4ee] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          <aside>
            <p className="eyebrow">Contact Billman&apos;s</p>
            <h2 className="display mt-4 text-4xl text-[#263f35]">A good event starts with a good conversation.</h2>
            <p className="mt-5 text-sm leading-7 text-[#58635c]">We serve events across Eastern Idaho, Western Montana, and North-West Wyoming. Tell us where you’re gathering and what you have in mind.</p>
            <div className="mt-10 space-y-7 border-t border-[#dedbd3] pt-7">
              <div><p className="eyebrow">Call</p><a className="mt-2 block font-serif text-2xl text-[#263f35] hover:text-[#b78649]" href={`tel:${business.phone}`}>{business.phoneDisplay}</a></div>
              <div><p className="eyebrow">Email</p><a className="mt-2 block text-sm text-[#58635c] hover:text-[#b78649]" href={`mailto:${business.email}`}>{business.email}</a></div>
              <div><p className="eyebrow">Visit</p><p className="mt-2 text-sm leading-6 text-[#58635c]">{business.address}</p></div>
              <div><p className="eyebrow">Hours</p>{business.hours.map((hour) => <p key={hour} className="mt-1 text-sm text-[#58635c]">{hour}</p>)}</div>
            </div>
          </aside>
          <QuoteForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
