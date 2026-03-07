import * as React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073,
      0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073;
  }
  50% {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
      0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10% { transform: translateX(-10px) rotate(-1deg); }
  20% { transform: translateX(10px) rotate(1deg); }
  30% { transform: translateX(-10px) rotate(-1deg); }
  40% { transform: translateX(10px) rotate(1deg); }
  50% { transform: translateX(-5px); }
  60% { transform: translateX(5px); }
  70% { transform: translateX(-2px); }
  80% { transform: translateX(2px); }
  90% { transform: translateX(-1px); }
`;

const rainbowBg = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(5deg); }
  50% { transform: translateY(-10px) rotate(-3deg); }
  75% { transform: translateY(-25px) rotate(3deg); }
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background: linear-gradient(
    135deg,
    #0a0a2e 0%,
    #1a0a3e 25%,
    #2a1a4e 50%,
    #1a0a3e 75%,
    #0a0a2e 100%
  );
  position: relative;
  overflow: hidden;
  z-index: 2;
`;

const DiscoBall = styled.div`
  position: absolute;
  top: 20px;
  font-size: 4rem;
  animation: ${spin} 4s linear infinite;
`;

const Title = styled.h1`
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: clamp(2.5rem, 8vw, 6rem);
  animation: ${glow} 2s ease-in-out infinite, ${shake} 5s ease-in-out infinite;
  margin-bottom: 20px;
  line-height: 1.2;
`;

const RainbowName = styled.span`
  font-size: clamp(3rem, 10vw, 8rem);
  display: block;
  background: linear-gradient(
    90deg,
    #ff0000,
    #ff7f00,
    #ffff00,
    #00ff00,
    #0000ff,
    #4b0082,
    #9400d3
  );
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${rainbowBg} 3s ease infinite;
  font-weight: 900;
`;

const Subtitle = styled.p`
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  animation: ${float} 3s ease-in-out infinite;
  color: #ff69b4;
  margin-bottom: 30px;
`;

const DramaticText = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  opacity: 0.8;
  max-width: 600px;
  line-height: 1.6;
  font-style: italic;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  font-size: 2rem;
  animation: ${float} 2s ease-in-out infinite;
`;

const HeroSection: React.FC = () => {
  return (
    <Section>
      <DiscoBall>🪩</DiscoBall>

      <Title>
        GOODBYE
        <br />
        <RainbowName>DAVID HSU</RainbowName>
      </Title>

      <Subtitle>SF will never be the same without you 😭</Subtitle>

      <DramaticText>
        <p>
          A city weeps. The fog rolls in heavier now. The burritos taste less
          burrito-y.
        </p>
        <p style={{ marginTop: "10px" }}>
          You have left a void that no amount of sourdough can fill.
        </p>
      </DramaticText>

      <ScrollIndicator>⬇️ Scroll to cry more ⬇️</ScrollIndicator>
    </Section>
  );
};

export default HeroSection;
