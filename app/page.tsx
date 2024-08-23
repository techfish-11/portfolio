import Footer from "@/components/footer";
import Future from "@/components/future";
import Hero from "@/components/hero";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col space-y-0" style={{ marginBottom: '-20px' }}>
        <Hero />
        <div className="bg-[#f3f4f6] h-16" style={{ marginBottom: '-70px', backdropFilter: 'blur(8px)' }}></div>
        <Future />
      </main>
      <Footer />
    </div>
  );
}