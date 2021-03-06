import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="apple-touch-icon" sizes="76x76" href="apple-icon.png" />
        </Head>

        <body className="g-sidenav-show g-sidenav-pinned">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
