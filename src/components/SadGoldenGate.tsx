import * as React from "react";
import styled, { keyframes } from "styled-components";

const wobble = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-15deg); }
  75% { transform: rotate(15deg); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(5deg); }
  50% { transform: translateY(-10px) rotate(-3deg); }
  75% { transform: translateY(-25px) rotate(3deg); }
`;

const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
  background: linear-gradient(180deg, #1a0020, #0d1b2a);
  position: relative;
  z-index: 2;
  overflow: hidden;
`;

const Heading = styled.h2`
  font-family: "Comic Sans MS", "Comic Sans", "Comic Neue", cursive;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 30px;
  color: #ff6b6b;
`;

const BridgeSvg = styled.svg`
  width: min(90vw, 500px);
  height: auto;
  animation: ${wobble} 4s ease-in-out infinite;
`;

const SadFace = styled.text`
  animation: ${float} 2s ease-in-out infinite;
`;

const Caption = styled.p`
  margin-top: 20px;
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  font-style: italic;
  color: #aaa;
`;

const SadGoldenGate: React.FC = () => {
  return (
    <Section>
      <Heading>Even the Golden Gate Bridge is crying 🌉😢</Heading>

      <div style={{ position: "relative", display: "inline-block" }}>
        <BridgeSvg viewBox="0 0 400 200">
          <rect
            x="0"
            y="160"
            width="400"
            height="40"
            fill="#1a5276"
            opacity="0.5"
          />
          <path
            d="M 0,80 Q 100,20 200,80 Q 300,20 400,80"
            stroke="#c0392b"
            strokeWidth="4"
            fill="none"
          />
          <rect x="90" y="40" width="20" height="140" fill="#e74c3c" rx="2" />
          <rect x="290" y="40" width="20" height="140" fill="#e74c3c" rx="2" />
          <rect x="85" y="35" width="30" height="10" fill="#c0392b" rx="2" />
          <rect x="285" y="35" width="30" height="10" fill="#c0392b" rx="2" />
          <rect x="0" y="150" width="400" height="15" fill="#922b21" rx="2" />

          {[120, 140, 160, 180, 220, 240, 260, 280].map((x) => (
            <line
              key={x}
              x1={x}
              y1={(() => {
                if (x <= 200) return 80 - 60 * Math.sin((x / 200) * Math.PI);
                return 80 - 60 * Math.sin(((x - 200) / 200) * Math.PI);
              })()}
              x2={x}
              y2="150"
              stroke="#e74c3c"
              strokeWidth="1.5"
            />
          ))}

          <SadFace x="200" y="130" textAnchor="middle" fontSize="30">
            😢
          </SadFace>

          {[150, 200, 250].map((x, i) => (
            <g key={x}>
              <circle cx={x} cy={155} r="3" fill="#3498db" opacity="0.8">
                <animate
                  attributeName="cy"
                  from="155"
                  to="200"
                  dur={`${1.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.8"
                  to="0"
                  dur={`${1.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}
        </BridgeSvg>
      </div>

      <Caption>
        The bridge has never looked so sad. And it's seen some things.
      </Caption>
    </Section>
  );
};

export default SadGoldenGate;
