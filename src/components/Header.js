import React from 'react';

const Header = props => {
  return (
    <section className="header">
      <div className="wrapper">
        <h1 className="heading-1">Giulia G</h1>
        <h2 className="heading-2">Front End <br /> Web Developer</h2>
        <a href="https://github.com/giuliagworld"><img className="img" src="/assets/github-circle.svg" width="50" /></a>
        <a href="https://uk.linkedin.com/in/giuliagwebdeveloper"><img className="img" src="/assets/linkedin-circle.svg" width="50" /></a>
      </div>
    </section>
  )
}

export default Header