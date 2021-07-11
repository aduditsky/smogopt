import { useState, useRef } from 'react';
import styled from 'styled-components';
import MobileMenu from './MobileMenu';
import { animated, Transition } from 'react-spring';

const ButtonMenu = styled.button`
  color: #fff;
  background: none;
  border: none;
  padding: 0;
  font-size: 1.85em;
  width: 35px;
  img {
    width: 100%;
  }
`;

function NavMoblie() {
  const [isOpen, setOpen] = useState(false);

  const closeHead = (e) => {
    let dataValue = e.target.getAttribute('data-value');
    if (isOpen && dataValue !== 'child') {
      setOpen(false);
    }
  };

  return (
    <>
      <ButtonMenu
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <img src='/icons/list.svg' alt='menu' />
      </ButtonMenu>
      <Transition
        items={isOpen}
        from={{ right: '-80%' }}
        enter={{ right: '0%' }}
        leave={{ right: '-80%' }}
      >
        {(styles, item) =>
          item && (
            <animated.div onClick={closeHead} style={styles} className='dgqwd3'>
              <MobileMenu
                style={styles}
                close={() => {
                  setOpen(false);
                }}
              />
            </animated.div>
          )
        }
      </Transition>
    </>
  );
}

export default NavMoblie;
