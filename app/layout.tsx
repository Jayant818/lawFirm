import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Disclaimer from "./Components/Disclaimer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NCR Law Associate",
  description: "NCR LAW ASSOCIATE was founded in 2012 and is the most trusted law firm in Gurgaon Combining professionalism with creativity, we provide exceptional legal services for local and international clients across a range of industries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <Navbar/>
        {children}
        <Footer />
        <Disclaimer/>
      </body>
    </html>
  );
}
