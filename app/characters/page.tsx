import CharacterCard from "../components/CharacterCard";
import { characters } from "@/data/characters";

export default function CharactersPage() {
    return (
        <>
            {/* ページヘッダー */}
            <section
                className="section-border" style={{ padding: "3rem 2rem" }}
            >
                <p className="section-label-sm">
                    DATABASE
                </p>
                <h1 className="heading-lg">
                    研究対象一覧
                </h1>
                <p className="text-muted-sm">
                    登録済みの研究対象: {characters.length}件
                </p>
            </section>
            {/* キャラクター一覧 */}
            <section className="section-content">
                <div className="card-grid">
                    {characters.map((character) => (
                        < CharacterCard key={character.id} character={character}/>
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