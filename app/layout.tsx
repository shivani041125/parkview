import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://mathrubhuumi-parkview.web.app"),
  title: "ParkView | Premium Apartments",
  description: "Luxury living surrounded by nature.",
  openGraph: {
    title: "ParkView | Premium Apartments",
    description: "Luxury living surrounded by nature.",
    images: [
      {
        url: "/og/parkview-og.png",
        width: 1200,
        height: 630,
        alt: "ParkView | Premium Apartments",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
