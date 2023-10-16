import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
