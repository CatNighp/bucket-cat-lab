// このコンポーネントは文字列配列を受け取る約束
type Props = {
    tags: string[];
};

// 受け取った中からtagsの配列を取り出す
export default function TagList({ tags }: Props){
    return(
        <div className="tag-list">
            {/* tagsの配列の中身をtagとしてひとつづ取り出している */}
            {tags.map((tag) =>( 
                // 並んでいるspan(リストの要素)を見分けるため
                // <span>はタブ一個だから単数のtag
                <span key={tag} className="tag">
                    {tag}
                </span>
            ))}
        </div>
    );
}