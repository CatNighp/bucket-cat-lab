import NotFoundView from "@/app/components/NotFoundView";

// notFound() やURL不一致で表示される「全体の404」。
// 見た目は NotFoundView に任せ、このページ固有の文言だけ props で渡す。
export default function NotFound() {
    return (
        <NotFoundView
            title="(´・ω・｀)"
            message="お探しのページは見つかりませんでした。"
            linkHref="/"
            linkLabel="TOP へ戻る"
        />
    );
}
