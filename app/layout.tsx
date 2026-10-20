import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Billman's Catering | Eastern Idaho & Western Montana",
    template: "%s | Billman's Catering",
  },
  description:
    "Professional catering for weddings, corporate events, celebrations, and gatherings throughout Eastern Idaho, Western Montana, and North-West Wyoming.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
