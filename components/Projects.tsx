import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageProvider';

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const { projects } = language;
  return (
    <>
      <section className="projects">
        <h2 className="projects__title">{projects.projectsTitle}</h2>
        <div className="projects__container">
          <a target="_blank" rel="noreferrer" href="https://ui-tasks.netlify.app/" className="project">
            <img
              className="project__img"
              src="/assets/ubiquiti.svg"
              alt="" />
            <h3>Reminders App</h3>
            <p className="project__subtitle">{projects.project1}</p>
          </a>
          <a target="_blank" rel="noreferrer" href="https://lambtsa.github.io/currency-app-react/" className="project">
            <img
              className="project__img"
              src="/assets/currency.svg"
              alt="" />
            <h3>Currency App</h3>
            <p className="project__subtitle">{projects.project2}</p>
          </a>
          <a target="_blank" rel="noreferrer" href="https://charlies-closet.com/" className="project">
            <img
              className="project__img"
              src="/assets/charlie.svg"
              alt="" />
            <h3>Charlie&apos;s Closet</h3>
            <p className="project__subtitle">{projects.project3}</p>
          </a>
          <a target="_blank" rel="noreferrer" href="https://tradegard.netlify.app/" className="project">
            <img
              className="project__img"
              src="/assets/tradegard.svg"
              alt="" />
            <h3>Tradegård App</h3>
            <p className="project__subtitle">{projects.project4}</p>
          </a>
        </div>
      </section>
    </>
  );
};

export default Projects;
