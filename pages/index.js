import Head from "next/head";
import Episode from "../Components/Episode";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Rayuwa Mai Dadi</title>
        <meta
          name="description"
          content="Kasance Mafi Farin Ciki A Cikin Mutane"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Episode />
      <Episode />
    </div>
  );
}
