import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) => (props.black ? 'background-color: black; color: white;' : null)}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  padding: 2em;
  h2 {
    font-size: 1.4em;
  }
  @media screen and (max-width: 540px) {
    padding: 1.4em;
  }
`;
