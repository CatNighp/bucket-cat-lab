import { getCharacter } from "@/data/characters";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function CharacterPage({ params }: Props){
    const { id } = await params;
    const character = getCharacter(id);

    if(!character){
        notFound();
    }

    return (
        <>
        {/* パンくずナビ */}
        <div style={{ padding: "1rem 2rem", fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
            <Link href="/" style={{ color: "var(--color-accent)", textDecoration: "none" }}>
            TOP
            </Link>
            <span style={{ margin: "0 0.5rem" }}>/</span>
            <span>{character.name}</span>
        </div>
        {/* キャラクター詳細 */}
        <section
        style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "2rem",
        }}
        >
            {/* ヘッダー部分 */}
            <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", letterSpacing: "0.2rem" }}>
                SUBJECT FILE: {character.id}
            </p>
            <h1 style={{ fontSize: "2rem" , fontWeight: "bold", margin: "0.5rem 0 1.5rem"}}>
                {character.name}
            </h1>
            {/* プロフィールカード */}
            <div
            style={{
                border: "1px solid var(--color-border)",
                borderRadius: "4px",
                backgroundColor: "var(--color-surface)",
                padding: "1.5rem"
            }}
            >
                <h2 style={{ fontSize: "0.8rem", color: "var(--color-accent)", letterSpacing: "0.15rem", marginBottom: "1rem" }}>
                    PROFILE
                </h2>
                <p style={{ color: "var(--color-text-muted)" }}>
                    {character.description}
                </p>
            </div>
        </section>
        </>
    )
}
/*
ポイント
パンくずナビ - TOP / キャラ名 の形で「今どこにいあるか」がわかるナビゲーション。サイトが深くなるほど重要になる
maxWidth: "720ox" + marginL "0 auto" - コンテンツ幅を制限して中央揃え。長文が画面いっぱいに広がると読みにくいため
SUBJECT FILE - 研究がいるっぽい演出
プロフィールカード - トップのキャラカードと同じ color-surface + color-border を使って統一感を出している
*/