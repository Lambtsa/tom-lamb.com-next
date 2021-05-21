import React from 'react';
import { LanguageProvider } from '../context/LanguageProvider';
import '../styles/main.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  )
}

export default MyApp
