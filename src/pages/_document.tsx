import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link rel="icon" href="/icon.png" sizes="32x32"></link>
      <meta property="og:title" content="Ryan Gomes — Desenvolvedor Front-End"></meta>
      <meta property="og:type" content="website"></meta>
      <title>Ryan Gomes — Desenvolvedor Front-End</title>
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
