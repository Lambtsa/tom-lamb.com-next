import React from 'react';
import Head from 'next/head';

const url = process.env.NODE_ENV === 'production'
  ? 'https://tom-lamb.com/'
  : 'http://localhost:3000/';

interface MetadataProps{
  title: string,
  description: string,
}

const Metadata = (props: MetadataProps) => {
  const { title, description } = props;
  return (
    <>
      <Head>
        {/* Meta Data */}
        <title>{`Tom Lamb | ${title}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Product Manager and frontend developer." />
        <meta key="robots" content="index, follow" />
        <meta key="googlebot" name="googlebot" content="index, follow" />
        <link rel="icon" type="image/svg+xml" href="/assets/tom-lamb.svg" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
          
        {/* OG Tags */}
        <meta property="og:title" content={`Tom Lamb | ${title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://tom-lamb.com" />
        <meta property="og:site_name" content={`Tom Lamb | ${title}`} />

        <link rel="canonical" href="https://tom-lamb.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
    </>
  )
}

export default Metadata;

Metadata.defaultProps = {
  title: `Habillez votre enfant sans déshabiller la planète`,
  description: 'Habillez votre enfant sans déshabiller la planète',
}
