import NotFoundView from "@/app/components/NotFoundView";

export default function NotFound() {
    return (
        <NotFoundView
            title="該当なし"
            message="お探しの研究対象は見つかりませんでした。"
            linkHref="/characters"
            linkLabel="キャラクター一覧へ戻る"
        />
    );
}
