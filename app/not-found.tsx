import Link from "next/link";

// app 直下の not-found.tsx は2つの役割を兼ねる：
//  ① ページ内で notFound() が呼ばれたとき（例：存在しないキャラID）
//  ② どのルートにも一致しないURL全般（例：/foobar）
// props は受け取らない。サーバーコンポーネント（"use client" 不要）。
export default function NotFound() {
    return (
        <section className="section-border">
            <p className="section-label">-- ERROR 404 --</p>
            <h1 className="heading-xl">該当なし</h1>
            <p className="text-muted">
                お探しのページは見つかりませんでした。
            </p>
            <p style={{ marginTop: "1.5rem" }}>
                <Link href="/" className="breadcrumb-link">
                    TOP へ戻る
                </Link>
            </p>
        </section>
    );
}
/*
ポイント
特別なファイル - App Router は「ファイル名」に意味を持たせる。page.tsx=ページ、layout.tsx=共通枠、
                 そして not-found.tsx=404画面。置くだけで Next が自動で使ってくれる（importは不要）。
レイアウトの中で描画 - layout.tsx の <main> の中にこの中身が入るので、ヘッダー/フッターは勝手に付く。
                       だから <html> や <body> は書かない（それは layout の仕事）。
既存クラスの再利用 - section-border / heading-xl / text-muted / breadcrumb-link は globals.css に既にある。
                     新しく作らず使い回す＝CSSを増やさず統一感も保てる。
*/
