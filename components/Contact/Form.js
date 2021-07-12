import styled from 'styled-components';
import { Section, Container } from '../styles/section.styles';
import { useState, useMemo, useCallback, useEffect } from 'react';
import InputMask from 'react-input-mask';

const FormStyles = styled.form`
  display: flex;
  width: 100%;
  max-width: 500px;
  padding: 25px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  label {
    color: #fff;
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
const InputStyles = styled.input`
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

const InputTelStyles = styled(InputMask)`
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

const TextAreaStyles = styled.textarea`
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
const Label = styled.label`
  font-weight: 700;
  margin: 10px;
`;
const Button = styled.input`
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
`;

function FormComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [tel, setTel] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const telHandler = (e) => {
    setTel(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    // console.log('Sending');
    let form = {
      name,
      email,
      tel,
      message,
    };

    fetch('/api/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((res) => {
      // console.log('Response received');
      if (res.status === 200) {
        // console.log(`Успешно`);
        setSubmitted(true);
        setName('');
        setEmail('');
        // setBody('');
      }
    });
  };

  return (
    <FormStyles onSubmit={submitHandler}>
      <h2>Хочешь сотрудничать с нами?</h2>
      <InputStyles
        type='text'
        name='name'
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder={'Введите имя *'}
        required
      ></InputStyles>
      <InputStyles
        type='email'
        name='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder={'Введите Email *'}
        required
      ></InputStyles>
      <InputTelStyles
        value={tel}
        onChange={telHandler}
        placeholder={'Ваш телефон'}
        mask='+7 (999) 999-99-99'
      />
      <TextAreaStyles
        rows='10'
        placeholder='Коментарии? 🥸'
        name='description'
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        required
      ></TextAreaStyles>
      <Button type='submit' onClick={submitHandler} value='Отправить'></Button>
    </FormStyles>
  );
}

const FormSection = styled(Section)`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  ${(props) =>
    props.grid && `grid-template-columns: repeat(${props.grid}, 1fr);`}
  padding: 75px 0;
  background-color: #000;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  img {
    width: 85%;
  }
`;

export default function Form({ grid }) {
  return (
    <FormSection grid={grid}>
      <FormContainer>
        <img
          src='/images/hqd/callback-img.png'
          alt='Набор IZI - контактная форма'
        />
      </FormContainer>
      <Container>
        <FormComponent />
      </Container>
    </FormSection>
  );
}
