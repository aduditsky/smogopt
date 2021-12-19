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
          <h2 style={{ padding: '1em' }}>
            SmogOpt – оптовый поставщик электронных сигарет.
            <br />
            Самовывоз в Красноярске Отправка СДЭК/ Почтой по России
            <br />
            г. Красноярск, ул. Мира, 96
            <br />
            Время работы: пн-вс: 11:00- 19:30
          </h2>
        </Item>
        <Item
          style={{ justifyContent: 'center', alignContent: 'space-around' }}
        >
          <Item row>
            <h3>Позвони нам</h3>
            <TelLink href='tel:+79504206633'>+7 (950) 420-66-33</TelLink>
          </Item>
          <Item row>
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
        </Item>
        {/* <Item>
          <h3>e-mail</h3>
          <a>info@smogopt.ru</a>
        </Item> */}
      </FooterContainer>
    </FooterStyles>
  );
};

export default Footer;
