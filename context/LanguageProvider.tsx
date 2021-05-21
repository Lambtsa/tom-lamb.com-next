import React, { createContext, useEffect, useState } from 'react';
import en from '../languages/en.json';
import fr from '../languages/fr.json';

const LanguageContext = createContext(null);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(en);
  const [chosenLanguage, setChosenLanguage] = useState<string>('');

  if (typeof window !== "undefined") {
    const language = localStorage.getItem('language');
    if (!language) {
      localStorage.setItem('language', JSON.stringify('en'));
    }
  }

  useEffect(() => {
    localStorage.setItem('language', JSON.stringify(chosenLanguage))
  }, [chosenLanguage])

  const handleSetFrench = () => {
    setChosenLanguage('fr');
    setLanguage(fr);
  };
  const handleSetEnglish = () => {
    setChosenLanguage('en');
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
