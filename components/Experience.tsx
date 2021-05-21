import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageProvider';

const Experience = () => {
  const { language } = useContext(LanguageContext);
  const { experience } = language;
  return (
    <section className="experiences">
      <div className="experience__content">
        <h2 className="experiences__title--main">{experience.experienceTitle}</h2>
        <p className="experiences__text">Through many years of experience in business management, product management and web development, I have developed key skills during my career.</p>
      </div>
      <div className="experiences__container">
        <div className="experiences__card">
          <img
            className="experiences__img salt"
            src="/assets/saltlogo.svg"
            alt="" />
          <div>
            <h3 className="experiences__title">{experience.experience1.experienceTitle1}</h3>
            <p className="experiences__caption">{experience.experience1.experienceCaption1}</p>
            <p className="experiences__text">{experience.experience1.experienceContent1}</p>
            <a className="experiences__link" target="_blank" rel="noreferrer" href="https://www.salt.dev/">{experience.experienceLink}</a>
          </div>
        </div>
        <div className="experiences__card">
          <img
            className="experiences__img"
            src="/assets/portail-logo.svg"
            alt="" />
          <div>
            <h3 className="experiences__title">{experience.experience2.experienceTitle2}</h3>
            <p className="experiences__caption">{experience.experience2.experienceCaption2}</p>
            <p className="experiences__text">{experience.experience2.experienceContent2}</p>
            <a className="experiences__link" target="_blank" rel="noreferrer" href="https://www.portail-autoentrepreneur.fr/">{experience.experienceLink}</a>
          </div>
        </div>
        <div className="experiences__card">
          <img
            className="experiences__img"
            src="/assets/simplitoo.svg"
            alt="" />
          <div>
            <h3 className="experiences__title">{experience.experience3.experienceTitle3}</h3>
            <p className="experiences__caption">{experience.experience3.experienceCaption3}</p>
            <p className="experiences__text">{experience.experience3.experienceContent3}</p>
            <a className="experiences__link" target="_blank" rel="noreferrer" href="https://www.simplitoo.fr/">{experience.experienceLink}</a>
          </div>
        </div>
        <div className="experiences__card">
          <img
            className="experiences__img"
            src="/assets/betao.svg"
            alt="" />
          <div>
            <h3 className="experiences__title">{experience.experience4.experienceTitle4}</h3>
            <p className="experiences__caption">{experience.experience4.experienceCaption4}</p>
            <p className="experiences__text">{experience.experience4.experienceContent4}</p>
            <a className="experiences__link" target="_blank" rel="noreferrer" href="https://www.betao.se/">{experience.experienceLink}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
