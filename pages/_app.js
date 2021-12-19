import { createGlobalStyle } from 'styled-components';
import SiteProvider, { SiteContext } from '../context/site.context';
import Head from 'next/head';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useMediaQuery } from '../lib/useMediaQuery';
import { useState, useEffect, useContext } from 'react';

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

  .CenterModal{
    position: relative;
    min-height: 330px;
    display: flex;
    background-color: #fff;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    .modal-tg-button{
      width: fit-content;
      margin: 1em auto;
      padding: 0.7em 1.4em;
      display: flex;
      justify-content: center;
      img{
        width: 1em;
        height: auto;
        margin-right: 1em;
      }
    }
    h1{
      font-family: 'Druk Wide Cyr';
      text-transform: uppercase;
      font-size: 1.33em;
    }
    p{
      font-size: 1em;
      margin: 1em 0;
    }
    button{
      top: 2rem;
      border: none;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin: 0;
      right: 2rem;
      background: none;
      position: absolute;
      cursor: pointer;
      p{
        font-weight: 900;
        transform: rotate(45deg);
        font-size: 3em;
      }
    }
    .modal-tg-button{
      border-radius: 10px;
      font-size: 1.2em;
      font-weight: 600;
      padding: 0.7em 1em;
      background-color: #0088cc;
      text-decoration: none;
      color: white;
    }

    .whatsapp{
      background-color: #43d854;
      img{
        margin-right: 5px;
      }
    }
  }

  .swiper-button-prev, .swiper-button-next{
    color: #000;
  }

  @media screen and (max-width: 540px){
    .BottomModal{
      width: 100% !important;
      padding: 1em;
    }
    .CenterModal{
      padding: 2em 1em;
      max-width: 95vw;
      width: 100%;
    }
  }

`;

export default function App({ Component, pageProps }) {
  const Mobile = useMediaQuery('(max-width: 540px)');
  const Tablet = useMediaQuery('(min-width: 541px)');

  const { bodyNoScroll } = useContext(SiteContext);

  const [footerSize, setGridSize] = useState(2);

  // localStorage.setItem('isConfirm', false);
  // localStorage.removeItem('isConfirm');

  //Полезная вещь
  // if (typeof window !== 'undefined') {
  //   console.log('we are running on the client');
  // } else {
  //   console.log('we are running on the server');
  // }

  useEffect(() => {
    if (Mobile && !Tablet) {
      setGridSize(1);
    } else if (!Mobile && Tablet) {
      setGridSize(2);
    }
  }, [Mobile, Tablet]);

  return (
    <SiteProvider>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>
          Смог Опт – оптовый поставщик электронных сигарет в городе Красноярскеи
          по России (под системы). SmogOpt | HQD, IZI
        </title>
        <meta
          name='title'
          content='Смог Опт – оптовый поставщик электронных сигарет в городе Красноярске и по России (под системы). SmogOpt | HQD, IZI'
        />
        <meta
          name='description'
          content='Купить одноразовые электронные сигареты ОПТОМ по ценам от производителя в Красноярске и c доставкой по России. 8 (950) 420-66-33 Картриджи, испарители, жидкости, оптовые цены.'
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://smogopt.ru/' />
        <meta
          property='og:title'
          content='Смог Опт – оптовый поставщик электронных сигарет в городе Красноярске и по России (под системы). SmogOpt | HQD, IZI'
        />
        <meta
          property='og:description'
          content='Купить одноразовые электронные сигареты ОПТОМ по ценам от производителя в Красноярске и c доставкой по России. 8 (950) 420-66-33 Картриджи, испарители, жидкости, оптовые цены.'
        />
        <meta
          property='og:image'
          content='https://smogopt.ru/images/meta-image.jpg'
        />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://smogopt.ru/' />
        <meta
          property='twitter:title'
          content='Смог Опт – оптовый поставщик электронных сигарет в городе Красноярске и по России (под системы). SmogOpt | HQD, IZI'
        />
        <meta
          property='twitter:description'
          content='Купить одноразовые электронные сигареты ОПТОМ по ценам от производителя в Красноярске и c доставкой по России. 8 (950) 420-69-69 Картриджи, испарители, жидкости, оптовые цены.'
        />
        <meta
          property='twitter:image'
          content='https://smogopt.ru/images/meta-image.jpg'
        />
        <link rel='preload' href='/fonts/Druk-Wide-Cyr-Bold.woff' as='font' />
        <link rel='preload' href='/fonts/Druk-Wide-Cyr-Heavy.woff' as='font' />
        <link rel='preload' href='/fonts/Druk-Wide-Cyr-Medium.woff' as='font' />
        <link rel='preload' href='/fonts/helvetica-regular.woff2' as='font' />
        <link type='image/png' rel='icon' href='images/favicon.png' />
      </Head>
      <GlobalStyle isScrolled={bodyNoScroll} />
      <Header />
      <Component {...pageProps} />
      <Footer grid={footerSize} />
    </SiteProvider>
  );
}
