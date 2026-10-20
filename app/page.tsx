import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ArrowIcon, ArrowLink, ImageCard, QuoteBanner, SectionHeading } from "@/components/ui";
import { images, services } from "@/lib/content";

export const metadata = {
  title: "Great Food. Memorable Events.",
  description:
    "Billman's Catering brings professional service and delicious food to weddings, corporate events, and celebrations across the region.",
};

export default function Home() {
  return (
    <>
      <header className="relative min-h-[720px] overflow-hidden bg-[#263f35]">
        <Image src={images.hero} alt="A beautifully set event dining room" fill priority className="object-cover opacity-55" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c332b]/95 via-[#263f35]/55 to-transparent" />
        <SiteHeader />
        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-end px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
          <div className="max-w-3xl text-white">
            <p className="eyebrow text-[#d6ad74]">Since 1993 · Eastern Idaho and beyond</p>
            <h1 className="display text-balance mt-5 text-6xl leading-[0.93] sm:text-8xl">
              Great Food.<br />Memorable Events.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80 sm:text-xl">
              Professional catering with the warm, capable service your gathering deserves—from intimate celebrations to events for thousands.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="focus-ring inline-flex items-center gap-3 rounded-full bg-[#b78649] px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white hover:bg-[#c9985a]">
                Request a catering quote <ArrowIcon />
              </Link>
              <Link href="/menus" className="focus-ring inline-flex items-center rounded-full border border-white/50 px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white hover:border-white">
                Explore the menus
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-6 hidden text-right text-xs text-white/60 lg:block lg:right-10">
          <span className="block font-serif text-2xl text-white/80">B</span>
          <span className="mt-2 block uppercase tracking-[0.18em]">Gather well</span>
        </div>
      </header>

      <main>
        <section className="bg-[#f7f4ee] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-24">
            <SectionHeading
              eyebrow="A local tradition"
              title="Food that makes people feel at home."
              description="Since 1993, Billman’s Catering has helped Eastern Idaho gather well. We bring delicious food, thoughtful planning, and a friendly professional staff to events of every kind."
            />
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="grain bg-[#dfe6dc] p-6 sm:p-9">
                <p className="display text-5xl text-[#263f35]">30+</p>
                <p className="mt-2 text-sm leading-6 text-[#58635c]">years serving the community</p>
              </div>
              <div className="bg-[#263f35] p-6 text-white sm:p-9">
                <p className="display text-5xl">2,500</p>
                <p className="mt-2 text-sm leading-6 text-white/70">guests accommodated for large events</p>
              </div>
              <div className="col-span-2 overflow-hidden">
                <Image src={images.plated} alt="Freshly prepared catered dishes" width={900} height={520} className="h-44 w-full object-cover sm:h-56" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading eyebrow="Made for your moment" title="Whatever you’re gathering for." />
              <ArrowLink href="/contact">Tell us about your event</ArrowLink>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <ImageCard key={service.href} {...service} alt={`${service.title} catering`} eyebrow="Catering for" />
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#263f35] px-6 py-20 text-white lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
            <div>
              <SectionHeading light eyebrow="Room to gather" title="From backyard reunions to black-tie affairs." description="Whether your event is casual, formal, indoor, or outside, our experienced team can help shape a menu and service plan that fits." />
              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/75">
                <span>Weddings</span><span>Corporate events</span><span>Family reunions</span><span>Private parties</span>
              </div>
              <div className="mt-10"><ArrowLink href="/about" light>Meet Billman&apos;s</ArrowLink></div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={images.steak} alt="A beautifully plated entrée" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
              <div className="absolute bottom-5 left-5 bg-[#f7f4ee] px-5 py-4 text-[#263f35]">
                <p className="eyebrow">The Billman&apos;s promise</p>
                <p className="mt-1 font-serif text-xl">Delicious. Dependable. Yours.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f4ee] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <SectionHeading eyebrow="A menu with range" title="Classic favorites, thoughtfully prepared." description="Choose from crowd-pleasing entrées, BBQ, appetizers, desserts, beverages, and custom menus when you want something uniquely yours." />
              <div className="mt-8"><ArrowLink href="/menus">View the full menu</ArrowLink></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[0.85]"><Image src={images.appetizer} alt="Fresh vegetables prepared for an appetizer tray" fill className="object-cover" sizes="25vw" /></div>
              <div className="relative mt-10 aspect-[0.85]"><Image src={images.dessert} alt="Dessert prepared for a catered event" fill className="object-cover" sizes="25vw" /></div>
            </div>
          </div>
        </section>
        <QuoteBanner />
      </main>
      <SiteFooter />
    </>
  );
}
