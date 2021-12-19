import styled from 'styled-components';

export const FormStyles = styled.form`
  display: flex;
  width: 100%;
  max-width: 500px;
  padding: 25px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  span {
    color: #777;
    font-size: 1em;
    margin-bottom: 1em;
  }
  label {
    color: #fff;
    width: 100%;
  }
  h2 {
    font-family: 'Druk Wide Cyr';
    font-size: 1.2em;
    color: #fff;
  }
  @media screen and (max-width: 540px) {
    padding: 10px;
  }
`;
export const CheckEmailLabel = styled.p`
  color: red;
  font-size: 0.79em;
  margin: 0;
`;
export const InputStyles = styled.input`
  margin-bottom: 10px;
  width: 100%;
  min-height: 40px;
  font-size: 1em;
  padding: 5px;
  background-color: transparent;
  border: none;
  color: #5f5f5f;
  border-bottom: 1px solid #5f5f5f;
  &:focus {
    color: #efefef;
    outline: #5f5f5f;
  }
`;
export const SelectStyles = styled.select`
  margin-bottom: 10px;
  width: 100%;
  min-height: 40px;
  font-size: 1em;
  padding: 5px;
  background-color: transparent;
  border: none;
  color: #5f5f5f;
  border-radius: 0;
  -webkit-appearance: none;
  border-bottom: 1px solid #5f5f5f;
  &:focus {
    color: #efefef;
    outline: #5f5f5f;
  }
  option {
    color: #000;
  }
`;
export const TextAreaStyles = styled.textarea`
  margin-bottom: 25px;
  resize: none;
  padding: 10px;
  font-weight: 500;
  width: 100%;
  @media screen and (max-width: 540px) {
    width: 100%;
    margin: auto;
  }
`;
export const Label = styled.label`
  font-weight: 700;
  margin: 10px;
`;
export const Button = styled.input`
  border: none;
  color: #fff;
  margin: 1em 0;
  padding: 0.9rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 2rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: #333;
  transition: 0.2s ease;
  &:hover {
    background-color: #666;
  }
  &.disabled {
    background-color: #222;
    color: #555;
    cursor: not-allowed;
  }
`;

export const AgreeSpan = styled.span`
  font-size: 0.85em;
  color: #999;
`;
