// 共通パーツ・ルールの設定
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// メタデータ
export const metadata: Metadata = {
  title: "バケットネコ研究所",
  description: "バケットネコ研究所 - キャラクターアーカイブ"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja" // 言語設定
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* 共通のヘッダー（ナビゲーション）を追加する */}
      <body className="min-h-full flex flex-col">
        {/*
        ここに共通で使いたいものを書けば、ページ遷移しても常に残る
        style={{}}でインラインスタイルを使っているのは、今の段階ではシンプルに進めるため、後でコンポーネント化＋Tailwindクラスに置き換えることもできる
        {children}を<main>で囲むことで、各ページの内容がここに入る
        globals.css で定着した --color-accent や --color-border をここで使っている
        */}
        <header
          style={{
            borderBottom: "1px solid var(--color-border)",
            padding: "1rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a href="/" style={{ color: "var(--color-accent)", fontWeight: "bold", fontSize: "1.2rem", textDecoration: "none" }}>
            バケットネコ研究所
          </a>
          <nav style={{ display: "flex", gap: "1.5rem" }}>
            <a href="/" style={{ color: "var(--color-text-muted)", textDecoration: "none" }}>TOP</a>
            <a href="/characters" style={{ color: "var(--color-text-muted)", textDecoration: "none" }}>CHARACTERS</a>
          </nav>
        </header>
        <main style={{ flex: 1 }}>
          {children}
        </main>
        {/* フッダー */}
        <footer
          style={{
            borderTop: "1px solid var(--color-border)",
            padding: "2rem",
            textAlign: "center",
            fontSize: "0.8rem",
            color: "var(--color-text-muted)",
          }}
        >
          <p>&copy; 2026 バケットネコ研究所</p>
        </footer>
      </body>
    </html>
  );
}


/*
ポイント
共通レイアウト - ここに書かれているレイアウトはどのページでも共通に使われるもの。反固定状態の骨組み

&copy; - © を表すHTMLエンティティ。著作権表示でよく使う
フッダーはヘッダーと対になる borderTopで区切り線を入れて統一感を出している

*/