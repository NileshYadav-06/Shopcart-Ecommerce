import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    template: "Shopcart online store",
    default: "Shopcart online store",
  },
  description: "Onlinr shoping store, Your one stop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
