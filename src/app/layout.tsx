import type { Metadata } from "next";
import { Spinnaker } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { DockLink } from "@/components/DockLink";
import NavHeader from "@/components/NavHeader";

const spinnakerSans = Spinnaker({
  variable: "--font-spinnaker",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Geomeridien",
  description: "A company that makes your visit to major destinations easier by bundling prepaid admissions to local top attractions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spinnakerSans.variable} antialiased`}>
        <div className="min-h-screen h-full flex flex-col items-center">
          <NavHeader />
          <main className="w-full">
            {children}
          </main>
          <DockLink />
        </div>
        <BackgroundBeams />
      </body>
    </html>
  );
}
