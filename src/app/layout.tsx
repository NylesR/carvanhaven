import type { Metadata } from "next";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./globals.css";

export const metadata: Metadata = {
  title: "Carvan Haven",
  description: "A haven for you and your car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
