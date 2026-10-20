import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ArrowLink, PageHero, QuoteBanner, SectionHeading } from "@/components/ui";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  introTitle: string;
  intro: string;
  bullets: string[];
  sideTitle: string;
  sideCopy: string;
  sideImage: string;
};

export function ServicePage({
  eyebrow,
  title,
  description,
  image,
  introTitle,
  intro,
  bullets,
  sideTitle,
  sideCopy,
  sideImage,
}: ServicePageProps) {
  return (
    <>
      <div className="relative">
        <PageHero eyebrow={eyebrow} title={title} description={description} image={image} />
        <SiteHeader />
      </div>
      <main>
        <section className="bg-[#f7f4ee] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
            <div>
              <SectionHeading eyebrow="Made for the occasion" title={introTitle} description={intro} />
              <div className="mt-8">
                <ArrowLink href="/contact">Start planning your event</ArrowLink>
              </div>
            </div>
            <div className="border-t border-[#dedbd3] pt-6">
              <p className="eyebrow">What we bring</p>
              <ul className="mt-5 divide-y divide-[#dedbd3]">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-4 py-4 text-sm text-[#58635c]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#dfe6dc] text-xs text-[#60745d]">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-white px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={sideImage} alt="" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
            <div>
              <SectionHeading eyebrow="A steady hand behind the scenes" title={sideTitle} description={sideCopy} />
              <p className="mt-7 max-w-lg text-sm leading-7 text-[#58635c]">
                Our team can provide the food and service essentials that help an event run smoothly, including linen, chafing dishes, serving dishes, utensils, pitchers, and trays.
              </p>
            </div>
          </div>
        </section>
        <QuoteBanner title="Have an event in mind? Let’s make a plan." />
      </main>
      <SiteFooter />
    </>
  );
}
