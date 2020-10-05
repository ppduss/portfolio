import styled, { css } from "styled-components";
import React from 'react';
import face from '../Assets/face3.jpg';
import linkedin from '../Assets/linkedin.png';
import '../global.scss';

const col1a = '#00474f';
const col1b = '#ed3801';
const col1c = '#ff8035';
const col1d = '#ede2cf';

const col2a = '#102733';
const col2b = '#ec5334';
const col2c = '#278994';
// const col2d = '#efe9d6';
const col2d = '#faf5e5';

const Header = () => {

  const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-image: linear-gradient(${col1c}, ${col2b}, ${col2b});
  `;
  const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    // align-self: top;
    justify-content: space-between;
    width: 100%;
    background-color: ${col2a};
    margin-top: 8px;
    border-radius: 60px 25px 0px 0px;
    @media (min-width: 480px){
      width: 95%;
      margin-top: 10px;
      border-radius: 90px 36px 0px 0px;
    }
    @media (min-width: 768px){
      width: 90%;
      margin-top: 15px;
      border-radius: 140px 45px 0px 0px;
    }
    @media (min-width: 992px){
      width: 86%;
      margin-top: 20px;
      border-radius: 160px 60px 0px 0px;
    }
    @media (min-width: 1200px){
      width: 85%;
      border-radius: 165px 80px 0px 0px;
    }
`;
  const Face = styled.image`
      background-image: url(${face});
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 45px 3px;
      background-size: 100px;
      margin: 15px;
      /* @media (min-width: 480px){
        border-radius: 60px 10px;
        background-size: 150px;
        margin: 25px 18px 18px 25px;
      }
      @media (min-width: 768px){
        border-radius: 90px 20px;
        background-size: 230px;
        margin: 30px;
      }
      @media (min-width: 992px){
        border-radius: 110px 25px;
        background-size: 230px;
        margin: 38px;
      } */
      /* @media (min-width: 1200px){
        border-radius: 120px 30px;
        background-size: 260px;
        margin: 40px;

      } */
  `;
   const TextBox = styled.div`
      max-width: 90%;
      @media (min-width: 480px){
        max-width: 80%;
      }
      @media (min-width: 768px){
        max-width: 70%;
      }
      @media (min-width: 992px){
        max-width: 60%;
      }
      @media (min-width: 1200px){
        max-width: 60%;
      }
`;
  const Greetings = styled.div`
      color: ${col2b};
      font-size: 1.1rem;
      margin-top: 15px;
      @media (min-width: 480px){
        font-size: 1.3rem;
        margin-top: 25px;
      }
      @media (min-width: 768px){
        font-size: 1.8rem;
        margin-top: 40px;
      }
      @media (min-width: 992px){
        font-size: 2.2rem;
        margin-top: 52px;
      }
      @media (min-width: 1200px){
        font-size: 2.5rem;
        margin-top: 70px;
      }
`;
  const IAm = styled.div`
  color: whitesmoke;
  font-size: 0.6rem;
  margin: 12px 0px 20px;
  font-weight: 300;
    @media (min-width: 480px){
        font-size: 0.8rem;
    }
    @media (min-width: 768px){
        font-size: 1rem;
        margin-top: 20px;
        // max-width: 490px;
    }
    @media (min-width: 992px){
        font-size: 1.1rem;
        // max-width: 520px;
    }
    @media (min-width: 1200px){
        font-size: 1.3rem;
        // max-width: 650px;
    }
    @media (min-width: 1500px){
        // max-width: 750px;
        // font-weight: 400;
    }
  `;
  
  return (
          <HeaderContainer>
            <HeaderContent>
              <Face></Face>
              <TextBox>
                <Greetings>Hi, I'm Patrick Dussault</Greetings>
                <IAm>I&apos;m a front-end developer based in Montreal who loves creating beautiful and engaging websites built with elegant code. Always interested in exploring new and creative ways to improve efficiency user experience. I also have experience with 2D/3D modeling for manufacturing, 3D printing, CNC programming, and photography editing.</IAm>
              </TextBox>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/patrickdussault/">
                <img className="linkedin" id="top" alt="linkedin" src={linkedin}></img>
              </a>
              {/* <button onClick={() => handleToggleClick()}>toggle light</button> */}
              {/* <ThemeButton></ThemeButton> */}
            </HeaderContent>
          </HeaderContainer>
  )
}

export default Header

