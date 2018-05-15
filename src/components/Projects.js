import React from 'react';

const Projects = props => {
  return (
    <section className="projects">
      <div className="wrapper">
        <h2 className="heading-2">Personal Projects</h2>
        <ul className="projects-list">
          <li className="single body-1"><a className="link" href="https://giuliagworld.github.io/email-listing-app/">Email Listing App</a></li>
          <li className="single body-1"><a className="link" href="https://giuliagworld.github.io/scoreboard/">Scoreboard</a></li>
          <li className="single body-1"><a className="link" href="https://giuliagworld.github.io/button-chaser/">Button Chaser</a></li>
          <li className="single body-1"><a className="link" href="https://giuliagworld.github.io/random-colour/">Random Colour</a></li>
          <li className="single body-1"><a className="link" href="https://giuliagworld.github.io/salsa-rosada/">Salsa Rosada</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Projects;