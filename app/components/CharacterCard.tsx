import Link from "next/link";
import { Character } from "@/data/characters";

type Props = {
    character: Character;
};

export default function CharacterCard({ character }: Props) {
    return (
        <Link
            href={`/characters/${character.id}`}
            className="card"
        >
            {character.image && (
                <img
                    src={character.image}
                    alt={character.name}
                    style={{
                        width: "100%",
                        height: "160px",
                        objectFit: "cover",
                        borderRadius: "4px",
                        marginBottom: "0.75rem",
                    }}
                />
            )}
            <p className="file-id">
                ID: {character.id}
            </p>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", margin: "0.5rem 0" }}>
                {character.name}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
                {character.summary}
            </p>
        </Link>
    );
}
/*
ポイント
コンポーネントとは
Reactの考え方の核心。「繰り返し使うUIのパーツ」を１つの関数として定義し、使いたい場所から呼び出す仕組み
type Props - このコンポーネントが受け取るデータの型定義。「このカードにはCharacter 型のデータをたわしてね」という契約
{ character }: Props - 「props(プロップス)」と呼ばれる。親コンポーネントからデータを受け取る仕組み
export default - 他のファイルからimport できるようにする
*/ 