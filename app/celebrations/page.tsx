import { ServicePage } from "@/components/service-page";
import { images } from "@/lib/content";

export const metadata = {
  title: "Celebration Catering",
  description: "Catering for family reunions, anniversaries, graduations, parties, and private gatherings.",
};

export default function CelebrationsPage() {
  return (
    <ServicePage
      eyebrow="Celebrations"
      title="Bring everyone to the table."
      description="Family reunions, anniversaries, graduations, and parties all have one thing in common: they’re better with good food and less to worry about."
      image={images.celebration}
      introTitle="Make room for the good parts."
      intro="Whether your gathering is casual or formal, indoor or outside, we’ll help you plan a menu that gives everyone something to look forward to."
      bullets={["Family reunions and dinners", "Anniversaries and graduations", "Private parties and friend gatherings", "Casual, formal, or semi-formal events"]}
      sideTitle="Familiar favorites with something for everyone."
      sideCopy="Choose from generous entrées, sandwiches and salads, appetizers, desserts, and beverages. Don’t see exactly what you’re looking for? Custom menus are available."
      sideImage={images.appetizer}
    />
  );
}
