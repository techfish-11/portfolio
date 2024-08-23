"use client"; // クライアントコンポーネントとしてマーク
import Footer from "@/components/footer";
import Future from "@/components/future";
import Hero from "@/components/hero";
import Header from "@/components/header";
import MobileHome from "@/components/mobileHome";

// `Home` コンポーネントを修正
export default function Home() {
  // モバイル判定はクライアントサイドで行います
  if (typeof window !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent)) {
    return <MobileHome />;
  } else {
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
}
