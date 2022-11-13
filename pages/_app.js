import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'
import React, { useEffect } from "react";
import { Workbox } from "workbox-window";
import PWAInstallerPrompt from 'react-pwa-installer-prompt'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (
      !("serviceWorker" in navigator) ||
      process.env.NODE_ENV !== "production"
    ) {
      console.warn("Progressive Web App support is disabled");
      return;
    }
const wb = new Workbox("sw.js", { scope: "/" });
    wb.register();
  }, []);

  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
    crossOrigin="anonymous" 
    />
      
    <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
    crossOrigin="anonymous" defer/>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9756021897979907"
     crossOrigin="anonymous" defer/>
     <Head>
        <title>The Memery</title>
        <meta name="description" content="A Website To scrool Throh Mems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>  
    <Component {...pageProps} />

    </>
    );
}

export default MyApp
