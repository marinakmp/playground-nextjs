import Head from "next/head";
import Link from "next/link";
import ImgDemo from "../../components/imgDemo/imgDemo";
import Layout from "../../components/layout";

export default function Images() {
  return (
    <Layout>
      <Head>
        <title>Image Demo</title>
      </Head>
      <h1>Image Demo</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <ImgDemo />
    </Layout>
  );
}
