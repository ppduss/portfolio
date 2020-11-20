import React, { useState } from 'react';
import './App.scss';
import styled, { ThemeProvider } from 'styled-components';
import Button from './Components/Button';
import linkedin from './Assets/linkedin.png';
import Project from './Components/Project/Project';
import {marsImg, coffeeImg} from './Components/Project/Backgrounds';
// import ThemeButton from './Components/Theme';
// import lightTheme from "./Themes/light";
import Header from './Components/HeaderContainer.jsx';

const App = () => {
  
  // const handleToggleClick = () => {
  //   setMainTheme(!mainTheme)
  // }

  const Main = (
    // <ThemeProvider theme={{theme: lightTheme}}>
      <div className="main_container">
        <Header/>
      {/* <div id="transition1"></div> */}
      <div id="transition2"></div>
      <div id="transition3"></div>
        <div className="project_container">
          {/* <Projects Mars /> */}
          <Project img={marsImg} live={'https://ppduss.github.io/TheMarsWeatherNetwork/'} github={"https://ppduss.github.io/TheMarsWeatherNetwork/"} projSkills={['HTML5', "CSS3 - SCSS", , 'Flexbox + Grid', "React", 'API']} />
        {/* <div className="block">
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
            <Button goto='https://ppduss.github.io/TheMarsWeatherNetwork/'>View Live</Button>
            <Button goto='https://github.com/ppduss/TheMarsWeatherNetwork'>View on GitHub</Button>
          </div>
        </div>
        <div className="block">
          <div className="tools even">
            <div>React</div>
            <div>CSS3 + SCSS</div>
            <div>HTML5</div>
            <div>Flexbox</div>
            <div>d3.js</div>
            <div className="button"><a target="_blank" rel="noopener noreferrer" href="https://ppduss.github.io/Coffee-Prescriber/">View live</a></div>
            <div className="button"><a target="_blank" rel="noopener noreferrer" href="https://github.com/ppduss/Coffee-Prescriber">View on GitHub</a></div>
          </div>
          <div className="project" id="Coffee">
           <a target="_blank" rel="noopener noreferrer" href="https://ppduss.github.io/Coffee-Prescriber/" className="box">
             <div className="title ">Coffee Prescriber</div>
            <div className="subtitle">A playful app that tracks your happiness to productivity ratio as you drink coffee and helps monitor whether it's wise to keep drinking.</div>
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
            <div>Paper.js</div>
            <div>Howler.js</div>
             <div className="button"><a target="_blank" rel="noopener noreferrer" href="https://ppduss.github.io/Ratatap/">View Live</a></div>
            <div className="button"><a target="_blank" rel="noopener noreferrer" href="https://github.com/ppduss/Ratatap">View on GitHub</a></div>
          </div>
          <div className="project" id="Ratatap">
            <a target="_blank" rel="noopener noreferrer" href="https://ppduss.github.io/Ratatap/" className="box">
            <div className="title "> Ratatap </div>
            <div className="subtitle">A clone of the patatap.com drum pads using my favorite samples.</div>
            </a>
          </div>
        </div> */}

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
    // </ThemeProvider>
  )

  return Main
};

export default App;