import { ServicePage } from "@/components/service-page";
import { images } from "@/lib/content";

export const metadata = {
  title: "Corporate Event Catering",
  description: "Professional catering for corporate functions, business luncheons, dinners, and large events.",
};

export default function CorporateEventsPage() {
  return (
    <ServicePage
      eyebrow="Corporate & business events"
      title="Professional service. No extra stress."
      description="Keep your team focused on the work and the people in the room. Billman’s Catering handles the meal with professionalism and ease."
      image={images.corporate}
      introTitle="A dependable partner for the room."
      intro="From business luncheons and dinners to black-tie events, we bring the planning experience and menu range to make the day feel seamless for your guests."
      bullets={["Events from small gatherings to 2,500 people", "Business luncheons and dinners", "Black-tie and formal events", "Custom menus available"]}
      sideTitle="Built for scale, attentive to detail."
      sideCopy="Our catering team has experience serving large and small events across the region. We invite you to look over our menu or get in touch to build a customized menu for your event."
      sideImage={images.hero}
    />
  );
}
