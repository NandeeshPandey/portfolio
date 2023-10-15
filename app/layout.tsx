import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nandeesh Pandey",
  description: "connecting vision with expertise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
