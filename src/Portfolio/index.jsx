import React from 'react';
import './Portfolio.scss';
import face from '../Assets/face.jpeg'

const App = () => {

  const Main = (
    <div className="main_container">
      <div className="header_container">
        <div className="header_content">
          <img className="face" src={face} alt="profile shot"/>
          <div className="title">Hi, I'm Patrick
           <div className="subtitle">I'm a front-end developer</div>
          </div>
        </div>
      </div>
      <div className="project" id="Mars">
        <div id="marsBox">
          <div className="title ">The Mars Weather Network</div>
          <div className="subtitle">Weather report using two NASA APIs.</div>
        </div>
      </div>
      <div className="project" id="Coffee">
        <div id="coffeeBox">
          <div className="title ">Coffee Prescriber</div>
          <div className="subtitle">Blah blah blah, something something</div>
        </div>
      </div>
      <div className="project" id="Photo">
        <div id="photoBox">
          <div className="title "> Photography Portfolio</div>
          <div className="subtitle">Blah blah blah, something something</div>
        </div>
      </div>
   </div>
  )

  return Main
};

export default App;