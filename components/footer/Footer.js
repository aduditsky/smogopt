import {
  FooterStyles,
  FooterContainer,
  Item,
  LinkContainer,
  TelLink,
} from '../styles/footer.styles';

const Footer = ({ grid }) => {
  return (
    <FooterStyles>
      <FooterContainer grid={grid}>
        <Item>
          <h3>Позвони нам</h3>
          <TelLink href='tel:+79504206969'>+7 (950) 420-69-69</TelLink>
        </Item>
        <Item>
          <h3>Наши соц. сети</h3>
          <LinkContainer>
            <a href='https://vk.com/smogopt'>
              <img src='/icons/vk.svg' alt='vk лого' />
            </a>
            <a href='https://www.instagram.com/smogopt'>
              <img src='/icons/instagram.svg' alt='instagram лого' />
            </a>
          </LinkContainer>
        </Item>
        <Item>
          <h3>e-mail</h3>
          <a>info@smogopt.ru</a>
        </Item>
      </FooterContainer>
    </FooterStyles>
  );
};

export default Footer;
