import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <title>CV Reno Muijsenberg</title>
        </Head>
        <Component {...pageProps} />
      </>
  )
}
