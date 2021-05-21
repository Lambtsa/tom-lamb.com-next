import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageProvider';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  return (
    <footer className="footer">
      <p>{`© ${new Date().getFullYear()} ${language.copyright.title}`}</p>
    </footer>
  );
};

export default Footer;
