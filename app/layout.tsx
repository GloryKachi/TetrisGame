import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glory's Project",
  description: "A combination of my deployed projects",
  generator: "v0.dev",
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
