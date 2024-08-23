import Image from "next/image";
import Hero from "@/components/hero";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Future from "@/components/future";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col space-y-0" style={{ marginBottom: '-20px' }}>
        <Hero />
        <div className="bg-[#f3f4f6] h-16"></div>
        <Future />
      </main>
      <Footer />
    </div>
  );
}