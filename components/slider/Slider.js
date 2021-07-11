import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SwiperCore, {
  Navigation,
  Mousewheel,
  //   Pagination,
  //   Scrollbar,
  //   A11y,
  // Virtual,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Bottom } from '../Modal/Modal';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import { useMediaQuery } from '../../lib/useMediaQuery';

const SildeContent = styled.div`
  height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  color: #000;
  border-radius: 25px;

  box-shadow: 0px 6px 11px 1px rgba(34, 60, 80, 0.06);
  background-image: url('/images/hqd/hqd-king-red-cover.png');
  ${(props) => props.cover && `background-image: url('${props.cover}');`}

  background-position: right 15% bottom 10%;
  background-repeat: no-repeat;
  background-size: auto 80%;
  transition: 0.2s ease;

  .slide-body {
    display: flex;
    flex-direction: column;
    padding: 2em;
  }

  p,
  h3 {
    text-align: center;
    font-size: 1em;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 24px;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 0.7em 1.03em;
  margin: 0 0.5em;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 1.3em;
  font-family: 'Druk Wide Cyr';
  border-radius: 12px;
  font-weight: 300;
  cursor: pointer;
`;

// install Swiper modules
SwiperCore.use([Navigation, Mousewheel]);

export default function Slider() {
  const currentSlides = [
    {
      title: 'HQD Cuvie',
      cover: '/images/hqd/hqd-cuvie-cover.png',
      description: (
        <ul>
          <li>Пластиковый корпус</li>
          <li>Одноразовый испаритель</li>
          <li>20 мг солевого никотина</li>
          <li>Хватает на 300 - 400 затяжек</li>
        </ul>
      ),
      flavor: [
        {
          type: 'Оригинальные',
          content: [
            'корица',
            'жвачка',
            'шориа (мята, хвоя, ягоды)',
            'кола',
            'розовый лимонад',
            'орех',
            'мята',
            'табак',
          ],
        },
        {
          type: 'Фруктовые',
          content: [
            'банан',
            'арбуз',
            'персик',
            'виноград',
            'яблоко',
            'манго',
            'личи',
            'апельсин',
            'дыня',
            'мультифрукт',
            'ананас',
            'лимонный пирог',
          ],
        },
        {
          type: 'Ягодный',
          content: [
            'клубника',
            'черника',
            'вишня',
            'клубника',
            'черника',
            'вишня',
            'клубника',
            'черника',
            'вишня',
          ],
        },
      ],
    },
    {
      title: 'HQD Maxim',
      cover: '/images/hqd/hqd-maxim-cover.png',
      description: (
        <ul>
          <li>Металлический корпус</li>
          <li>Одноразовый испаритель</li>
          <li>20 мг солевого никотина</li>
          <li>Хватает на 400 затяжек</li>
        </ul>
      ),
      flavor: [
        {
          type: 'Оригинальные',
          content: [
            'корица',
            'кола',
            'розовый лимонад',
            'корица',
            'кола',
            'розовый лимонад',
            'корица',
            'кола',
            'розовый лимонад',
          ],
        },
        {
          type: 'Фруктовые',
          content: [
            'банан',
            'персик',
            'виноград',
            'манго',
            'личи',
            'апельсин',
            'дыня',
            'мультифрукт',
            'ананас',
            'лимонный пирог',
          ],
        },
      ],
    },
    {
      title: 'HQD Curve Plus',
      cover: '/images/hqd/hqd-cuvie-plus-cover.png',
      description: (
        <ul>
          <li>Металлический корпус</li>
          <li>Одноразовый испаритель</li>
          <li>20 мг солевого никотина</li>
          <li>Хватает до 1200 затяжек</li>
        </ul>
      ),
      flavor: [
        {
          type: 'Оригинальный',
          content: [
            'корица',
            'жвачка',
            'шориа (мята, хвоя, ягоды)',
            'кола',
            'розовый лимонад',
            'орех',
            'мята',
            'табак',
          ],
        },
        {
          type: 'Фруктовые',
          content: [
            'Фруктовые',
            'банан',
            'арбуз',
            'персик',
            'виноград',
            'яблоко',
            'манго',
            'личи',
            'апельсин',
            'дыня',
            'мультифрукт',
            'ананас',
            'лимонный пирог',
          ],
        },
        {
          type: 'Ягодный',
          content: ['Вишня', 'Арбуз', 'Вишня', 'Арбуз', 'Вишня', 'Арбуз'],
        },
      ],
    },
    {
      title: 'HQD King',
      cover: '/images/hqd/hqd-king-red-cover.png',
      description: (
        <ul>
          <li>Металлический корпус</li>
          <li>Одноразовый испаритель</li>
          <li>20 мг солевого никотина</li>
          <li>Хватает на 2000 затяжек</li>
        </ul>
      ),
      flavor: [
        {
          type: 'Фруктовые',
          content: [
            'банан',
            'арбуз',
            'персик',
            'виноград',
            'яблоко',
            'манго',
            'личи',
            'апельсин',
            'дыня',
            'мультифрукт',
            'ананас',
            'лимонный пирог',
          ],
        },
        {
          type: 'Оригинальные',
          content: [
            'корица',
            'жвачка',
            'шориа (мята, хвоя, ягоды)',
            'кола',
            'розовый лимонад',
            'орех',
            'мята',
            'табак',
          ],
        },
        {
          type: 'Ягодный',
          content: [
            'клубника',
            'черника',
            'вишня',
            'клубника',
            'черника',
            'вишня',
            'клубника',
            'черника',
            'вишня',
          ],
        },
      ],
    },
    {
      title: 'HQD Rosy',
      cover: '/images/hqd/hqd-rosy-cover.png',
      description: (
        <ul>
          <li>Пластиковый корпус </li>
          <li>Одноразовый испаритель </li>
          <li>20 мг солевого никотина </li>
          <li>Хватает на 400 - 500 затяжек</li>
        </ul>
      ),

      flavor: [
        {
          type: 'Оригинальные',
          content: [
            'корица',
            'жвачка',
            'шориа (мята, хвоя, ягоды)',
            'кола',
            'розовый лимонад',
            'орех',
            'мята',
            'табак',
          ],
        },
        {
          type: 'Фруктовые',
          content: [
            'банан',
            'арбуз',
            'персик',
            'виноград',
            'яблоко',
            'манго',
            'личи',
            'апельсин',
            'дыня',
            'мультифрукт',
            'ананас',
            'лимонный пирог',
          ],
        },
        {
          type: 'Ягодный',
          content: [
            'клубника',
            'черника',
            'вишня',
            'клубника',
            'черника',
            'вишня',
            'клубника',
            'черника',
            'вишня',
          ],
        },
      ],
    },
    {
      title: 'HQD Mega',
      cover: '/images/hqd/hqd-mega-cover.png',
      description: (
        <ul>
          <li>Пластиковый корпус</li>
          <li>Одноразовый испаритель</li>
          <li>20 мг солевого никотина</li>
          <li>Хватает на 1600 затяжек</li>
        </ul>
      ),
      flavor: [
        {
          type: 'Ягодный',
          content: [
            'клубника',
            'черника',
            'вишня',
            'клубника',
            'черника',
            'вишня',
            'клубника',
            'черника',
            'вишня',
          ],
        },
        {
          type: 'Фруктовый',
          content: [
            'банан',
            'арбуз',
            'персик',
            'виноград',
            'яблоко',
            'манго',
            'личи',
            'апельсин',
            'дыня',
            'мультифрукт',
            'ананас',
            'лимонный пирог',
          ],
        },
        {
          type: 'Оригинальный',
          content: [
            'корица',
            'жвачка',
            'шориа (мята, хвоя, ягоды)',
            'кола',
            'розовый лимонад',
            'орех',
            'мята',
            'табак',
          ],
        },
      ],
    },
  ];

  const Mobile = useMediaQuery('(max-width: 540px)');
  const Tablet = useMediaQuery('(max-width: 786px)');

  const [slideCount, setSlideCount] = useState(3);

  useEffect(() => {
    if (Mobile && Tablet) {
      setSlideCount(1);
    } else if (!Mobile && Tablet) {
      setSlideCount(2);
    } else if (!Mobile && !Tablet) {
      setSlideCount(3);
    }
  }, [Mobile, Tablet]);

  return (
    <>
      <Swiper
        spaceBetween={15}
        slidesPerView={slideCount}
        navigation
        centeredSlides
        loop
        mousewheel
        autoplay
        style={{ overflow: 'unset' }}
        //   pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        //   onSwiper={(swiper) => console.log(swiper)}
        //   onSlideChange={() => console.log('slide change')}
      >
        {currentSlides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <SildeContent cover={slide.cover}>
              <div className='slide-body'>
                <h3>{slide.title}</h3>
                <Bottom slide={slide} />
              </div>
            </SildeContent>
          </SwiperSlide>
        ))}
      </Swiper>
      <p style={{ fontSize: '0.68em' }}>
        Фотографии не показывают реальное соотношение размеров*
      </p>
    </>
  );
}
