import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ArrowLink, PageHero, QuoteBanner, SectionHeading } from "@/components/ui";
import { images } from "@/lib/content";

export const metadata = {
  title: "About Billman's Catering",
  description: "Learn about Billman's Catering, serving the Idaho Falls area and the surrounding region since 1993.",
};

export default function AboutPage() {
  return (
    <>
      <div className="relative">
        <PageHero eyebrow="About Billman’s" title="A family business built around bringing people together." description="For more than three decades, Billman’s Catering has served the Idaho Falls community and events across the surrounding region." image={images.hero} />
        <SiteHeader />
      </div>
      <main>
        <section className="bg-[#f7f4ee] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
            <div>
              <SectionHeading eyebrow="Since 1993" title="Experienced enough to know the details matter." description="Billman’s Catering has been serving the community since 1993, with a focus on quality customer service, delicious cuisine, and approachable value." />
              <div className="mt-8"><ArrowLink href="/contact">Talk with our team</ArrowLink></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#263f35] p-7 text-white sm:p-10"><p className="display text-5xl">1993</p><p className="mt-3 text-sm leading-6 text-white/70">the year Billman&apos;s began serving the community</p></div>
              <div className="grain bg-[#dfe6dc] p-7 sm:p-10"><p className="display text-5xl text-[#263f35]">ID</p><p className="mt-3 text-sm leading-6 text-[#58635c]">rooted in Idaho Falls, serving the region</p></div>
              <div className="relative col-span-2 aspect-[2/1] overflow-hidden"><Image src={images.plated} alt="Catered food prepared for guests" fill className="object-cover" sizes="50vw" /></div>
            </div>
          </div>
        </section>
        <section className="bg-white px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl"><SectionHeading eyebrow="The Billman’s way" title="Capable service, from the first call to the final course." /></div>
            <div className="mt-14 grid gap-10 border-t border-[#dedbd3] pt-10 md:grid-cols-3">
              <div><p className="eyebrow">01 · Listen</p><h3 className="display mt-3 text-2xl text-[#263f35]">Start with what matters to you.</h3><p className="mt-4 text-sm leading-7 text-[#68726c]">Every event is different. We begin with your gathering, your guests, and the experience you want to create.</p></div>
              <div><p className="eyebrow">02 · Prepare</p><h3 className="display mt-3 text-2xl text-[#263f35]">Make the menu fit the moment.</h3><p className="mt-4 text-sm leading-7 text-[#68726c]">Choose from established favorites or ask about a custom menu when your event calls for something specific.</p></div>
              <div><p className="eyebrow">03 · Serve</p><h3 className="display mt-3 text-2xl text-[#263f35]">Let the team handle the details.</h3><p className="mt-4 text-sm leading-7 text-[#68726c]">Our friendly, professional staff and service supplies help make the day feel welcoming and well cared for.</p></div>
            </div>
          </div>
        </section>
        <section className="bg-[#263f35] px-6 py-20 text-white lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
            <div><SectionHeading light eyebrow="Beyond the banquet" title="Catering for public events, too." description="Along with formal events, Billman’s offers food and beverage concessions at public events. The published business information notes recent concession service for large public events, including the Idaho State Fair." /></div>
            <div className="border-l border-white/20 pl-7 sm:pl-10"><p className="eyebrow text-[#d6ad74]">Serving the region</p><p className="mt-5 font-serif text-3xl leading-tight">Eastern Idaho<br />Western Montana<br />North-West Wyoming</p><p className="mt-6 text-sm leading-7 text-white/65">The established service area includes Idaho Falls, Ammon, Salt Lake City, Rexburg, Twin Falls, and Island Park. Ask about your location when requesting a quote.</p></div>
          </div>
        </section>
        <QuoteBanner title="Bring Billman’s to your next gathering." />
      </main>
      <SiteFooter />
    </>
  );
}
