import styled from 'styled-components';
import Slider from '../components/slider/Slider';
import FormComponent from '../components/Contact/Form';
import Head from 'next/head';
import { useState, useEffect } from 'react';

import { Section, Container } from '../components/styles/section.styles';
import { useMediaQuery } from '../lib/useMediaQuery';

const MainStyles = styled.div`
  min-height: calc(100vh - 100px);

  h1,
  h2,
  h3 {
    font-family: 'Druk Wide Cyr';
  }
`;

const HeadContainer = styled(Container)`
  min-height: 400px;
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
    font-size: 1.8em;
  }
  p {
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
  @media screen and (max-width: 540px) {
    div {
      height: fit-content;
      img {
        max-width: 78vw !important;
        margin: auto;
      }
    }
  }
`;

const UL = styled.ul`
  padding-left: 0.67em;
  * {
    /* font-family: 'Druk Wide Cyr'; */

    font-weight: 300;
    /* list-style: none; */
  }
`;

export default function Home() {
  const Mobile = useMediaQuery('(max-width: 540px)');
  const Tablet = useMediaQuery('(min-width: 541px)');

  const [gridSize, setGridSize] = useState(2);

  useEffect(() => {
    if (Mobile && !Tablet) {
      setGridSize(1);
    } else if (!Mobile && Tablet) {
      setGridSize(2);
    }
  }, [Mobile, Tablet]);

  return (
    <MainStyles>
      <Head>
        <title>
          Смог Опт – оптовый поставщик электронных сигарет в городе Красноярске
          (под системы). | HQD, JUUL, IZI
        </title>
      </Head>
      <Section black style={{ minHeight: '550px' }}>
        <HeadContainer>
          <LeftPart>
            {/* <img src='/images/logo.svg' alt='Логотип' /> */}
            <h1>Смог Опт – оптовый поставщик электронных сигарет.</h1>
          </LeftPart>
          <RightPart>
            <img src='images/hqd/banner.png' alt='Izi - набор' />
          </RightPart>
        </HeadContainer>
      </Section>
      <Section style={{ minHeight: 400 }}>
        <AddInfo grid={gridSize}>
          <div>
            <img
              style={{ maxWidth: '350px' }}
              src='/images/comp-1.png'
              alt='Одноразовые системы'
            />
          </div>
          <div>
            <h2>Наш опыт</h2>
            <p>
              За год на рынке мы получили опыт работы с разной продукцией.
              Сменили несколько поставщиков. Теряли и зарабатывали деньги.
            </p>
          </div>
        </AddInfo>
      </Section>
      <Section style={{ minHeight: 250 }}>
        <Container>
          <h3>С нами ты получаешь гарантию оригинальности продукции:</h3>
          <UL>
            <li>
              Смог Опт работает напрямую с дистрибьютором HQD, IZI, Maskking
              идругих позиций в России 🤙🏿
            </li>
            <li>Мы делаем возврат брака 👌🏿</li>
            <li>
              В наличии <b style={{ fontWeight: '800' }}>оригинальная</b>{' '}
              продукция. Это особенно важно сейчас, когда рынок переполнен
              подделками 🥇
            </li>
            <li>А еще у нас сочный ассортимент 🍋🧊</li>
          </UL>
        </Container>
      </Section>
      <Section id='scroll-tastes'>
        <SliedContainer>
          <h2>Что мы предлагаем:</h2>
          <Slider />
        </SliedContainer>
      </Section>
      <ContactForm id='scroll-contact'>
        <FormComponent grid={gridSize} />
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
    </MainStyles>
  );
}
