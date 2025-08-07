import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Shortcuts from "../components/Shortcuts";
import Footer from "../components/Footer";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Shortcuts />
      <Footer />
    </main>
  );
}
