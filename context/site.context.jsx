import { createContext, useState, useEffect } from 'react';

export const SiteContext = createContext({
  title: '',
  modalInfo: false,
  modalTel: false,
  bodyNoScroll: false,
});

const SiteProvider = ({ children }) => {
  const [title, setTitle] = useState(`SmogOpt`);
  const [modalInfo, setModalInfo] = useState(false);
  const [modalTel, setModalTel] = useState(false);
  const [modalName, setModalName] = useState('');
  const [bodyNoScroll, setScrollBody] = useState(true);

  return (
    <SiteContext.Provider
      value={{
        title,
        setTitle,
        modalInfo,
        setModalInfo,
        modalTel,
        setModalTel,
        modalName,
        setModalName,
        bodyNoScroll,
        setScrollBody,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export default SiteProvider;
