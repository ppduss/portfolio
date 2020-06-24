import React from 'react';
import './Portfolio.scss';
import face from '../Assets/face3.jpg';
import linkedin from '../Assets/linkedin.png';

const App = () => {
  const Main = (
    <div className="main_container">
      <div className="header_container">
        <div className="header_content">
          <img className="face" src={face} alt="profile shot" />
          <div className="text_box">
            <div className="greetings">Hi, I'm Patrick Dussault</div>
            <div className="iam">I'm a front-end developer based in Montreal. I love creating beautiful and engaging websites built with elegant code. I'm always interested in exploring new and creative ways to improve user experience and efficiency. I also have experience with a wide array of graphic editors from 3D modeling for manufacturing to editing photography. </div>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/patrickdussault/">
                <img className="linkedin" id="top" alt="linkedin" src={linkedin}></img>
          </a>
        </div>
      </div>
      <div id="transition1"></div>
      <div id="transition2"></div>
      <div id="transition3"></div>
      <div className="project_container">
        <div className="block">
          <div className="project" id="Mars">
           <a target="_blank" rel="noopener noreferrer" href="https://ppduss.github.io/TheMarsWeatherNetwork/" className="box">
            <div className="title ">The Mars Weather Network</div>
            <div className="subtitle">A weather report using two NASA APIs that tracks the last seven available Sols (Martian days).</div>
            </a>
          </div>
          <div className="tools" >
            <div>React</div>
            <div>API</div>
            <div>HTML5</div>
            <div>CSS3 + SCSS</div>
            <div>Grid + Flexbox</div>
            <div className="button"><a target="_blank" rel="noopener noreferrer" href="https://ppduss.github.io/TheMarsWeatherNetwork/">View live</a></div>
            <div className="button"><a target="_blank" rel="noopener noreferrer" href="https://github.com/ppduss/TheMarsWeatherNetwork">View on GitHub</a></div>
          </div>
        </div>
        <div className="block">
          <div className="tools even">
            <div>React</div>
            <div>CSS3 + SCSS</div>
            <div>HTML5</div>
            <div>Flexbox</div>
            <div className="button"><a target="_blank" rel="noopener noreferrer" href="https://ppduss.github.io/Coffee-Prescriber/">View live</a></div>
            <div className="button"><a target="_blank" rel="noopener noreferrer" href="https://github.com/ppduss/Coffee-Prescriber">View on GitHub</a></div>
          </div>
          <div className="project" id="Coffee">
           <a target="_blank" rel="noopener noreferrer" href="https://ppduss.github.io/Coffee-Prescriber/" className="box">
             <div className="title ">Coffee Prescriber</div>
            <div className="subtitle">A playful app that tracks your happiness to productivity ratio as your drink coffee and helps monitor whether it's wise to keep drinking.</div>
          </a>
        </div>
        </div>
          <div className="block">
          <div className="project" id="RGB">
            <a target="_blank" rel="noopener noreferrer" href="https://ppduss.github.io/RGB/" className="box">
             <div className="title "> RGB Game</div>
             <div className="subtitle">Guess which box contains the random RGB value!</div>
            </a>
          </div>
          <div className="tools">
            <div>HTML5</div>
            <div>CSS3</div>
            <div>Javascript</div>
            <div className="button"><a target="_blank" rel="noopener noreferrer" href="https://ppduss.github.io/RGB/">View live</a></div>
            <div className="button"><a target="_blank" rel="noopener noreferrer" href="https://github.com/ppduss/RGB">View on GitHub</a></div>
          </div>
        </div>
        <div className="block">
          <div className="tools even">
            <div>CSS3</div>
            <div>HTML5</div>
            <div>Javascript</div>
             <div className="button"><a target="_blank" rel="noopener noreferrer" href="https://youtu.be/OX1kVVcx0Xw">Watch video</a></div>
            <div className="button"><a target="_blank" rel="noopener noreferrer" href="https://github.com/ppduss/Ratatap">View on GitHub</a></div>
          </div>
          <div className="project" id="Ratatap">
            <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/OX1kVVcx0Xw" className="box">
            <div className="title "> Ratatap </div>
            <div className="subtitle">A clone of the patatap.com drum pads</div>
            </a>
          </div>
        </div>

        {/* <div className="block">
          <div className="project" id="Photo">
            <a href="https://combustionphotography.com/" className="box">
              <div className="title "> Combustion Photography</div>
              <div className="subtitle">Photographer's portfolio made exclusively with Adobe Creative Cloud applications. <div id="NSFW">(May contain material that is NSFW)</div></div>
            </a>
          </div>
          <div className="tools">
            <div>Adobe Lightroom</div>
            <div>Adobe Portfolio</div>
           <div className="button"><a href="https://combustionphotography.com/">View live</a></div>
        </div>
        </div> */}
        <div id="contact_container">
          <a target="_blank" rel="noopener noreferrer" id="contact_button" href="https://www.linkedin.com/in/patrickdussault/">
              <img className="linkedin" alt="linkedin" src={linkedin} height="40"></img>
              <div>Please contact me via LinkedIn</div>
          </a>
        </div>
      </div>
      <div className="footer">
      </div>
    </div>
  )

  return Main
};

export default App;