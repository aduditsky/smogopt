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
  grid-gap: 15px;
  max-width: 1170px;
  ${(props) => `grid-template-columns: repeat(${props.grid}, 1fr);`}
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  ${(props) =>
    props.row &&
    `flex-direction: column; margin-left: 7.5px; margin-right: 7.5px;`}
  ${(props) => props.head && 'flex-direction: column;'}
  justify-content: space-around;
  h2 {
    margin: auto;
    font-weight: 400;
    font-size: 0.87em;
    color: #555;
    width: 100%;
    padding: 0 0.5em;
  }
  h3 {
    text-align: center;
  }
`;

export const TelLink = styled.a`
  color: #fff;
  margin-top: 7.5px;
  margin-bottom: 7.5px;
`;

export const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  width: fit-content;
  margin: auto;
  justify-content: center;
  align-items: center;

  a {
    color: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: fit-content;
  }
  img {
    width: auto;
    height: 32px;
  }
`;
