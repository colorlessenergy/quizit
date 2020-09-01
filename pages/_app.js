import '../styles/globals.css';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  <Head>
    <link href = "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
    rel = "stylesheet"/>
    <meta charset='utf-8' />
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
    <meta name='description' content='Description' />
    <meta name='keywords' content='Keywords' />

    <link rel="manifest" href="/manifest.json" />
    <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
    <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <meta name="theme-color" content="#317EFB"/>
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
