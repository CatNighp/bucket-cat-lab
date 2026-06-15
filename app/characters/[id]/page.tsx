import { getCharacter } from "@/data/characters";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{
        id: string;
    }>
};

export default async function CharacterPage({
    params,
}: Props){
    const { id } = await params;
    const character = getCharacter(id);

    if(!character){
        notFound();
    }

    return(
        <main>
            <h1>{character.name}</h1>
            <p>{character.description}</p>

            <p>ID: {character.id}</p>
        </main>
    );
}