import Link from "next/link";

export default function NotFound() {
    return(
        <section className="section-border">
            <p className="section-label">---ERROR-404---</p>
            <h1 className="heading-xl">該当なし</h1>
            <p className="text-muted">
                お探しの研究対象は見つかりませんでした。
            </p>
            <p style={{ marginTop: "1.5rem" }}>
                <Link href="/characters" className="breadcrumb-link">
                     キャラクター 一覧 へ戻る
                </Link>
            </p>
        </section>
    );
}