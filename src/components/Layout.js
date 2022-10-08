import Head from "next/head";
import React from "react";

export default function Layout({ title, children }) {
const pageTitle = `${title} | Landing Page`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Memperingati Hari Maulid Nabi Muhamad S.A.W" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
}
