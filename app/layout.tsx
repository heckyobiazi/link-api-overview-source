import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "LINK — Move money across borders",
  description: "Build global payment experiences with LINK's FX and stablecoin infrastructure, through one API.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={sora.variable}><body>{children}</body></html>;
}
