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

const Home = () => {
  return (
    <>
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
