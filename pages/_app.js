import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div className='container position-relative'>
      <Head>
        <link rel="shortcut icon" href="/microphone.ico" />
      </Head>
    <Header />
    <Component {...pageProps}>
    </Component>
    </div>
  );
}

export default MyApp;
