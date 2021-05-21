import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageProvider';

const Apps = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section className="apps">
      <div className="apps__container">
        <div className="apps__header">
          <h2 className="apps__title">{language.appsTitle.title}</h2>
          <p className="apps__subtitle">{language.appsTitle.subtitle}</p>
        </div>
        <div className="apps__apps">
          <img
            height="60px"
            width="60px"
            className="work-icon"
            src="/assets/icons/js.svg"
            alt="" />
          <img
            height="60px"
            width="60px"
            className="work-icon"
            src="/assets/icons/figma.svg"
            alt="" />
          <img
            height="60px"
            width="60px"
            className="work-icon"
            src="/assets/icons/react.svg"
            alt="" />
          <img
            height="60px"
            width="60px"
            className="work-icon"
            src="/assets/icons/sass.svg"
            alt="" />
          <img
            height="60px"
            width="60px"
            className="work-icon"
            src="/assets/icons/nodejs.svg"
            alt="" />
          <img
            height="60px"
            width="60px"
            className="work-icon"
            src="/assets/icons/visual_studio.svg"
            alt="" />
          <img
            height="60px"
            width="60px"
            className="work-icon"
            src="/assets/icons/analytics.svg"
            alt="" />
          <img
            height="60px"
            width="60px"
            className="work-icon"
            src="/assets/icons/html5.svg"
            alt="" />
        </div>
      </div>
    </section>
  );
};

export default Apps;
