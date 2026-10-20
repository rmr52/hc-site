export const business = {
  name: "Billman's Catering",
  phone: "208-523-6700",
  phoneDisplay: "(208) 523-6700",
  email: "billmancatering@gmail.com",
  address: "3950 S Yellowstone Hwy, Idaho Falls, Idaho 83402",
  shortAddress: "3950 S Yellowstone Hwy · Idaho Falls, ID 83402",
  region: "Eastern Idaho · Western Montana · North-West Wyoming",
  hours: [
    "Monday–Thursday: 11 am–9 pm",
    "Friday–Saturday: 11 am–1 am",
  ],
  established: "1993",
};

export const images = {
  hero:
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85",
  plated:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=85",
  wedding:
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=85",
  corporate:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
  celebration:
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=85",
  appetizer:
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
  steak:
    "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=85",
  dessert:
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85",
};

export const menuCategories = [
  {
    title: "Casual & BBQ",
    intro: "Comforting favorites for relaxed gatherings and easygoing events.",
    items: [
      {
        name: "BBQ Hamburgers and Hotdogs",
        description:
          "Hamburgers and hot dogs with cowboy baked beans, crisp tossed salad, an assortment of potato chips, and cheese slices.",
        price: "9.95",
      },
      {
        name: "Western BBQ Beef or Pork Sandwich",
        description:
          "Succulent BBQ beef or pork shredded and served on a fresh baked Kaiser roll with cowboy baked beans, crisp tossed salad, and potato chips.",
        price: "9.95",
      },
      {
        name: "Sandwich Buffet",
        description:
          "Platter of roast beef, turkey breast, and premium ham served with Swiss, American, and Cheddar cheeses, crisp tossed salad, and fresh baked Kaiser rolls.",
        price: "9.95",
      },
    ],
  },
  {
    title: "Entrées & Suppers",
    intro: "Hearty, polished entrées built for everything from family dinners to formal receptions.",
    items: [
      {
        name: "BBQ Chicken Breast",
        description:
          "Chicken breast grilled to perfection, crisp tossed salad, choice of potato, and dinner roll.",
        price: "13.95",
      },
      {
        name: "Boneless Pork Loin",
        description:
          "Applewood-smoked pork loin lightly basted with BBQ, served with green beans or corn, crisp tossed salad, dinner roll, and choice of potato.",
        price: "13.95",
      },
      {
        name: "Slow Cooked Roast Beef",
        description:
          "Choice cut roast beef, crisp tossed salad, choice of potato, corn, and dinner rolls.",
        price: "14.95",
      },
      {
        name: "Prime Rib Sandwich",
        description:
          "Seven ounces of prime rib on a Kaiser bun with grilled onions, sautéed mushrooms, Dutch Oven Potatoes, crisp tossed salad, and baked beans.",
        price: "21.95",
      },
      {
        name: "Prime Rib or BBQ Chicken Breast",
        description:
          "Twelve-ounce prime rib or eight-ounce BBQ chicken breast with choice of potato, green beans or corn, crisp tossed salad, fresh fruit salad, and dinner rolls.",
        price: "23.95",
      },
      {
        name: "Prime Rib or Grilled Atlantic Salmon",
        description:
          "Twelve-ounce prime rib or grilled eight-ounce Atlantic salmon filet with choice of potato, green beans or corn, fresh fruit, and dinner roll.",
        price: "26.95",
      },
      {
        name: "Grilled Rib-Eye or BBQ Chicken Breast",
        description:
          "Twelve-ounce rib-eye steak or eight-ounce BBQ chicken breast with crisp tossed salad, choice of potato, fresh fruit salad, corn or green beans, and dinner roll.",
        price: "23.95",
      },
      {
        name: "Grilled New York or BBQ Chicken Breast",
        description:
          "Ten-ounce seasoned steak or eight-ounce BBQ chicken breast with choice of potato, green beans or corn, crisp tossed salad, fresh fruit salad, and dinner rolls.",
        price: "23.95",
      },
      {
        name: "Grilled Sirloin or BBQ Chicken Breast",
        description:
          "Choice cut eight-ounce sirloin or eight-ounce BBQ chicken breast with choice of potato, cowboy baked beans, corn, crisp tossed salad, and a dinner roll.",
        price: "16.95",
      },
      {
        name: "Roast Beef or BBQ Chicken Breast",
        description:
          "Choice cut roast beef or eight-ounce BBQ chicken breast with choice of potato, crisp tossed salad, corn, and dinner rolls.",
        price: "15.95",
      },
      {
        name: "Premium Smoked Ham & Gold Label Boneless Turkey Breast",
        description:
          "Premium turkey breast or boneless pit ham with green beans or corn, crisp tossed salad, mashed potatoes, turkey gravy, and dinner rolls.",
        price: "16.95",
      },
    ],
  },
];

export const addOns = {
  appetizers: [
    ["Fruit Tray with Dip", "3.00 / person"],
    ["Fresh Vegetable Tray with Dip", "2.00 / person"],
    ["Shrimp Cocktail Tray", "3.00 / person"],
    ["Little Smokies", "2.00 / person"],
    ["Cheese and Cracker Tray", "2.00 / person"],
    ["Mini Croissant Tray", "3.00 / person"],
    ["Bacon Wrapped Shrimp", "3.50 / person"],
    ["Bacon Wrapped Water Chestnuts", "3.00 / person"],
  ] as Array<[string, string]>,
  desserts: [
    ["Assorted Desserts (Cookies, Brownies)", "$2.50 / person"],
    ["Brownie", "$2.50 / person"],
    ["Fresh Baked Cookies", "$2.25 / person"],
    ["Pies", "$3.00 / person"],
    ["Cheese Cakes", "$3.50 / person"],
    ["Eclairs", "$1.25 / person"],
    ["Chocolate Covered Strawberries", "Prices vary"],
  ] as Array<[string, string]>,
  beverages: [["Soda Pop & Bottled Water", "$2.00"]] as Array<[string, string]>,
};

export const services = [
  {
    title: "Weddings",
    href: "/weddings",
    description:
      "Thoughtful menus and steady service for the moments you have planned for years.",
    image: images.wedding,
  },
  {
    title: "Corporate events",
    href: "/corporate-events",
    description:
      "Polished, professional catering for business luncheons, dinners, and large gatherings.",
    image: images.corporate,
  },
  {
    title: "Celebrations",
    href: "/celebrations",
    description:
      "Warm, generous food for family reunions, anniversaries, graduations, and parties.",
    image: images.celebration,
  },
];
