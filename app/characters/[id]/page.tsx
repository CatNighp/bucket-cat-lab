import { getCharacter } from "@/data/characters";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function CharacterPage({ params }: Props) {
    const { id } = await params;
    const character = getCharacter(id);

    if (!character) {
        notFound();
    }

    return (
        <>
            {/* パンくずナビ */}
            <div className="breadcrumb">
                <Link href="/" className="breadcrumb-link">
                    TOP
                </Link>
                <span className="breadcrumb-separator">/</span>
                <span>{character.name}</span>
            </div>
            {/* キャラクター詳細 */}
            <section className="detail-container">
                {/* ヘッダー部分 */}
                <p className="section-label-sm">
                    SUBJECT FILE: {character.id}
                </p>
                <h1 className="heading-lg" style={{ margin: "0.5rem 0 1.5rem" }}>
                    {character.name}
                </h1>
                {character.image && ( 
                <div className="detail-image">
                <img src={character.image} alt={character.name}/>
                </div>
                )}
                {/* プロフィールカード */}
                <div className="profile-grid">
                    <h2 className="profile-card-title">
                        PROFILE
                    </h2>
                    <dl className="profile-grid">
                        <dt className="profile-label">性別</dt>
                        <dd className="profile-value">{character.gender}</dd>

                        <dt className="profile-label">年齢</dt>
                        <dd className="profile-value">{character.age}</dd>

                        <dt className="profile-label">誕生日</dt>
                        <dd className="profile-value">{character.birthday}</dd>

                        <dt className="profile-label">職業</dt>
                        <dd className="profile-value">{character.occupation}</dd>

                        <dt className="profile-label">紹介</dt>
                        <dd className="profile-value">{character.summary}</dd>

                        <dt className="profile-label">きっかけ</dt>
                        <dd className="profile-value">{character.occupationReason}</dd>

                        <dt className="profile-label">性格</dt>
                        <dd className="profile-value">{character.personality}</dd>

                        <dt className="profile-label">外見</dt>
                        <dd className="profile-value">{character.appearance}</dd>
                    </dl>
                </div >
            </section >
        </>
    )
}
/*
ポイント
パンくずナビ - TOP / キャラ名 の形で「今どこにいあるか」がわかるナビゲーション。サイトが深くなるほど重要になる
maxWidth: "720ox" + marginL "0 auto" - コンテンツ幅を制限して中央揃え。長文が画面いっぱいに広がると読みにくいため
SUBJECT FILE - 研究がいるっぽい演出
プロフィールカード - トップのキャラカードと同じ color-surface + color-border を使って統一感を出している

<dl> / <dt> / <dd> - 「定義リスト」タグ。ラベルと値のペアを表すのに背マンティクスとして最適
gridTemplateColumns: "auto 1fr" - 左列（ラベル）は文字幅に合わせ、右列（値）が残りを埋める。データシートのような整列感が出る
*/