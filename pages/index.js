import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date/date';

export const getStaticProps = async() => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    };
};

const Home = ({
    allPostsData
}) => {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Heyo, world!</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {
                        allPostsData.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </Layout>
    );
};

export default Home;