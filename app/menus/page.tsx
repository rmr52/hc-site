import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ArrowLink, PageHero, QuoteBanner } from "@/components/ui";
import { addOns, images, menuCategories } from "@/lib/content";

export const metadata = {
  title: "Catering Menus",
  description: "Explore Billman's Catering entrées, BBQ, appetizers, desserts, and beverages.",
};

function MenuList({ title, items }: { title: string; items: Array<[string, string]> }) {
  return (
    <div>
      <h2 className="display text-3xl text-[#263f35]">{title}</h2>
      <div className="mt-5 divide-y divide-[#dedbd3] border-y border-[#dedbd3]">
        {items.map(([name, price]) => (
          <div key={name} className="flex items-start justify-between gap-5 py-4 text-sm">
            <span className="text-[#58635c]">{name}</span>
            <span className="shrink-0 font-semibold text-[#263f35]">{price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MenusPage() {
  return (
    <>
      <div className="relative">
        <PageHero eyebrow="Our menu" title="Good food, in all the right forms." description="Choose from Billman’s classic entrées, relaxed BBQ favorites, appetizers, desserts, and beverages. Custom menus are available when you don’t see exactly what you need." image={images.plated} />
        <SiteHeader />
      </div>
      <main>
        <section className="bg-[#f7f4ee] px-6 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 border-b border-[#dedbd3] pb-10 sm:flex-row sm:items-end">
              <div className="max-w-xl">
                <p className="eyebrow">A starting point</p>
                <h2 className="display mt-3 text-4xl text-[#263f35]">Menus made to be made your own.</h2>
                <p className="mt-4 text-sm leading-7 text-[#58635c]">The prices below are from the current published menu and are shown as a helpful reference. Please confirm current pricing and availability when requesting a quote.</p>
              </div>
              <ArrowLink href="/contact">Ask about a custom menu</ArrowLink>
            </div>
            <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-x-20">
              {menuCategories.map((category) => (
                <div key={category.title}>
                  <p className="eyebrow">{category.title}</p>
                  <p className="mt-3 max-w-md text-sm leading-6 text-[#58635c]">{category.intro}</p>
                  <div className="mt-6 divide-y divide-[#dedbd3] border-y border-[#dedbd3]">
                    {category.items.map((item) => (
                      <article key={item.name} className="py-5">
                        <div className="flex items-start justify-between gap-5">
                          <h3 className="font-serif text-xl text-[#263f35]">{item.name}</h3>
                          <span className="shrink-0 pt-1 text-sm font-bold text-[#b78649]">${item.price}</span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-[#68726c]">{item.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-[290px] overflow-hidden lg:min-h-0">
              <Image src={images.appetizer} alt="Colorful appetizer tray" fill className="object-cover" sizes="(min-width: 1024px) 35vw, 100vw" />
            </div>
            <div className="grid gap-14 sm:grid-cols-2">
              <MenuList title="Appetizers" items={addOns.appetizers} />
              <div className="space-y-14">
                <MenuList title="Desserts" items={addOns.desserts} />
                <MenuList title="Beverages" items={addOns.beverages} />
              </div>
            </div>
          </div>
          <p className="mx-auto mt-12 max-w-7xl text-xs leading-5 text-[#7b827c]">Appetizer trays are charged per person with a 20 person minimum. Breakfast menus, ice sculptures, melon carvings, and other custom requests are available by calling Billman&apos;s.</p>
        </section>
        <QuoteBanner title="Let’s build a menu around your event." />
      </main>
      <SiteFooter />
    </>
  );
}
