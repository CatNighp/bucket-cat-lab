"use client"
import { useState } from "react";
import CharacterCard from "@/app/components/CharacterCard";
import { Character } from "@/data/characters";
type Props = {
    characters: Character[]
};

export default function CharacterList({ characters }: Props){
    const [query, setQuery] = useState("");
    const filtered = characters.filter((character) => 
        character.name.includes(query)
    );
    return(
        <>
        <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="名前で検索..."
        className="search-box"
        />
        <p className="card-length">
            {filtered.length}件 該当
        </p>
            {filtered.length === 0 && <p>該当なし</p>}
        <div className="card-grid">
            {filtered.map((character) => (
                <CharacterCard key={character.id} character={character}/>
            ))}
        </div>
        </>
    );
}