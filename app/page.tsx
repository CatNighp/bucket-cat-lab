import CharacterCard from "./components/CharacterCard";
import { characters } from "@/data/characters";

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <section
        style={{
          borderBottom: "1px solid var(--color-border)",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <p className="hero-subtitle" style={{ color: "var(--color-accent)", fontSize: "0.85rem", letterSpacing: "0.3em" }}>
          -- WELCOME TO --
        </p>
        <h1 className="hero-title" style={{ fontSize: "2.5rem", fontWeight: "bold", margin: "0.5rem 0" }}>
          バケットネコ研究所
        </h1>
        <p className="hero-description" style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
          Laboratory for Bucket Cat Research
        </p>
      </section>
      {/* キャラクター一覧（仮） */}
      <section style={{ padding: "3rem 2rem" }}>
        <h2 style={{ fontSize: "0.85rem", color: "var(--color-accent)", letterSpacing: "0.2em", marginBottom: "1.5em" }} >
          -- RESEARCH SUBJECTS --
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </section>
    </>
  );
}
/*
ポイント
section で区切る - 意味的なまとまりごとに<section>を使う。HTMLのセマンティクスとして正しい
letterSpacing: "0.3em" - 文字間を広げると「研究資料のラベル」っぽい雰囲気が出る

gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" - キャラクターが増えても自動で折り返すグリッド。1人でも10人でもレイアウトがくずれない
Link　をカード全体にしている - カードのどこをクリックしても詳細に飛べる
ID: {character.id} - 研究資料のがいる番号っぽい表示

height: "160px" + objectFit: "cover" - 画像のサイズがバラバラでもカードの高さが揃う。cover は画像の比率を保ちつつ枠を埋める切り抜き方式
詳細ページでは maxWidth: "300px"で控えめに、カードでは width: "100%" でカード幅いっぱいに、と使い分けている
*/