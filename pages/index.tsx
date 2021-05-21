import React from 'react';

/*
  Components
*/
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import About from '../components/About';
import Stats from '../components/Stats';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Apps from '../components/Apps';
import Footer from '../components/Footer';
import Metadata from '../components/Metadata';

const Home = () => {
  return (
    <>
      <Metadata
        title="Product Manager and Frontend developer."
        description="Product Manager and Frontend developer." />
      <Header />
      <Jumbotron />
      <About />
      <Projects />
      <Stats />
      <Skills />
      <Experience />
      <Apps />
      <Footer />
    </>
  )
};

export default Home;
