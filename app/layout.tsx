import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const monserrat = Montserrat({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
