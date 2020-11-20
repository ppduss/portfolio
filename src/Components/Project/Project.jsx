import React from 'react';
import Button from '../Button';
import '../../App.scss';
import '../../global.scss';
import styled, { css, keyframes } from "styled-components";
import { generateMedia } from "styled-media-query";
import {marsImg, coffeeImg} from './Backgrounds';


const Projects = ({projTheme, ghLink, liveLink, projSkills}) => {

  const themes = {
    mars: {},
    coffee: {}
  }

  const theme = themes.projTheme

  const customMedia = generateMedia({
    1200: '1200px',
    992: "992px",
    768: "768px",
    480: "480px"
  });

  const openSesame = keyframes`
    from {
      ${customMedia.greaterThan(480)`
      width: 20%;
      `}
      ${customMedia.greaterThan(768)`
      width: 20%;
      `}
      ${customMedia.greaterThan(992)`
      width: 20%;
      `}
      ${customMedia.greaterThan(1200)`
      width: 20%;
      `}
    }
    to {
       ${customMedia.greaterThan(480)`
      width: 70%;
      `}
      ${customMedia.greaterThan(768)`
      width: 65%;
      `}
      ${customMedia.greaterThan(992)`
      width: 65%;
      `}
      ${customMedia.greaterThan(1200)`
      width: 85%;
      `}
    }
  `;

  //   @mixin projectTitles($background, $font) { //finish this later
  //   background-color: $background;
  //   border: 4px solid $col2d;
  //   color: $font;
  //   padding-left: 20%;
  //   padding-right: 20%;
  //   border-radius: 25px;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   animation-name: fadeIn;
  //   &:hover {
  //     border: 7px solid $col2d;
  //   }
  //   &:active {
  //     border: 7px solid black;
  //   }
  // }

  
  const Block = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: flex-end;
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(1,.22,.52,.96);
  `;
  
  const Project = styled.div`
    display: flex;
    height: 220px;
    width: 72%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 20px;
    margin-top: 30px;
    background-color: ${props =>
    props.Mars ? '#243634' : props.Coffee ? '#5a462b' : 'white'};
    background-image: ${props => 
    props.Mars ? 'url(marsimg)' : 'blue'};

    ${customMedia.greaterThan(480)`
      margin-top: 70px;
      width: 70%;
      height: 280px;
    `};
    ${customMedia.greaterThan(768)`
      margin-top: 90px;
      width: 65%;
      height: 320px;
    `};
    ${customMedia.greaterThan(992)`
      margin-top: 100px;
      width: 65%;
      height: 380px;
    `};
    ${customMedia.greaterThan(1200)`
      margin-top: 100px;
      width: 55%;
      max-width: 760px;
      height: 400px;
    `};
  `;

  const Mars = styled(Project)`
    margin-right: 4%;
    background-image: url(${marsImg});
    background-repeat: no-repeat;
    background-size: cover;
    animation: ${openSesame} 2.5s;
    background-position: center;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    & .box {
      @include projectTitles($col2a, $col2b)
    }
  `;
  const Coffee = styled.div`
    margin-left: 4%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='670' height='80.4' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23815e31' stroke-width='20' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
    animation: ${openSesame} 2.5s;
    background-position: center;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    & .box {
      @include projectTitles(rgb(120, 176, 221), rgb(83, 53, 22))
      } 
  `;

  const RGB = styled.div`
    margin-right: 4%;
    background-image: url(./Assets/rgbimage.png);
    background-size: cover;
    background-position: center;
    animation: ${openSesame} 2.5s;
    & .box {
      @include projectTitles(rgb(18, 17, 53), rgb(252, 229, 130))
    }
  `;
  const Ratatap = styled.div`
    margin-left: 4%;
    background-image: url(./Assets/ratatap2.png);
    background-size: cover;
    background-position: center;
    animation: ${openSesame} 2.5s;
    & .box {
      @include projectTitles(rgb(19, 19, 19), rgb(253, 82, 110))
    }
  `;
  const Tools = styled.div`
    font-family: 'Dosis', sans-serif;
    font-weight: 400;
    color: black;
    font-size: 0.6rem;
    line-height: 0.85rem;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
    ${customMedia.greaterThan(480)`
      font-size: 1rem;
      line-height: 1.3rem;
    `};
    ${customMedia.greaterThan(768)`
        font-size: 1rem;
        line-height: 1.4rem;
    `};
    ${customMedia.greaterThan(992)`
        font-size: 1.1rem;
        line-height: 1.6rem;
    `};
    ${customMedia.greaterThan(1200)`
        font-size: 1.2rem;
        line-height: 1.8rem;
    `};
    /* &.even {            finish this later
    text-align: right;
    } */
  `;

  return (
    <Block>
      <Project>
        <a target="_blank" rel="noopener noreferrer" href={liveLink} className="box">
          <div className="title ">The Mars Weather Network</div>
          <div className="subtitle">A weather report using two NASA APIs that tracks the last seven available Sols (Martian days).</div>
        </a>
      </Project>
      <Tools>
        {projSkills.map((s, i) => {
          return (
            <div key={i + s}>{s}</div>
          )
        })}
        {ghLink && <Button goto={ghLink}>View on GitHub</Button>}
        {liveLink && <Button goto={liveLink}>View Live</Button>}
      </Tools>
    </Block>
  )
};

export default Projects;