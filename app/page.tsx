import Link from "next/link";
import { characters } from "@/data/characters";

export default function Home(){
  return(
    <main>
      <h1>バケットネコ研究所</h1>

      {characters.map((character) => (
        <div key={character.id}>
          <Link href={`/characters/${character.id}`}>
          {character.name}
          </Link>
        </div>
      ))}
    </main>
  )
}