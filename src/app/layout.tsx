import type { Metadata } from "next";
import { Itim } from "next/font/google";
import "./globals.css";

const itim = Itim({
    weight: ["400"],
    subsets: ["thai"]
});

export const metadata: Metadata = {
  title: "เค้าตั้งใจทำมาให้บิบิเลยนะ",
  description: "ฟอบิบินะไอเลิฟยู",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${itim.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
