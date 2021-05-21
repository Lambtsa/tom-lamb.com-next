import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageProvider';

const Stats = () => {
  const { language } = useContext(LanguageContext);
  const { stats } = language;
  return (
    <section className="stats">
      <div className="stats__container">
        <div className="">
          <h2 className="stats__title">{stats.stats1.number}</h2>
          <p className="stats__text">{stats.stats1.subtitle}</p>
        </div>
        <div className="">
          <h2 className="stats__title">{stats.stats2.number}</h2>
          <p className="stats__text">{stats.stats2.subtitle}</p>
        </div>
        <div className="">
          <h2 className="stats__title">{stats.stats3.number}</h2>
          <p className="stats__text">{stats.stats3.subtitle}</p>
        </div>
        <div className="">
          <h2 className="stats__title">{stats.stats4.number}</h2>
          <p className="stats__text">{stats.stats4.subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
