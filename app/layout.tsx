import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

// Load the Montserrat font with specified weights and subsets
const montserrat = Montserrat({
  weight: ["400", "600"], // Specify the font weights you want to use
  subsets: ["latin"], // You can specify subsets, 'latin' is common
});

export const metadata: Metadata = {
  title: "Eventure",
  description: "Events Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body className={montserrat.className}>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
