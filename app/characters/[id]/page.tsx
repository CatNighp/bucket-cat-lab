import { getCharacter } from "@/data/characters";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function CharacterPage({ params }: Props) {
    const { id } = await params;
    const character = getCharacter(id);

    if (!character) {
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
                <h1 style={{ fontSize: "2rem", fontWeight: "bold", margin: "0.5rem 0 1.5rem" }}>
                    {character.name}
                </h1>
                {character.image && ( 
                <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                <img
                src={character.image}
                alt={character.name}
                style={{
                    maxWidth: "300px",
                    width: "100%",
                    borderRadius:"4px",
                    border: "1px solid var(--color-border)",
                }}
                />
                </div>
                )}
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
                    <dl style={{
                        display: "grid", gridTemplateColumns: "auto 1fr", gap: "0.75rem 1rem"
                    }}>
                        <dt style={{ color: "var(--color-accent)", fontSize: "0.75rem" }}>性別</dt>
                        <dd style={{ color: "var(--color-text-muted)" }}>{character.gender}</dd>

                        <dt style={{ color: "var(--color-accent)", fontSize: "0.75rem" }}>年齢</dt>
                        <dd style={{ color: "var(--color-text-muted)" }}>{character.age}</dd>

                        <dt style={{ color: "var(--color-accent)", fontSize: "0.75rem" }}>誕生日</dt>
                        <dd style={{ color: "var(--color-text-muted)" }}>{character.birthday}</dd>

                        <dt style={{ color: "var(--color-accent)", fontSize: "0.75rem" }}>職業</dt>
                        <dd style={{ color: "var(--color-text-muted)" }}>{character.occupation}</dd>

                        <dt style={{ color: "var(--color-accent)", fontSize: "0.75rem" }}>概要</dt>
                        <dd style={{ color: "var(--color-text-muted)" }}>{character.summary}</dd>

                        <dt style={{
                            color: "var(--color-accent)", fontSize: "0.75rem"
                        }}>志望動機</dt>
                        <dd style={{
                            color: "var(--color-text-muted)"
                        }}>{character.occupationReason}</dd>

                        <dt style={{ color: "var(--color-accent)", fontSize: "0.75rem" }}>性格</dt>
                        <dd style={{ color: "var(--color-text-muted)" }}>{character.personality}</dd>

                        <dt style={{ color: "var(--color-accent)", fontSize: "0.75rem" }}>外見</dt>
                        <dd style={{ color: "var(--color-text-muted)" }}>{character.appearance}</dd>
                    </dl>
                </div >
            </section >
        </>
    )
}
/*
ポイント
パンくずナビ - TOP / キャラ名 の形で「今どこにいあるか」がわかるナビゲーション。サイトが深くなるほど重要になる
maxWidth: "720ox" + marginL "0 auto" - コンテンツ幅を制限して中央揃え。長文が画面いっぱいに広がると読みにくいため
SUBJECT FILE - 研究がいるっぽい演出
プロフィールカード - トップのキャラカードと同じ color-surface + color-border を使って統一感を出している

<dl> / <dt> / <dd> - 「定義リスト」タグ。ラベルと値のペアを表すのに背マンティクスとして最適
gridTemplateColumns: "auto 1fr" - 左列（ラベル）は文字幅に合わせ、右列（値）が残りを埋める。データシートのような整列感が出る
*/