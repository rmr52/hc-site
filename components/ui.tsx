import Image from "next/image";
import Link from "next/link";

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path d="M3 10h13M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${light ? "text-white" : ""}`}>
      <p className={`eyebrow ${light ? "text-[#d6ad74]" : ""}`}>{eyebrow}</p>
      <h2 className="display text-balance mt-4 text-4xl leading-[1.05] sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-xl text-base leading-7 ${light ? "text-white/70" : "text-[#58635c]"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`focus-ring inline-flex items-center gap-3 rounded-sm text-sm font-bold ${
        light ? "text-white" : "text-[#263f35]"
      }`}
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[490px] items-end overflow-hidden bg-[#263f35] pt-32">
      <Image src={image} alt="" fill priority className="object-cover opacity-45" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c332b]/95 via-[#263f35]/65 to-[#263f35]/15" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="max-w-2xl text-white">
          <p className="eyebrow text-[#d6ad74]">{eyebrow}</p>
          <h1 className="display text-balance mt-5 text-5xl leading-[0.98] sm:text-7xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">{description}</p>
        </div>
      </div>
    </section>
  );
}

export function QuoteBanner({ title = "Planning something worth gathering for?" }: { title?: string }) {
  return (
    <section className="bg-[#dfe6dc]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-6 py-14 sm:flex-row sm:items-center lg:px-10 lg:py-16">
        <div>
          <p className="eyebrow">Start the conversation</p>
          <h2 className="display mt-3 text-3xl text-[#263f35] sm:text-4xl">{title}</h2>
        </div>
        <Link
          href="/contact"
          className="focus-ring inline-flex shrink-0 items-center gap-3 rounded-full bg-[#263f35] px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#395b4c]"
        >
          Request a catering quote
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}

export function ImageCard({
  image,
  alt,
  eyebrow,
  title,
  href,
}: {
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-[#dfe6dc]">
        <Image src={image} alt={alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
      </div>
      <div className="pt-5">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h3 className="display mt-2 text-2xl text-[#263f35]">{title}</h3>
        {href && <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#60745d]">Explore <ArrowIcon /></span>}
      </div>
    </>
  );

  return href ? <Link href={href} className="group focus-ring block rounded-sm">{content}</Link> : <div className="group">{content}</div>;
}
