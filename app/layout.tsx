import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codinghelp",
  description: "connecting vision with expertise",
  keywords: ["codinghelp", "coding help"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {process.env.GA_TRACKING_ID && (
        <GoogleAnalytics
          GA_TRACKING_ID={process.env.GA_TRACKING_ID as string}
        />
      )}
      <body>{children}</body>
    </html>
  );
}
