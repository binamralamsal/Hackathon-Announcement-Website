import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Xavier Computer and Coding Club | Home</title>
        <meta
          name="description"
          content="Xavier Computer and Coding Club | Home"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <h1 className="container">Helloooooooo Itss meeee Prashant</h1>
      </main>
    </>
  );
}
