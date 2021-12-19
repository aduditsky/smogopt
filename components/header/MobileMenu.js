import Link from 'next/link';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { Item, LinkContainer, TelLink } from '../styles/footer.styles';

const NavModalStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100vh;
  width: 80%;
  right: 0;
  padding: 50px 15px 75px 35px;
  background-color: #000;
  /* backdrop-filter: blur(15px) saturate(180%); */
  * {
    color: #fff;
  }
`;

const LinkStyles = styled(ScrollLink)`
  cursor: pointer;
  margin-left: 10px;
  margin-left: auto;
  margin-right: 10px;
`;

const CallBackStyles = styled(ScrollLink)`
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  margin: 5px;
  font-weight: 800;
  border: 2px solid #fff;
`;

const NavStyles = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: min-content;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    margin-top: 20px;
    padding: 0;
    width: 100%;

    li {
      a {
        font-size: 1.6em;
        font-weight: 600;
        border: none;
        padding: 0.45rem 0;
        margin: 0.45rem 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
    }
  }
`;

const Close = styled.button`
  position: absolute;
  right: 15px;
  cursor: pointer;
  top: 15px;
  width: 40px;
  border: none;
  background: none;
  img {
    width: 100%;
    font-size: 2.2em;
    color: #fff;
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;

  a {
    width: fit-content !important;
    font-size: 1.4em;
    font-weight: 700;
  }

  div,
  a,
  h3 {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .direct-contact {
    flex-direction: column;
    margin-bottom: 50px;
    align-items: flex-start;
    span {
      padding: 0.2em 0;
      font-size: 1.7em;
      font-weight: 600;
    }
  }
  .social-links {
    i {
      font-size: 2.2em;
      padding-right: 0.5em;
      &:last-child {
        padding-right: 0;
      }
    }
  }
`;

const MobileMenu = ({ close }) => {
  return (
    <NavModalStyles data-value='child'>
      <Close onClick={close}>
        <svg
          height='auto'
          viewBox='0 0 365.696 365.696'
          width='30px'
          fill='#fff'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0' />
        </svg>
      </Close>
      <NavStyles>
        <ul>
          <li>
            <LinkStyles
              to='scroll-tastes'
              spy={true}
              onClick={close}
              smooth={true}
              duration={1000}
            >
              Ассортимент
            </LinkStyles>
          </li>
          <li>
            <CallBackStyles
              to='scroll-contact'
              spy={true}
              smooth={true}
              onClick={close}
              duration={1000}
            >
              Написать нам
            </CallBackStyles>
          </li>
        </ul>
      </NavStyles>
      <Social>
        <Item head>
          <h3>Позвони нам</h3>
          <TelLink href='tel:+79504206633'>+7 (950) 420-66-33</TelLink>
        </Item>
        <Item head>
          <h3>Наши соц. сети</h3>
          <LinkContainer>
            <a onClick={close} href='https://vk.com/smogopt'>
              <img src='/icons/vk.svg' alt='vk лого' />
            </a>
            <a onClick={close} href='https://www.instagram.com/smogopt'>
              <img src='/icons/instagram.svg' alt='instagram лого' />
            </a>
          </LinkContainer>
        </Item>
      </Social>
    </NavModalStyles>
  );
};

export default MobileMenu;
