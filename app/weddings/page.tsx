import { ServicePage } from "@/components/service-page";
import { images } from "@/lib/content";

export const metadata = {
  title: "Wedding Catering",
  description: "Wedding catering with flexible menus and experienced service from Billman's Catering.",
};

export default function WeddingsPage() {
  return (
    <ServicePage
      eyebrow="Wedding catering"
      title="A beautiful table for a beautiful day."
      description="From the first menu conversation to the last plate cleared, Billman’s Catering brings calm, capable service to your wedding celebration."
      image={images.wedding}
      introTitle="Food that lets you be fully present."
      intro="Your wedding is personal. We’ll help you choose from a broad menu of entrées, appetizers, desserts, and beverages so the food feels like your celebration—not a package pulled off a shelf."
      bullets={["Flexible menu options", "Formal, semi-formal, or casual service", "Indoor and outdoor event catering", "Professional, friendly staff"]}
      sideTitle="Thoughtful details, generously served."
      sideCopy="Whether you’re planning an intimate reception or a large celebration, our team is ready to help you create a meal your guests will remember. Custom menus are available when you have something specific in mind."
      sideImage={images.plated}
    />
  );
}
