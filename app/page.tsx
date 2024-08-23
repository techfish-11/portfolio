import Image from "next/image";
import Hero from "@/components/hero";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      {/* こんなかにコンポーネントを置くのが暗黙のルールっていうか基本的な書き方 */}
      {/* 順番は、ヘッダー、ボディ（ヒーローページ、フューチャーセクション, etc）、フッター */}
      
      <Header />
      <Hero />
    </div>
  );
}