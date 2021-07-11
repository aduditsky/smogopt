import { createGlobalStyle } from 'styled-components';
import SiteProvider from '../context/site.context';
import Head from 'next/head';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useMediaQuery } from '../lib/useMediaQuery';
import { useState, useEffect } from 'react';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Druk Wide Cyr';
    src: url('/fonts/Druk-Wide-Cyr-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: 'Druk Wide Cyr';
    src: url('/fonts/Druk-Wide-Cyr-Heavy.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}
@font-face {
    font-family: 'Druk Wide Cyr';
    src: url('/fonts/Druk-Wide-Cyr-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}
@font-face {
    font-family: 'Helvetica';
    src: url('/fonts/helvetica-regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

*{
  box-sizing: border-box;
}

*:focus {
  outline:0;
}

.custom-marquee{
  overflow-x: unset !important;
}

.BottomModal{
  overflow-x: hidden;
  position: relative;
}

.dgqwd3{
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: 450px;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    z-index: 100500;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica';
    background-color: #fff;
  }

  .ModalOverlay{
    z-index: 99999;
  }

  .swiper-button-prev, .swiper-button-next{
    color: #000;
  }

  @media screen and (max-width: 540px){
    .BottomModal{
      width: 100% !important;
      padding: 1em;
    }
  }

`;

export default function App({ Component, pageProps }) {
  const Mobile = useMediaQuery('(max-width: 540px)');
  const Tablet = useMediaQuery('(min-width: 541px)');

  const [footerSize, setGridSize] = useState(2);

  useEffect(() => {
    if (Mobile && !Tablet) {
      setGridSize(1);
    } else if (!Mobile && Tablet) {
      setGridSize(3);
    }
  }, [Mobile, Tablet]);

  return (
    <SiteProvider>
      <Head>
        <link rel='preload' href='/fonts/Druk-Wide-Cyr-Bold.woff' as='font' />
        <link rel='preload' href='/fonts/Druk-Wide-Cyr-Heavy.woff' as='font' />
        <link rel='preload' href='/fonts/Druk-Wide-Cyr-Medium.woff' as='font' />
        <link rel='preload' href='/fonts/helvetica-regular.woff2' as='font' />
        <link type='image/png' rel='icon' href='images/favicon.png' />
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer grid={footerSize} />
    </SiteProvider>
  );
}
