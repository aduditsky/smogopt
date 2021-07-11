import styled from 'styled-components';

export const FooterStyles = styled.footer`
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 25px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1170px;
  ${(props) => `grid-template-columns: repeat(${props.grid}, 1fr);`}
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TelLink = styled.a`
  color: #fff;
`;

export const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  a {
    color: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  img {
    width: auto;
    height: 32px;
  }
`;
