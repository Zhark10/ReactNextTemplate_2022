import Head from "next/head";

type TProps = {
    title: string
    keywords: string
    children: React.ReactNode
}

export function MainLayout({title, keywords, children}: TProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}