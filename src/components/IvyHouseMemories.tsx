import * as React from "react";
import styled, { keyframes } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(1deg); }
  75% { transform: translateY(-15px) rotate(-1deg); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
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
  margin-bottom: 10px;
  background: linear-gradient(90deg, #00ffcc, #7b68ee, #00ffcc);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 3s linear infinite;
`;

const SubHeading = styled.p`
  text-align: center;
  color: #888;
  margin-bottom: 50px;
  font-style: italic;
  font-size: clamp(0.85rem, 2vw, 1rem);
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  max-width: 800px;
  margin: 0 auto;
`;

const PhotoCard = styled.div<{ $delay: number }>`
  text-align: center;
  animation: ${float} 5s ${({ $delay }) => $delay}s ease-in-out infinite;
`;

const PhotoFrame = styled.div`
  border-radius: 12px;
  overflow: hidden;
  border: 3px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 20px rgba(123, 104, 238, 0.3),
    0 8px 32px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s, box-shadow 0.3s;
  background: #111;

  &:hover {
    transform: scale(1.03) rotate(1deg);
    box-shadow: 0 0 40px rgba(123, 104, 238, 0.5),
      0 12px 40px rgba(0, 0, 0, 0.5);
  }

  .gatsby-image-wrapper {
    display: block;
  }
`;

const Caption = styled.p`
  margin-top: 16px;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  color: #ddd;
`;

const CaptionDetail = styled.p`
  margin-top: 6px;
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  color: #888;
  font-style: italic;
`;

const IvyHouseMemories: React.FC = () => {
  return (
    <Section>
      <Heading>🏠 The Ivy House Era 🏠</Heading>
      <SubHeading>
        When we first moved into Ivy house and life was beautiful
      </SubHeading>

      <PhotoGrid>
        <PhotoCard $delay={0}>
          <PhotoFrame>
            <StaticImage
              src="../images/dave-first-ivy.jpg"
              alt="Dave's first day at Ivy house"
              placeholder="blurred"
              layout="constrained"
              width={400}
              quality={100}
            />
          </PhotoFrame>
          <Caption>First Day at Ivy 🔑</Caption>
          <CaptionDetail>
            Fresh-faced and ready to make memories. And then unmake them by
            leaving.
          </CaptionDetail>
        </PhotoCard>

        <PhotoCard $delay={1}>
          <PhotoFrame>
            <StaticImage
              src="../images/dave-ivy.jpg"
              alt="Dave at Ivy house"
              placeholder="blurred"
              layout="constrained"
              width={400}
              quality={100}
            />
          </PhotoFrame>
          <Caption>Dave at Ivy 🏡</Caption>
          <CaptionDetail>
            The house still echoes with the sound of Dave not being there
            anymore.
          </CaptionDetail>
        </PhotoCard>
      </PhotoGrid>
    </Section>
  );
};

export default IvyHouseMemories;
