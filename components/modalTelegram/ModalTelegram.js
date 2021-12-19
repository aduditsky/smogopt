import { useContext } from 'react';
import { CenterModal, ModalTitle, ModalCloseTarget } from 'react-spring-modal';
import styled from 'styled-components';
import { SiteContext } from '../../context/site.context';

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 180px;
    height: auto;
    margin: auto;
  }
`;

/*
 * Renders a white modal in the center of the screen.
 * Fades in and out on enter and exit.
 */
export function ModalTelegram() {
  const { modalTel, setModalTel, modalName } = useContext(SiteContext);
  return (
    <>
      <CenterModal isOpen={modalTel} onDismiss={() => setModalTel(false)}>
        <ModalTitle>Спасибо за заявку, {modalName}</ModalTitle>
        <p>
          Чтобы получить оптовый прайс лист отправьте сообщение "Прайс" на
          аккаунт Смог Опт в WhatsApp.
        </p>
        <p>
          В ближайшее время с Вами свяжется менеджер, что бы уточнить
          подробности.
        </p>
        <SocialContainer>
          <img src='/images/whatsapp.jpg' alt='WhatsApp' />
          <a
            className='modal-tg-button whatsapp'
            href='https://wa.me/message/RUMZJ4GRSJD3D1'
            target='_blank'
          >
            <img src='/icons/whatsapp.svg' alt='Перейти в WhatsApp' />
            Перейти к диалогу в WhatsApp
          </a>
        </SocialContainer>

        {/* <a
          className='modal-tg-button'
          href='https://t.me/joinchat/-wGuNRkMYFJiMTM6'
          target='_blank'
        >
          <img src='/icons/telegram.svg' alt='Перейти в telegram' /> Перейти к
          нам в телеграмм
        </a> */}
        <ModalCloseTarget>
          <button>
            <p>+</p>
          </button>
        </ModalCloseTarget>
      </CenterModal>
    </>
  );
}

export default ModalTelegram;
