import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageProvider';

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const { skills } = language;
  return (
    <section className="skills__container">
      <div className="skills__header">
        <h2 className="skills__title">{skills.skillsTitle}</h2>
        <p className="skills__text">{skills.skillsSubtitle}</p>
      </div>
      <div className="skills">
        <div className="skills__skill">
          <img
            height="60px"
            width="60px"
            src="/assets/icons/product_management.svg"
            className="work-icon margin-botton"
            alt="" />
          <h3 className="skills__title">{skills.skillCards.skill1.skillTitle1}</h3>
          <p className="skills__text">{skills.skillCards.skill1.skillText1}</p>
        </div>
        <div className="skills__skill">
          <img
            height="60px"
            width="60px"
            src="/assets/icons/web_development.svg"
            className="work-icon margin-botton"
            alt="" />
          <h3 className="skills__title">{skills.skillCards.skill2.skillTitle2}</h3>
          <p className="skills__text" dangerouslySetInnerHTML={{ __html: skills.skillCards.skill2.skillText2 }} />
        </div>
        <div className="skills__skill">
          <img
            height="60px"
            width="60px"
            src="/assets/icons/web_design.svg"
            className="work-icon margin-botton"
            alt="" />
          <h3 className="skills__title">{skills.skillCards.skill3.skillTitle3}</h3>
          <p className="skills__text">{skills.skillCards.skill3.skillText3}</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
