import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <div>
      <Head>
        <meta name="title" content="Ikhsan N. Huda — Dev." />
        <meta name="description" content="Ikhsan N. Huda's personal website. A web developer based in Indonesia." />
        <meta name="keywords" content="Ikhsan N. Huda, Ikhsan, Huda, Ikhsan Huda, Web Developer, Frontend Developer, React Developer, Next.js Developer, Indonesia" />
        <meta name="author" content="Ikhsan N. Huda" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png" />
        <link rel="shortcut icon" href='/favicon.ico' type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
