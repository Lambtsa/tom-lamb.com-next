import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageProvider';
import SocialMediaIcons from './SocialMediaIcons';

const Jumbotron = () => {
  const { language } = useContext(LanguageContext);
  const { jumbotron } = language;
  return (
    <section className="jumbotron">
      <div className="jumbotron__container">
        <h1 className="jumbotron__title">{jumbotron.jumbotronTitle}</h1>
        <p className="jumbotron__subtitle">{jumbotron.jumbotronSubtitle}</p>
        <button className="jumbotron__btn" type="button"><a href="mailto:hello@tom-lamb.com">{jumbotron.jumbotronBtn}</a></button>
        <SocialMediaIcons />
      </div>
    </section>
  );
};

export default Jumbotron;
