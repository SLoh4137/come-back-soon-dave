import * as React from "react";
import styled, { keyframes } from "styled-components";

const neonFlicker = keyframes`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,
      0 0 42px #ff00de, 0 0 82px #ff00de, 0 0 92px #ff00de;
  }
  20%, 24%, 55% { text-shadow: none; }
`;

const popIn = keyframes`
  0% { transform: scale(0) rotate(-180deg); opacity: 0; }
  60% { transform: scale(1.2) rotate(10deg); }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
`;

const Section = styled.section`
  padding: 80px 20px;
  background: linear-gradient(180deg, #0d1b2a, #1a0a3e);
  position: relative;
  z-index: 2;
`;

const Heading = styled.h2`
  text-align: center;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 50px;
  animation: ${neonFlicker} 1.5s infinite alternate;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
`;

const Card = styled.div<{ $color: string; $index: number }>`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 24px;
  border: 2px solid ${({ $color }) => $color}33;
  animation: ${popIn} 0.5s ${({ $index }) => $index * 0.1}s both;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: default;

  &:hover {
    transform: scale(1.05) rotate(2deg);
    box-shadow: 0 0 30px ${({ $color }) => $color}44;
  }
`;

const Emoji = styled.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 12px;
`;

const Quote = styled.p`
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  line-height: 1.5;
  color: #ddd;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
`;

const Attribution = styled.p<{ $color: string }>`
  margin-top: 12px;
  font-size: 0.85rem;
  color: ${({ $color }) => $color};
  font-style: italic;
`;

const messages = [
  {
    text: "Remember when Dave said he'd 'be right back'? That was months ago.",
    emoji: "🤡",
    color: "#ff6b6b",
  },
  {
    text: "Dave's apartment in SF is now a memorial site. We leave flowers weekly.",
    emoji: "💐",
    color: "#feca57",
  },
  {
    text: "The group chat hasn't been the same. We just send sad reacts now.",
    emoji: "😔",
    color: "#48dbfb",
  },
  {
    text: "Local restaurants have reported a 47% decrease in revenue since Dave left.",
    emoji: "📉",
    color: "#ff9ff3",
  },
  {
    text: "Dave didn't just leave SF. He left a Dave-shaped hole in our hearts.",
    emoji: "💔",
    color: "#f368e0",
  },
  {
    text: "Rumor has it the fog in SF is actually the collective tears of Dave's friends.",
    emoji: "🌫️",
    color: "#c8d6e5",
  },
  {
    text: "Dave said he was going to get milk. That was the last we saw of him.",
    emoji: "🥛",
    color: "#00d2d3",
  },
  {
    text: "SF's vibe without Dave is like a burrito without guac. Technically fine, but why even bother?",
    emoji: "🌯",
    color: "#ff9f43",
  },
];

const FarewellMessages: React.FC = () => {
  return (
    <Section>
      <Heading>📜 Testimonials from Heartbroken Friends 📜</Heading>
      <Grid>
        {messages.map((msg, i) => (
          <Card key={i} $color={msg.color} $index={i}>
            <Emoji>{msg.emoji}</Emoji>
            <Quote>"{msg.text}"</Quote>
            <Attribution $color={msg.color}>
              — Anonymous SF Resident
            </Attribution>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default FarewellMessages;
