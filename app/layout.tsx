import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Priscilla Ajayi - UX/UI Designer Portfolio",
  description:
    "UX/UI Designer specializing in mobile banking, fintech, and user-centered design. View my case studies and design work.",
  openGraph: {
    title: "Priscilla Ajayi - UX/UI Designer Portfolio",
    description:
      "UX/UI Designer specializing in mobile banking, fintech, and user-centered design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
