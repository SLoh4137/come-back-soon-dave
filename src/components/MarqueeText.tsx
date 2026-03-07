import * as React from "react";
import styled, { keyframes } from "styled-components";

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const Banner = styled.div<{
  $bgColor: string;
  $textColor: string;
  $fontSize: string;
}>`
  overflow: hidden;
  white-space: nowrap;
  background: ${({ $bgColor }) => $bgColor};
  padding: 12px 0;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: bold;
  color: ${({ $textColor }) => $textColor};
  border-top: 3px dashed #ffff00;
  border-bottom: 3px dashed #ffff00;
  position: relative;
  z-index: 2;
`;

const ScrollingTrack = styled.div<{ $speed: number }>`
  display: inline-block;
  animation: ${marquee} ${({ $speed }) => $speed}s linear infinite;
  white-space: nowrap;
`;

const TextSegment = styled.span`
  padding: 0 2rem;
`;

interface MarqueeTextProps {
  text: string;
  speed?: number;
  bgColor?: string;
  textColor?: string;
  fontSize?: string;
}

const MarqueeText: React.FC<MarqueeTextProps> = ({
  text,
  speed = 8,
  bgColor = "#ff0000",
  textColor = "#ffff00",
  fontSize = "1.5rem",
}) => {
  return (
    <Banner $bgColor={bgColor} $textColor={textColor} $fontSize={fontSize}>
      <ScrollingTrack $speed={speed}>
        <TextSegment>{text}</TextSegment>
        <TextSegment>{text}</TextSegment>
        <TextSegment>{text}</TextSegment>
        <TextSegment>{text}</TextSegment>
      </ScrollingTrack>
    </Banner>
  );
};

export default MarqueeText;
