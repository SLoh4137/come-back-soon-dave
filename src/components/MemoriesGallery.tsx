import * as React from "react";
import styled, { keyframes } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const popIn = keyframes`
  0% { transform: scale(0) rotate(-10deg); opacity: 0; }
  60% { transform: scale(1.05) rotate(2deg); }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
`;

const Section = styled.section`
  padding: 80px 20px;
  background: linear-gradient(180deg, #1a0a3e, #2d1b69);
  position: relative;
  z-index: 2;
`;

const Heading = styled.h2`
  text-align: center;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 10px;
  background: linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff6b6b);
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

const Masonry = styled.div`
  column-count: 4;
  column-gap: 16px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 900px) {
    column-count: 3;
  }
  @media (max-width: 600px) {
    column-count: 2;
  }
`;

const PhotoFrame = styled.div<{ $index: number }>`
  break-inside: avoid;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  background: #111;
  margin-bottom: 16px;
  animation: ${popIn} 0.5s ${({ $index }) => $index * 0.05}s both;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(254, 202, 87, 0.4), 0 8px 32px rgba(0, 0, 0, 0.5);
    border-color: rgba(254, 202, 87, 0.5);
    z-index: 1;
  }

  .gatsby-image-wrapper {
    display: block;
  }
`;

const MemoriesGallery: React.FC = () => {
  return (
    <Section>
      <Heading>🎞️ Random Memories 🎞️</Heading>
      <SubHeading>
        Many memories
        <br />
        Think of all the fun we had
        <br />
        More when you come back
      </SubHeading>

      <Masonry>
        <PhotoFrame $index={0}>
          <StaticImage
            src="../images/memories/dave-activate.png"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={1}>
          <StaticImage
            src="../images/memories/dave-aileen-showcase.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={2}>
          <StaticImage
            src="../images/memories/dave-bike-ride.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={3}>
          <StaticImage
            src="../images/memories/dave-dye-hair.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={4}>
          <StaticImage
            src="../images/memories/dave-foster-city-kayaking.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={5}>
          <StaticImage
            src="../images/memories/dave-iris-bday.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={6}>
          <StaticImage
            src="../images/memories/dave-ivy-rooftop.jpeg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={7}>
          <StaticImage
            src="../images/memories/dave-lucid-motors.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={8}>
          <StaticImage
            src="../images/memories/dave-lyf-group-d.JPG"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={9}>
          <StaticImage
            src="../images/memories/dave-lyf-pizza.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={10}>
          <StaticImage
            src="../images/memories/dave-lyf-stuffed-animals.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={11}>
          <StaticImage
            src="../images/memories/dave-men-dinner.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={12}>
          <StaticImage
            src="../images/memories/dave-meta-sf-office.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={13}>
          <StaticImage
            src="../images/memories/dave-museum-face.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={14}>
          <StaticImage
            src="../images/memories/dave-pizza-gary-bday.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={15}>
          <StaticImage
            src="../images/memories/dave-renaissance-fair.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={16}>
          <StaticImage
            src="../images/memories/dave-room-napping.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={17}>
          <StaticImage
            src="../images/memories/dave-round-one-high-score.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={18}>
          <StaticImage
            src="../images/memories/dave-round-one-octopus-hands.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={19}>
          <StaticImage
            src="../images/memories/dave-sea-urchin.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={20}>
          <StaticImage
            src="../images/memories/dave-the-kitchen.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={21}>
          <StaticImage
            src="../images/memories/dave-volo-volleyball.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame $index={22}>
          <StaticImage
            src="../images/memories/dave-white-rabbit.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
      </Masonry>
    </Section>
  );
};

export default MemoriesGallery;
