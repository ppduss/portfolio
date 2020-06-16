import React from 'react';
import './Portfolio.scss';
import face from '../Assets/face3.jpg';

const App = () => {
  const Main = (
    <div className="main_container">
      <div className="header_container">
        <div className="header_content">
          <img className="face" src={face} alt="profile shot" />
          <div className="text_box">
            <div className="greetings">Hi, I'm Patrick</div>
            <div className="iam">I'm a front-end developer living in Montréal. I love creating beautiful and engaging websites built with elegant code.</div>
          </div>
        </div>
      </div>
      {/* <div id="transition1"></div> */}
      <div id="transition2"></div>
      <div id="transition3"></div>
      <div className="project_container">
        <div className="block">
          <div className="project" id="Mars">
           <a href="https://ppduss.github.io/TheMarsWeatherNetwork/" id="marsBox">
            <div className="title ">The Mars Weather Network</div>
            <div className="subtitle">A weather report of the last seven available Sols (Martian days) using on data of two NASA APIs.</div>
            </a>
          </div>
          <div className="tools" >
            <div>React</div>
            <div>CSS3 + SCSS</div>
            <div>HTML5</div>
            <div>Grid + Flexbox</div>
            <div>API</div>
            <div className="button"><a href="https://ppduss.github.io/TheMarsWeatherNetwork/">View live</a></div>
            <div className="button"><a href="https://github.com/ppduss/TheMarsWeatherNetwork">View on GitHub</a></div>
          </div>
        </div>
        <div className="block">
          <div className="tools even">
            <div>React</div>
            <div>CSS3 + SCSS</div>
            <div>HTML5</div>
            <div>Flexbox</div>
            <div className="button"><a href="https://ppduss.github.io/Coffee-Prescriber/">View live</a></div>
            <div className="button"><a href="https://github.com/ppduss/Coffee-Prescriber">View on GitHub</a></div>
          </div>
          <div className="project" id="Coffee">
           <a href="https://ppduss.github.io/Coffee-Prescriber/" id="coffeeBox">
             <div className="title ">Coffee Prescriber</div>
            <div className="subtitle">A playful app that helps gauge your happiness to productivity ratio as your drink coffee and wether it's wise to keep drinking.</div>
          </a>
        </div>
        </div>
        <div className="block">
          <div className="project" id="Ratatap">
            <a href="https://youtu.be/OX1kVVcx0Xw" id="ratatapBox">
            <div className="title "> Ratatap </div>
            <div className="subtitle">A clone of the patatap.com drum pads</div>
            </a>
          </div>
          <div className="tools">
            <div>CSS3</div>
            <div>HTML5</div>
            <div>Javascript</div>
             <div className="button"><a href="https://youtu.be/OX1kVVcx0Xw">Watch Video</a></div>
            <div className="button"><a href="https://github.com/ppduss/Ratatap">View on GitHub</a></div>
          </div>
        </div>
        <div className="block">
          <div className="tools even">
            <div>HTML5</div>
            <div>CSS3</div>
            <div>Javascript</div>
            <div className="button"><a href="https://ppduss.github.io/RGB/">View live</a></div>
            <div className="button"><a href="https://github.com/ppduss/RGB">View on GitHub</a></div>
          </div>
          <div className="project" id="RGB">
            <a href="https://ppduss.github.io/RGB/" id="RGBBox">
             <div className="title "> RGB Game</div>
             <div className="subtitle">Guess which box contains the random RGB value!</div>
            </a>
          </div>
        </div>
        <div className="block">
          <div className="project" id="Photo">
            <a href="https://combustionphotography.com/" id="photoBox">
              <div className="title "> Combustion Photography</div>
              <div className="subtitle">Photographer's portfolio made exclusively with Adobe Creative Cloud applications. <div id="NSFW">(May contain material that is NSFW)</div></div>
            </a>
          </div>
          <div className="tools">
            <div>Adobe Lightroom</div>
            <div>Adobe Portfolio</div>
           <div className="button"><a href="https://combustionphotography.com/">View live</a></div>
        </div>
        </div>
        <div className="footer">Thank you AJTJ for your help.</div>
      </div>
   </div>
  )

  return Main
};

export default App;