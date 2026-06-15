import { describe } from "node:test";

export type Character = {
    id: string;
    name: string;
    description: string;
    image: string;
}

export const characters: Character[]=[
    {
        id: "bucket-cat",
        name: "バケットネコ",
        description: "元野良猫の研究者",
        image: "images/bucket-cat.png",
    }
];

export function getCharacter(id: string){
    return characters.find((c) => c.id === id);
}