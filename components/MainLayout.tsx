import Head from "next/head";
import styles from "../styles/MainLayout.module.css"

type TProps = {
    title: string
    keywords: string
    children: React.ReactNode
}

export function MainLayout({ title, keywords, children }: TProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
            </Head>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <a
                    href="https://github.com/Zhark10"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by Zhark10
                </a>
            </footer>
        </>
    )
}