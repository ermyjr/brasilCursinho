import Head from "next/head";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ONG</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main />
    </div>
  );
}
