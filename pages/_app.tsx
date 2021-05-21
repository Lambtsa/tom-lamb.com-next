import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { LanguageProvider } from '../context/LanguageProvider';
import '../styles/main.scss'

const MyApp = ({ Component, pageProps }) => {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KG44F8J' });
  }, []);

  return (
    <>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  )
}

export default MyApp
