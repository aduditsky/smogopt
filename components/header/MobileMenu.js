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
        <img src='/icons/close.svg' alt='close menu'></img>
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
              Посмотреть вкусы
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
        <Item>
          <h3>Позвони нам</h3>
          <TelLink href='tel:+79504206969'>+7 (950) 420-69-69</TelLink>
        </Item>
        <Item>
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
