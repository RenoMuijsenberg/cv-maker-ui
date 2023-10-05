import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import {useEffect} from "react";

export default function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        document.documentElement.style.setProperty('--background-primary', '#ffffff');
        document.documentElement.style.setProperty('--background-secondary', '#034096');
        document.documentElement.style.setProperty('--text-color-primary', '#000000');
        document.documentElement.style.setProperty('--text-color-secondary', '#ffffff');
        document.documentElement.style.setProperty('--accent-color', '#00b8d4');
    }, []);

    return (
        <>
            <Head>
              <title>CV Reno Muijsenberg</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
