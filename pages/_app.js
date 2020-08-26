import '../styles/globals.css';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  <Head>
    <link href = "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
    rel = "stylesheet"/>
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
