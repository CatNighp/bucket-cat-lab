export type Character = {
    id: string;
    name: string;
    gender: string;
    age: string;
    birthday: string;
    summary: string;
    occupation: string;
    occupationReason: string;
    personality: string;
    appearance: string;
    image: string;
}

export const characters: Character[] = [
    {
        id: "bucket-cat",
        name: "バケットネコ",
        gender: "オス",
        age: "推定5歳（猫年齢）",
        birthday: "3月14日（保護された日）",
        summary: "元野良猫の研究者。古傷を隠すように穴の空いたブリキのバケツを被り、白衣をまとって研究を続けている。",
        occupation: "研究者",
        occupationReason: "野良猫時代に見かけた人間たちの研究風景に強く惹かれ、見よう見まねで実験や観察を始めた。",
        personality: "好奇心旺盛で穏やか。気になったものは放っておけず、考え事をしている時によく喉が鳴る。人当たりは柔らかいが、自分の傷についてはあまり語りたがらない。",
        appearance: "左目と右耳に古傷を持つ猫の獣人。穴の空いたブリキのバケツを被り、少し大きめの白衣を身につけている。",
        image: "/images/characters/bucket-cat.png",
    }
];

export function getCharacter(id: string) {
    return characters.find((c) => c.id === id);
}
/*
age を string にした理由- numberだろ「推定５歳」のような表現ができない。キャラ設定は自由な表記が多いの絵文字列の方が柔軟
summary と description の違い - 急description を summary(概要紹介)に名前を変更。より意味が明確
*/ 