import { useContext, useState } from 'react';
import { CenterModal, ModalTitle, ModalCloseTarget } from 'react-spring-modal';
import Cookies from 'js-cookie';
import styled from 'styled-components';
import { SiteContext } from '../../context/site.context';

const CoverModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.95);
    z-index: 10;
  }
`;

const SimpleModal = styled.div`
  width: 100%;
  max-width: 500px;
  height: fit-content;
  max-height: 80vh;
  background-color: #fff;
  overflow: scroll;
  border-radius: 15px;
  padding: 2em;
  z-index: 20;
  margin: 10px;
  h1 {
    font-size: 1.4em;
  }
  p {
    width: 100%;
    &.small-text {
      margin-top: 20px;
      font-size: 0.71em;
      color: #444;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  button {
    margin: 7.5px;
    border: none;
    font-size: 1.1em;
    font-weight: 500;
    border-radius: 24px;
    padding: 0.5em 1em;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`;

export const ModalUnderAge = () => {
  const [open, setOpen] = useState(true);
  const { setScrollBody } = useContext(SiteContext);

  return (
    open && (
      <>
        <CoverModal>
          <SimpleModal>
            <h1>ПОДТВЕРДИТЕ, ЧТО ВАМ БОЛЬШЕ 18 ЛЕТ.</h1>
            <p>
              Приветствую! Вы находитесь на сайте оптовой компании Смог Опт.
              <br />
              Компания Смог Опт осуществляет оптовые поставки исключительно с
              целью дальнейшей перепродажи. Если Вас интересует розничная
              покупка, обратитесь к нашим партнерам - Smog Shop (розничный
              магазин на пр. Мира 96) и Tropic Fog (Доставка под систем по
              Красноярску).
            </p>
            <p className='small-text'>
              Данный сайт предназначен исключительно для лиц, достигших 18 лет.
              Сайт содержит информацию об электронных сигаретах и
              никотиносодержащей продукции и имеет целью предоставление
              информации о потребительских свойствах и качественных
              характеристиках товара. Нажимая кнопку "Да, мне больше 18 лет", вы
              подтверждаете, что вам исполнилось полных 18 лет и вы и согласны
              получить информацию, касающуюся электронных сигарет и
              никотиносодержащих изделий. Если вам нет 18 лет или для вас
              неприемлема указанная тематика сайта, пожалуйста, покиньте его. Мы
              используем cookie-файлы, чтобы предоставлять услуги, наиболее
              отвечающие Вашим потребностям. Продолжая просмотр сайта, Вы
              соглашаетесь на сбор и использование cookie-файлов и других
              данных.
            </p>
            <ButtonContainer>
              <button
                type='button'
                onClick={() => {
                  Cookies.set('isAgreed', 'true', { expires: 24 * 30 * 7 });
                  setOpen(false);
                  setScrollBody(true);
                }}
              >
                Принять
              </button>
              <button type='button'>Отказаться</button>
            </ButtonContainer>
          </SimpleModal>
        </CoverModal>
        {/* <CenterModal
        isOpen={open}
        onDismiss={() => {
          setOpen(false);
          Cookies.set('isAgreed', 'true');
        }}
      >
        <ModalTitle>Спасибо за заявку</ModalTitle>
        <p>Прайс в закрепленном сообщении в телеграмм.</p>
        <p>
          В ближайшее время с Вами свяжется менеджер, что бы уточнить
          подробности заказа
        </p>
        {/* <a
          className='modal-tg-button'
          href='https://t.me/joinchat/-wGuNRkMYFJiMTM6'
          target='_blank'
        >
          <img src='/icons/telegram.svg' alt='Перейти в telegram' /> Перейти к
          нам в телеграмм
        </a> */}
        {/* <ModalCloseTarget>
          <button>
            <p>+</p>
          </button>
        </ModalCloseTarget> */}
        {/* </CenterModal> */}
      </>
    )
  );
};
