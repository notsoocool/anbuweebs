import Head from "next/head";
import Anime from "./landing/anime"

export default function Home() {
  return (
    <div>
      <Head>
        <title>AnbuWeebs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Anime/>
    </div>
  );
}