import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Category from "@/components/Category";
import HighProducts from './../components/HighProducts';
import HighLights from '@/components/HighLights'
import ContactEmail from '@/components/ContactEmail'
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
        <Navbar/>
        <Banner />
        <Category></Category>
        <HighProducts/>
        <HighLights/>
        <ContactEmail/>
        <Footer></Footer>

  </main>
  );
}
