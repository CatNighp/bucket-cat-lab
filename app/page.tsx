import CharacterCard from "./components/CharacterCard";
import { characters } from "@/data/characters";

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="section-border">
        <p className="hero-subtitle section-label">
          -- WELCOME TO --
        </p>
        <h1 className="hero-title heading-xl">
          バケットネコ研究所
        </h1>
        <p className="hero-description text-muted">
          Laboratory for Bucket Cat Research
        </p>
      </section>
      {/* キャラクター一覧（仮） */}
      <section className="section-content">
        <h2 className="heading-section">
          -- RESEARCH SUBJECTS --
        </h2>
        <div className="card-grid">
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