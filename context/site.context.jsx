import { createContext, useState, useEffect } from 'react';

export const SiteContext = createContext({
  title: '',
  modalInfo: false,
});

const SiteProvider = ({ children }) => {
  const [title, setTitle] = useState(`SmogOpt`);
  const [modalInfo, setModalInfo] = useState(false);

  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  return (
    <SiteContext.Provider
      value={{
        title,
        setTitle,
        modalInfo,
        setModalInfo,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export default SiteProvider;
