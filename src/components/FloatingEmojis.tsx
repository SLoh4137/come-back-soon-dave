import * as React from "react";
import styled, { keyframes } from "styled-components";

const floatUp = keyframes`
  0% { transform: translateY(100vh) rotate(0deg); opacity: 1; }
  100% { transform: translateY(-100px) rotate(720deg); opacity: 0; }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`;

const Emoji = styled.span`
  position: absolute;
  bottom: -50px;
  user-select: none;
  animation: ${floatUp} var(--dur) var(--delay) linear infinite;
`;

const EMOJIS = [
  "😭", "👋", "🌉", "💔", "🥺", "✈️", "🧳", "😢", "🫡", "🪦", "💀", "🤡", "🫠",
];

const FloatingEmojis: React.FC = () => {
  const emojis = React.useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: EMOJIS[i % EMOJIS.length],
      left: `${(i * 5) % 100}%`,
      delay: `${(i * 0.7) % 10}s`,
      duration: `${6 + (i % 5) * 2}s`,
      fontSize: `${1.5 + (i % 3) * 0.8}rem`,
    }));
  }, []);

  return (
    <Container>
      {emojis.map(({ id, emoji, left, delay, duration, fontSize }) => (
        <Emoji
          key={id}
          style={{
            left,
            fontSize,
            "--dur": duration,
            "--delay": delay,
          } as React.CSSProperties}
        >
          {emoji}
        </Emoji>
      ))}
    </Container>
  );
};

export default FloatingEmojis;
