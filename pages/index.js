import styled from 'styled-components';
import Slider from '../components/slider/Slider';
import FormComponent from '../components/Contact/Form';
import Head from 'next/head';
import { useState, useEffect, useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import { Section, Container } from '../components/styles/section.styles';
import { useMediaQuery } from '../lib/useMediaQuery';
import ModalTelegram from '../components/modalTelegram/ModalTelegram';
import { CallBackStyles } from '../components/header/Header';
import { ModalUnderAge } from '../components/ModalUnderAge/ModalUnderAge';

import { SiteContext } from '../context/site.context';
import ScrollTrigger from 'react-scroll-trigger';

const MainStyles = styled.div`
  /* min-height: calc(100vh - 100px); */
  h1,
  h2,
  h3 {
    font-family: 'Druk Wide Cyr';
  }
`;

const HeadContainer = styled(Container)`
  height: 100%;
  display: grid;
  padding: 3em 1em;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding-left: 1.5em;
    padding-right: 1.5em;
  }
`;

const SliedContainer = styled(Container)`
  padding: 1em;
`;

const ContactForm = styled(Section)``;

const LeftPart = styled.div`
  img {
    max-width: 110px;
  }
  h1 {
    font-weight: bold;
    font-size: 1.8em;
  }
`;

const RightPart = styled.div`
  img {
    max-width: 100%;
  }
`;

const AddInfo = styled.div`
  display: flex;
  ${(props) => props.grid === 1 && 'flex-direction: column;'}
  width: 100%;
  max-width: 1170px;
  margin: 1em auto;
  h2 {
    font-size: 1.4em;
    margin: 0.34em;
    margin-bottom: 1.2em;
  }
  p {
    margin-top: 0;
    font-size: 1em;
    line-height: 1.5em;
    font-weight: 300;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    padding: 0 1em;
    &:first-child {
      align-items: center;
    }
  }

  .pod-desc {
    padding: 2em !important;
  }
  @media screen and (max-width: 540px) {
    div {
      height: fit-content;
      img {
        max-width: 78vw !important;
        margin: auto;
      }
    }
    .pod-desc {
      padding: 1.4em !important;
    }
  }
`;

const UL = styled.ul`
  padding-left: 0.67em;
  li {
    line-height: 1.5em;
    font-size: 1em;
    font-weight: 300;
    margin-bottom: 1em;
    list-style: square;
  }
  * {
    /* font-family: 'Druk Wide Cyr'; */

    font-weight: 300;
    /* list-style: none; */
  }
  @media screen and (min-width: 540px) {
    max-width: 70%;
  }
`;

const AnoyingButtonContainer = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1em;
  z-index: 1999;
`;

const GoToForm = styled(ScrollLink)`
  display: block;
  cursor: pointer;
  text-align: center;
  color: #fff;
  width: 100%;
  max-width: 500px;
  font-weight: 800;
  font-size: 1.2em;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0;
  background-color: #000;
  padding: 13px 12px 11px 12px;
  box-shadow: 0px 6px 11px 1px rgba(0, 0, 0, 0.1);
`;

export default function Home({ isAgreed }) {
  const Mobile = useMediaQuery('(max-width: 540px)');
  const Tablet = useMediaQuery('(min-width: 541px)');

  const [anoying, setShow] = useState(true);
  const [gridSize, setGridSize] = useState(2);
  const { setScrollBody } = useContext(SiteContext);

  useEffect(() => {
    if (Mobile && !Tablet) {
      setGridSize(1);
    } else if (!Mobile && Tablet) {
      setGridSize(2);
    }
  }, [Mobile, Tablet]);

  return (
    <MainStyles>
      {!isAgreed && <ModalUnderAge />}
      <Head>
        <title>
          Смог Опт – оптовый поставщик электронных сигарет в городе Красноярске
          (под системы). | HQD, IZI, Maskking, Elf Bar
        </title>
      </Head>
      <Section black style={{ height: '550px' }}>
        <HeadContainer>
          <LeftPart>
            {/* <img src='/images/logo.svg' alt='Логотип' /> */}
            <h1>Смог Опт – оптовый поставщик электронных сигарет.</h1>
            <CallBackStyles
              to='scroll-contact'
              spy={true}
              smooth={true}
              duration={1000}
              style={{ width: 'fit-content' }}
            >
              Узнать оптовый прайс
            </CallBackStyles>
          </LeftPart>
          <RightPart>
            <img src='/images/banner.jpg' alt='Izi - набор' />
          </RightPart>
        </HeadContainer>
      </Section>
      <Section style={{ minHeight: 400 }}>
        <AddInfo grid={gridSize}>
          <div>
            <img
              style={{ maxWidth: '350px' }}
              src='/images/comp-1.jpg'
              alt='Одноразовые системы'
            />
          </div>
          <div className='pod-desc'>
            <h2>Одноразки качают?</h2>
            <p>
              В этом году одноразки перевернули вейп-игру. Сочная вкусопередача
              и простота использования по-настоящему влюбили в себя
              потребителей.
            </p>
            <p>
              Каждый день новые бренды выходят на рынок, прилавки магазинов
              наполняются, а клиенты скупают уже полюбившийся продукт.
            </p>
            <p>
              Бешеная популярность и потребность в покупке нового устройства
              создают стабильно растущий спрос на продукцию.
            </p>
            <p>
              Рентабельность оригинальной продукции доходит до 50%, а работа
              оригиналами гарантировано повышает возвращаемость клиента в Ваш
              бизнес.
            </p>
          </div>
        </AddInfo>
      </Section>
      <Section style={{ minHeight: 250 }}>
        <Container>
          <h2>Почему Вы выберете Смог Опт?</h2>
          <UL>
            <li>
              Смог Опт работает напрямую с дистрибьютором HQD, IZI, Maskking,
              Elf Bar и других позиций в России 🤙🏿
            </li>

            <li>Мы делаем возврат брака 👌🏿</li>
            <li>
              В наличии оригинальная продукция. Весь товар сертифицирован и
              имеет декларации соответствия. Это особенно важно сейчас, когда
              рынок переполнен подделками 🥇
            </li>
            <li>
              Посмотреть товар перед заказом? Без проблем😉 Со всей продукцией
              Вы можете ознакомиться в нашем розничном магазине Smog Shop на
              Мира 96
            </li>

            <li>
              Только начинаете работу с продукцией? Менеджеры Смог Опта помогут
              составить грамотную подборку товарного ассортимента под Ваш бизнес
            </li>

            <li>А еще у нас очень сочный ассортимент 🍋🧊</li>
          </UL>
        </Container>
      </Section>
      <Section id='scroll-tastes' style={{ overflowX: 'hidden' }}>
        <SliedContainer>
          <h2>Что мы предлагаем:</h2>
          <Slider />
        </SliedContainer>
      </Section>
      {anoying && (
        <AnoyingButtonContainer>
          <GoToForm
            to='scroll-contact'
            spy={true}
            smooth={true}
            duration={1000}
          >
            Узнать прайс
          </GoToForm>
        </AnoyingButtonContainer>
      )}

      <ContactForm id='scroll-contact'>
        <ScrollTrigger
          onEnter={() => setShow(false)}
          onExit={() => setShow(true)}
        >
          <FormComponent grid={gridSize} />
        </ScrollTrigger>
      </ContactForm>
      {/* <Section className={styles.ourMission}>
        <Container>
          <h3>Наша миссия</h3>
          <p>
            <b>Создать лучший сервис для Вас.</b>
          </p>
          <ul>
            <li>
              Смотри, как мы растем, делимся опытом работы с продукцией и
              поставщиками в нашем телеграмм канале.
            </li>
          </ul>
        </Container>
      </Section> */}
      <ModalTelegram />
    </MainStyles>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { isAgreed: req.cookies.isAgreed || false } };
}
