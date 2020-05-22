import React from 'react';
import './Portfolio.scss';
import face from '../Assets/face.jpeg'

const App = () => {

  const Main = (
    <div className="main_container">
      <div className="header_container">
        <div className="header_content">
          <img className="face" src={face} alt="profile shot" />
          <div className="text_box">
            <div className="greetings">Hi, I'm Patrick</div>
            <div className="iam">I'm a front-end developer living in beautiful Montréal  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa repellendus distinctio eum at iure veritatis ab tempore, tenetur, laborum, quidem dicta! Deleniti velit quis sapiente natus, maxime maiores sit aut.</div>
          </div>
        </div>
      </div>
      <div id="transition1"></div>
      <div id="transition2"></div>
      <div id="transition3"></div>
      <div className="project_container">
        <div className="project" id="Mars">
          <div id="marsBox">
            <div className="title ">The Mars Weather Network</div>
            <div className="subtitle">A X-day weather report using the latest data trasmitted from Mars using two NASA APIs.</div>
          </div>
        </div>
        <div className="project" id="Coffee">
          <div id="coffeeBox">
           <div className="title ">Coffee Prescriber</div>
            <div className="subtitle">A playful app that helps gauge your happiness to productivity ratio as your drink coffee and wether it's wise to keep drinking.</div>
          </div>
        </div>
        <div className="project" id="Photo">
          <div id="photoBox">
            <div className="title "> Photography Portfolio</div>
            <div className="subtitle">Blah blah blah, something something</div>
          </div>
        </div>
        <div className="footer">This is the footer</div>
      </div>
   </div>
  )

  return Main
};

export default App;