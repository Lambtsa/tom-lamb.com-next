import React, { useEffect, useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageProvider';

const Header = () => {
  const { handleSetFrench, handleSetEnglish } = useContext(LanguageContext);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrolling = () => {
    // scroll position for navbar colour
    const scrollPos = window.scrollY;
    // navbar scroll logic (colour when scrolled)
    if (scrollPos !== 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrolling);
    return () => {
      window.removeEventListener('scroll', handleScrolling);
    };
  });

  const handleEnClick = () => {
    handleSetEnglish();
  };

  const handleFrClick = () => {
    handleSetFrench();
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'isScrolled' : ''}`}>
        <nav className="header__container">
          <a href="/">
            <img
              className="header__img"
              src="/assets/tom-lamb.svg"
              alt="Tom Lamb logo lettering" />
          </a>
          <div className="flags">
            <button className="flags__btn" onClick={handleEnClick} id="en" type="button">
              <img className="flag" src="/assets/en.svg" alt="Union Jack icon with rounded corners" />
            </button>
            <button className="flags__btn" onClick={handleFrClick} id="fr" type="button">
              <img className="flag" src="/assets/fr.svg" alt="French flag icon with rounded corners" />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
