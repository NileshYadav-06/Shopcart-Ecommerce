import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    template: "%S - Shopcart online store",
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
    <ClerkProvider>
      
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1"> {children}</main>
            <Footer />
          </div>
         
    </ClerkProvider>
  );
}
