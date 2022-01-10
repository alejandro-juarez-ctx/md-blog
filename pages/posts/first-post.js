import Head from "next/head";
import Layout from "../../components/layout/layout";

const FirstPost = () => {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <p>
                Spoopy stuff in here!
            </p>
        </Layout>
    )
};

export default FirstPost;
