import Head from "next/head";
import Date from "@components/date/date";
import Layout from "@components/layout/layout";
import { getAllPostsIds, getPostData } from "@lib/posts";
import utilStyles from '@styles/utils.module.css';

export const getStaticPaths = async() => {
    const paths = getAllPostsIds();
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async({
    params
}) => {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    };
};

const Post = ({
    postData
}) => {
    return  (
        <Layout>
            <Head>
                <title>
                    {postData.title}
                </title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>
                    {postData.title}
                </h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
};

export default Post;