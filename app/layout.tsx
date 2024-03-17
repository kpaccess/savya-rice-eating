import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saavya`s Rice Feeding Ceremony",
  description: "Saavya`s Rice Feeding Ceremony - March 9th, 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f7f7f7] text-gray-800">
        <main className=" max-w-full mx-auto">{children}</main>
      </body>
    </html>
  );
}
