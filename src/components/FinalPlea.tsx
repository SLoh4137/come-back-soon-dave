import * as React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(5deg); }
  50% { transform: translateY(-10px) rotate(-3deg); }
  75% { transform: translateY(-25px) rotate(3deg); }
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

const Section = styled.section`
  padding: 100px 20px;
  text-align: center;
  background: linear-gradient(180deg, #0a0a2e, #000);
  position: relative;
  z-index: 2;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h2`
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: clamp(2rem, 6vw, 4rem);
  margin-bottom: 30px;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const HeartEmoji = styled.div`
  font-size: 8rem;
  animation: ${float} 3s ease-in-out infinite;
  margin-bottom: 30px;
`;

const Message = styled.p`
  max-width: 600px;
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  line-height: 1.8;
  color: #ccc;
  margin-bottom: 40px;
`;

const LoveNote = styled.p`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  color: #ff69b4;
  animation: ${glow} 2s ease-in-out infinite;
`;

const Footer = styled.footer`
  margin-top: 80px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #555;
  font-size: 0.8rem;
`;

const FinalPlea: React.FC = () => {
  return (
    <Section>
      <Heading>Come Back Soon, Dave</Heading>
      <HeartEmoji>🫶</HeartEmoji>
      <Message>
        In all seriousness, Dave — you're an incredible friend and SF won't be
        the same without you. We're counting down the days until you're back.
        Until then, know that you're missed more than words (or this extremely
        professional website) can express.
      </Message>
      <LoveNote>With love from your SF crew ❤️</LoveNote>
      <Footer>
        <p>Made with 😭 and questionable CSS choices</p>
        <p style={{ marginTop: "8px" }}>
          This website is 100% Comic Sans and we're not sorry
        </p>
        <p style={{ marginTop: "15px", fontSize: "2rem" }}>
          🌉 → ✈️ → 🏠 → 🔙 → 🌉
        </p>
      </Footer>
    </Section>
  );
};

export default FinalPlea;
