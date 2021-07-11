import * as React from 'react';
import { BottomModal, ModalTitle, ModalCloseTarget } from 'react-spring-modal';
import 'react-spring-modal/styles.css';
import styled from 'styled-components';
// import Marquee from 'react-fast-marquee';
import MarqueeExt from '../Marquee/index';
import { Container } from '../styles/section.styles';

const BodyModal = styled(BottomModal)`
  ${(props) => props.bg && `background-image: url('${bg}')`}
  background-position: center;
  background-size: cover;
`;

const Button = styled.button`
  border: none;
  color: #fff;
  border-radius: 50%;
  font-size: 3em;
  font-weight: 800;
  font-weight: 300;
  transform: rotate(45deg);
  background: none;
  color: #000;
  width: fit-content;
  cursor: pointer;
  z-index: 9999;
  position: absolute;
  top: 15px;
  right: 15px;
`;

const ButtonStart = styled.button`
  border: none;
  color: #fff;
  background-color: #000;
  border-radius: 20px;
  font-size: 1em;
  padding: 0.5em 0.98em;
  font-weight: 300;
  cursor: pointer;
  width: fit-content !important;
`;

const Description = styled.div`
  padding: 0.4em;
  position: relative;
  z-index: 100;
`;

const FlavorTitle = styled(ModalTitle)`
  font-family: 'Druk Wide Cyr';
`;

const FlavorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  z-index: 4;
  position: relative;
`;

const FlavorHead = styled.h5`
  margin: 3px;
  font-family: 'Druk Wide Cyr';
`;

const FlavorItem = styled.div`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Flavor = styled.span`
  padding: 0.5em 1.2em;
  display: inline;
  color: #fff;
  background-color: #000;
  border-radius: 20px;
  margin: 0 5px;
  font-weight: 500;
`;

const ImgCover = styled.img`
  position: absolute;
  height: 80%;
  width: auto;
  bottom: 5%;
  right: 2rem;
`;

export function Bottom({ slide }) {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <ButtonStart onClick={() => setOpen(true)}>Посмотреть</ButtonStart>
      <BottomModal
        slide={slide}
        isOpen={isOpen}
        onDismiss={() => setOpen(false)}
      >
        {/* Defaults to <h1> and gives it an id to make it the label for your modal */}
        <Description>
          <FlavorTitle>{slide ? slide.title : 'Заголовок'}</FlavorTitle>
          {slide ? slide.description : 'Lorem ipsum dolor sit amet.'}
        </Description>

        {slide && (
          <>
            <ImgCover src={slide.cover} alt='silde-cover' />
            <FlavorContainer>
              <h4>Вкусы</h4>
              {slide.flavor.map((flavor) => (
                <FlavorItem key={`flavor-${flavor.type}`}>
                  <FlavorHead>{flavor.type}:</FlavorHead>
                  <MarqueeExt
                    className='custom-marquee'
                    gradient={false}
                    pauseOnClick
                    speed={40 + Math.random(-10, 10)}
                    gradientWidth={30}
                  >
                    {flavor.content.map((item) => (
                      <Flavor key={`Flavor-${item}`}>{item}</Flavor>
                    ))}
                  </MarqueeExt>
                </FlavorItem>
              ))}
            </FlavorContainer>
          </>
        )}

        {/* Automatically adds onClick that dismisses modal */}
        <ModalCloseTarget>
          <Button>+</Button>
        </ModalCloseTarget>
      </BottomModal>
    </>
  );
}
