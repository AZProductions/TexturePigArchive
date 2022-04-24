import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { GeistProvider, CssBaseline, useKeyboard, KeyCode, KeyMod, Keyboard, useTheme } from '@geist-ui/core';
import { PrefersContext, themes, ThemeType } from '@/lib/use-prefers';
import Menu from '@/components/navigation/menu';
import Footer from '@/components/navigation/footer';
import { Html, Main, NextScript } from 'next/document';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/nav.css';
import '../styles/nav2.css';
import '../styles/footer.css';
import { MDXProvider } from '@mdx-js/react';
import Sidemenu from '@/components/navigation/sidemenu';

const App = ({ Component, pageProps }: AppProps) => {
  const theme = useTheme();
  const accent1 = theme.palette.accents_1;
  const [themeType, setThemeType] = useState<ThemeType>('dark');
  useEffect(() => {
    document.documentElement.removeAttribute('style');
    document.body.removeAttribute('style');

    const theme = window.localStorage.getItem('theme') as ThemeType;
    if (themes.includes(theme)) setThemeType(theme);
  }, []);

  const switchTheme = useCallback((theme: ThemeType) => {
    setThemeType(theme);
    if (typeof window !== 'undefined' && window.localStorage) window.localStorage.setItem('theme', theme);
  }, []);

  return (
    <>
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>AZ Software - Writing the future.</title>
        <meta
          name="twitter:description"
          content="AZ Software is one of the world leading open-source fully transparent software companies. It's main focus is Privacy and Security. Read more.."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AZ Software - Writing The Future." />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="AZ Software is one of the world leading open-source fully transparent software companies. It's main focus is Privacy and Security. The most popular product from AZ Software is Kookaburra on Github.com/AZProductions"
        />
        <link rel="icon" type="image/svg+xml" sizes="400x400" href="assets/logo/render.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Head>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <PrefersContext.Provider value={{ themeType, switchTheme }}>
          <Menu />
          <div className="content-box">
            <div className="sidemenu sidemenucard">
              <Sidemenu />
            </div>
            <div className="content">
              <MDXProvider>
                <Component {...pageProps} />
              </MDXProvider>
            </div>
          </div>
          <Footer />
        </PrefersContext.Provider>
      </GeistProvider>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.min.js"
        integrity="sha512-OvBgP9A2JBgiRad/mM36mkzXSXaJE9BEIENnVEmeZdITvwT09xnxLtT4twkCa8m/loMbPHsvPl0T8lRGVBwjlQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      ></script>
      <script src="https://www.azsoftware.org/cdn/bs-init.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
      <script src="https://www.azsoftware.org/cdn/increment.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
      <style jsx>{`
        .content-box {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          box-sizing: border-box;
        }
        .content {
          min-height: calc(100vh - 108px);
          max-width: 782pt;
          margin: 24px 20px;
          padding: 5 15px;
        }
        .sidemenu {
          margin-right: 18%;
        }
        .sidemenucard {
          background: ${accent1};
        }
      `}</style>
    </>
  );
};

export default App;
