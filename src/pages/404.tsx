import React from 'react';
import { Page, Text, useTheme, Code, Note, Link, Collapse } from '@geist-ui/core';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Page404 = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Page not found - AZ Software</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="page__wrapper" style={{ height: '100%' }}>
        <Page>
          {theme.type === 'dark' ? (
            <>
              <h1 className="h-one-dm">404.</h1>
              <h1 className="h-one-sub-dm">This page does not exist.</h1>
            </>
          ) : (
            <>
              <h1 className="h-one">404.</h1>
              <h1 className="h-one-sub">This page does not exist.</h1>
            </>
          )}

          <Note width="50%" type="warning" label="Tip">
            Join in and{' '}
            <Link underline color href="https://www.azsoftware.org/help">
              help us
            </Link>{' '}
            out developing <strong>open-source software</strong>.
          </Note>
        </Page>
        <style jsx>
          {`
            .page__wrapper {
              // background-color: ${theme.palette.accents_1};
              // background-color:rgba(0, 0, 0, 0.1);
            }
            .h-one {
              /*font-size: 53px;*/
              color: rgb(0, 0, 0); /*background: #ffffff;*/
              font-family: Poppins, sans-serif;
              font-weight: bold;
              font-size: 129px;
              background: -webkit-linear-gradient(#6610f2, #198754);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              text-shadow: 1px 1px 4px rgb(255, 255, 255);
              padding-bottom: 13px;
              text-align: left;
              padding-left: 72px;
              padding-top: 85px;
              word-wrap: break-word;
            }
            .h-one-dm {
              filter: invert(1) brightness(2);
              /*font-size: 53px;*/
              color: rgb(0, 0, 0); /*background: #ffffff;*/
              font-family: Poppins, sans-serif;
              font-weight: bold;
              font-size: 129px;
              background: -webkit-linear-gradient(#6610f2, #198754);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              text-shadow: 1px 1px 4px rgb(255, 255, 255);
              padding-bottom: 13px;
              text-align: left;
              padding-left: 72px;
              padding-top: 85px;
              word-wrap: break-word;
            }
            .h-one-sub {
              /*font-size: 53px;*/
              color: rgb(0, 0, 0); /*background: #ffffff;*/
              font-family: Poppins, sans-serif;
              font-weight: bold;
              font-size: 37px;
              background: -webkit-linear-gradient(#6610f2, #198754);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              text-shadow: 1px 1px 4px rgb(255, 255, 255);
              padding-bottom: 122px;
              text-align: left;
              padding-left: 86px;
            }
            .h-one-sub-dm {
              filter: invert(1) brightness(2);
              /*font-size: 53px;*/
              color: rgb(0, 0, 0); /*background: #ffffff;*/
              font-family: Poppins, sans-serif;
              font-weight: bold;
              font-size: 37px;
              background: -webkit-linear-gradient(#6610f2, #198754);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              text-shadow: 1px 1px 4px rgb(255, 255, 255);
              padding-bottom: 122px;
              text-align: left;
              padding-left: 86px;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Page404;
