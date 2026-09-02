import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ParkView | Premium Apartments",
  description: "Luxury living surrounded by nature.",
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