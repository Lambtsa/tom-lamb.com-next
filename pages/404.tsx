import Link from 'next/link';
import React, { useContext} from 'react';
import { LanguageContext } from '../context/LanguageProvider';

const Custom404 = () => {
  const { language } = useContext(LanguageContext);
  const { notFound } = language;

  return (
    <>
      <div className="notFound">
        <div className="notFound__container">
          <h1 className="notFound__title">{notFound.title}</h1>
          <p className="notFound__subtitle">
            {`${notFound.subtitle} -`}
          <Link href="/">
            <a className="notFound__link">{notFound.button}</a>
          </Link>
          </p>
        </div>
      </div>
    </>
  )
};

export default Custom404;
