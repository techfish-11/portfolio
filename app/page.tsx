import Image from "next/image";
import Hero from "@/components/hero";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Future from "@/components/future"; // フューチャーページをインポート

export default function Home() {
  return (
    <div>
      {/* こんなかにコンポーネントを置くのが暗黙のルールっていうか基本的な書き方 */}
      {/* 順番は、ヘッダー、ボディ（ヒーローページ、フューチャーセクション, etc）、フッター */}
      
      <Header />
      <Hero />
      <div style={{ marginTop: '10px' }}>
        <Future /> {/* フューチャーページを追加 */}
      </div>
      <Footer />
    </div>
  );
}