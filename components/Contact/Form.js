import styled from 'styled-components';
import { Section, Container } from '../styles/section.styles';
import { useState, useContext } from 'react';
import validator from 'validator';
import { SiteContext } from '../../context/site.context';
import ModalPolicy from '../ModalPolicy/ModalPolicy';
import {
  parsePhoneNumberFromString,
  isValidPhoneNumber,
  formatIncompletePhoneNumber,
} from 'libphonenumber-js';
import {
  FormStyles,
  CheckEmailLabel,
  InputStyles,
  SelectStyles,
  TextAreaStyles,
  Label,
  Button,
  AgreeSpan,
} from './Form.styles';

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value, {
    defaultCountry: 'RU',
  });

  if (!phoneNumber) return value;
  return formatIncompletePhoneNumber(phoneNumber.formatNational(), {
    defaultCountry: 'RU',
  });
  // return phoneNumber.formatInternational();
};

function FormComponent() {
  const { setModalTel, setModalName } = useContext(SiteContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [tel, setTel] = useState('');
  const [city, setCity] = useState('');
  const [select, setSelect] = useState('Мелкий опт от 15000');

  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPhone, setCheckPhone] = useState(true);

  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const ValidateEmail = validator.isEmail(`${email}`);
    const ValidatePhone = isValidPhoneNumber(tel, 'RU');
    if (ValidateEmail && ValidatePhone) {
      setCheckEmail(true);
      setCheckPhone(true);
      let form = {
        name,
        email,
        city,
        tel,
        message,
        select,
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
          // Данные для модалки с телеграмом
          setModalName(name);
          setModalTel(true);
          setSubmitted(false);
          setName('');
          setCity('');
          setSelect('');
          setEmail('');
          setTel('');
          setMessage('');
          // setBody('');
        }
      });
    } else {
      setSubmitted(false);
      if (!ValidateEmail) {
        setCheckEmail(false);
      }
      if (!ValidatePhone) {
        setCheckPhone(false);
      }
    }
  };

  return (
    <FormStyles onSubmit={submitHandler}>
      <h2>Получите прайс лист!</h2>
      <span>
        Заполнив форму Вы получите доступ к WhatsApp аккаунту, где сможете
        получить прайс лист, ответы на интересующие вопросы и сделать заказ.
      </span>
      <label>
        <InputStyles
          type='name'
          name='name'
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder={'Введите имя *'}
          required
        ></InputStyles>
      </label>
      <label>
        {!checkEmail && (
          <CheckEmailLabel>Неверный формат email</CheckEmailLabel>
        )}
        <InputStyles
          type='email'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder={'Введите Email *'}
          required
        ></InputStyles>
      </label>
      <label>
        <InputStyles
          type='text'
          name='city'
          onChange={(e) => setCity(e.target.value)}
          value={city}
          placeholder={'Ваш город *'}
          required
        ></InputStyles>
      </label>
      <label>
        {!checkPhone && (
          <CheckEmailLabel>Телефон заполнен неправильно</CheckEmailLabel>
        )}
        <InputStyles
          id='phoneNumber'
          type='tel'
          value={tel}
          name='telephone'
          onChange={(event) => {
            setTel(normalizePhoneNumber(event.target.value));
          }}
          placeholder={'Ваш телефон *'}
        />
      </label>
      <label>
        <SelectStyles
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value='Мелкий опт от 15000'>Мелкий опт от 15000</option>
          <option value='Средний опт от 50000'>Средний опт от 50000</option>
          <option value='Крупный опт от 100000'>Крупный опт от 100000</option>
          <option value='Предложение по маркетингу и рекламе'>
            Предложение по маркетингу и рекламе
          </option>
          <option value='Заявка на франшизу'>Заявка на франшизу</option>
        </SelectStyles>
      </label>
      <TextAreaStyles
        rows='10'
        placeholder='Остались вопросы?'
        name='description'
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        required
      ></TextAreaStyles>
      <label style={{ marginTop: 15 }}>
        <AgreeSpan>
          Отправляя данные, вы подтверждаете свое согласие с нашей{' '}
          <ModalPolicy />
        </AgreeSpan>
      </label>
      <Button
        type='submit'
        onClick={submitHandler}
        value={submitted ? 'Подождите' : 'Отправить'}
      ></Button>
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
          src='/images/callback-img.jpg'
          alt='Набор IZI - контактная форма'
        />
      </FormContainer>
      <Container>
        <FormComponent />
      </Container>
    </FormSection>
  );
}
