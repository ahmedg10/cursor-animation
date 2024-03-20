import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { CausticsDemo } from "@/utils/customFonts";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Coming Soon...",
  description: "Ahmed's Design Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${CausticsDemo.variable}`}>
        {children}
      </body>
    </html>
  );
}
