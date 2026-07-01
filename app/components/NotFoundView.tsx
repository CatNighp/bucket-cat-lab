import Link from "next/link";

type Props = {
    title: string;
    message: string;
    linkHref: string;
    linkLabel: string;
};

export default function NotFoundView({ title,message,linkHref,linkLabel}: Props){
    return(
        <section className="section-border">
            <p className="section-label">--- ERROR 404 ---</p>
            <h1 className="heading-xl">{title}</h1>
            <p className="text-muted">{message}</p>
            <p style={{ marginTop: "1.5rem" }}>
                <Link href={linkHref} className="breadcrumb-link">
                {linkLabel}
                </Link>
            </p>
        </section>
    );
}