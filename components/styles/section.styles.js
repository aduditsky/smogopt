import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  ${(props) => (props.black ? 'background-color: black; color: white;' : null)}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  padding: 1em;
`;
