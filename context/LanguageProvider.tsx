import React, { createContext, useState } from 'react';
import en from '../languages/en.json';
import fr from '../languages/fr.json';

const LanguageContext = createContext(null);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(en);

  const handleSetFrench = () => {
    setLanguage(fr);
  };
  const handleSetEnglish = () => {
    setLanguage(en);
  };

  const value = {
    language,
    handleSetFrench,
    handleSetEnglish,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
