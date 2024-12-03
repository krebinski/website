import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="pt">
      <Head>
        {/* Configurações globais, como ícones e meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
