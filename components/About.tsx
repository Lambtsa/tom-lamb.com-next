import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageProvider';

const About = () => {
  const { language } = useContext(LanguageContext);
  const { aboutMe } = language;
  return (
    <section className="about">
      <div className="about__container">
        <img
          className="about__img"
          width="400px"
          height="600px"
          src="/assets/IMG_3377.webp"
          alt="Tom Lamb in a dark t shirt and a flat cap" />
        <div className="about__content">
          <h2 className="about__title">{aboutMe.aboutMeTitle}</h2>
          {/* eslint-disable */}
          <p className="about__text">{aboutMe.aboutMeParagraph1}</p>
          <p className="about__text">{aboutMe.aboutMeParagraph2}</p>
          <p className="about__text">{aboutMe.aboutMeParagraph3}</p>
          <p className="about__text">{aboutMe.aboutMeParagraph4}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
