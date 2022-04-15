import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-cartoon-grey dark:bg-cartoon-black duration-300 transition">
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <main>
            <Main />
          </main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
