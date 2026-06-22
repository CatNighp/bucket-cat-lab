import Link from "next/link";
import { characters } from "@/data/characters";

export default function CharactersPage() {
    return (
        <>
            {/* ページヘッダー */}
            <section
                style={{
                    borderBottom: "1px solid var(--color-border)",
                    padding: "3rem 2rem",
                }}
            >
                <p style={{ fontSize: "0.75rem", color: "var(color-text-muted)", letterSpacing: "0.2em" }}>
                    DATABASE
                </p>
                <h1 style={{ fontSize: "2rem", fontWeight: "bold", margin: "0.5rem 0" }}>
                    研究対象一覧
                </h1>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                    登録済みの研究対象: {characters.length}件
                </p>
            </section>
            {/* キャラクター一覧 */}
            <section style={{ padding: "3rem 2rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
                    {characters.map((character) => (
                        <Link
                            key={character.id}
                            href={`character/${character.id}`}
                            style={{
                                display: "block",
                                border: "1px solid var(--color-border)",
                                borderRadius: "4px",
                                padding: "1.5rem",
                                backgroundColor: "var(--color-surface)",
                                textDecoration: "none",
                                color: "inherit",
                            }}
                        >
                            <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
                                ID: {character.id}
                            </p>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", margin: "0.5rem 0" }}>
                                {character.name}
                            </h3>
                            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
                                {character.occupation}
                            </p>
                        </Link>
                    ))}
                </div>

            </section>
        </>
    );
}
/*
ポイント
characters.length - 配列の要素数。キャラが増えれば自動で数字が変わる
カード部分のは page.tsx とほぼ同じコード。今は重複していOK。フェーズ３でコンポーネント化して共通化するのが正しい順番
トップページはヒーロー＋カードの「概要」、こちらは一覧に特化した「データベース」ページという棲み分け

*/ 