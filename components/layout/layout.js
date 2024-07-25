import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '@styles/utils.module.css'
import Link from 'next/link'

const name = `Alejandro Ju${String.fromCharCode(225)}rez`;
export const siteTitle = 'Alejandro\'s Portfolio';

const Layout = ({ 
    children,
    home
}) => {
    return (
        <div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="A software engineering blog sharing insights, tutorials, and experiences in various technologies and programming languages. Join me on my journey as a software engineer."
            />
            <meta name="og:title" content={siteTitle} />
        </Head>
        <header className={styles.header}>
            {home ? (
            <>
                <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
            ) : (
            <>
                <Link href="/" legacyBehavior>
                <a>
                    <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                    />
                </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                <Link href="/" legacyBehavior>
                    <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
                </h2>
            </>
            )}
        </header>
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
            <Link href="/" legacyBehavior>
                <a>← Back to home</a>
            </Link>
            </div>
        )}
        </div>
    );
};

export default Layout;
