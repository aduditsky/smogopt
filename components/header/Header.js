import { HeaderStyles, HeaderContainer } from '../styles/header.styles';
import { Link as ScrollLink } from 'react-scroll';
import { useMediaQuery } from '../../lib/useMediaQuery';
import NavMoblie from './NavMobile';
import styled from 'styled-components';
import { useRef } from 'react';

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

const LogoContainer = styled.div`
  max-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 54px;
    margin: 7px 0;
  }
`;

const Header = () => {
  const Mobile = useMediaQuery('(max-width: 540px)');
  const Tablet = useMediaQuery('(min-width: 540px)');

  return !Mobile ? (
    <HeaderStyles>
      <HeaderContainer>
        <LogoContainer>
          <img src='/images/logo.svg' alt='Логотип' />
        </LogoContainer>
        <LinkStyles to='scroll-tastes' spy={true} smooth={true} duration={1000}>
          Посмотреть вкусы
        </LinkStyles>
        <CallBackStyles
          to='scroll-contact'
          spy={true}
          smooth={true}
          duration={1000}
        >
          Написать нам
        </CallBackStyles>
      </HeaderContainer>
    </HeaderStyles>
  ) : (
    <HeaderStyles style={{ position: 'relative' }}>
      <HeaderContainer>
        <LogoContainer>
          <img src='/images/logo.svg' alt='Логотип' />
        </LogoContainer>
        <NavMoblie />
      </HeaderContainer>
    </HeaderStyles>
  );
};

export default Header;
