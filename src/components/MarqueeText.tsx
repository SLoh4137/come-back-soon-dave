import * as React from "react"
import styled, { keyframes } from "styled-components"

const marquee = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`

const Banner = styled.div<{ $bgColor: string; $textColor: string; $fontSize: string }>`
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
`

const ScrollingText = styled.span<{ $speed: number }>`
  display: inline-block;
  animation: ${marquee} ${({ $speed }) => $speed}s linear infinite;
  padding-left: 100%;
`

interface MarqueeTextProps {
  text: string
  speed?: number
  bgColor?: string
  textColor?: string
  fontSize?: string
}

const MarqueeText: React.FC<MarqueeTextProps> = ({
  text,
  speed = 15,
  bgColor = "#ff0000",
  textColor = "#ffff00",
  fontSize = "1.5rem",
}) => {
  return (
    <Banner $bgColor={bgColor} $textColor={textColor} $fontSize={fontSize}>
      <ScrollingText $speed={speed}>{text}</ScrollingText>
    </Banner>
  )
}

export default MarqueeText
