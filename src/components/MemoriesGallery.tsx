import * as React from "react";
import styled, { keyframes } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Sparkles from "./Sparkles";

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

const SparklesWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const Heading = styled.h2`
  text-align: center;
  font-family: "Comic Sans MS", "Comic Sans", "Comic Neue", cursive;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 0;
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

const PhotoFrame = styled.div`
  break-inside: avoid;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  background: #111;
  margin-bottom: 16px;
  opacity: 0;
  transform: scale(0) rotate(-10deg);

  .visible & {
    animation: ${popIn} 0.5s both;
  }

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
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section ref={sectionRef}>
      <SparklesWrapper>
        <Sparkles>
          <Heading>🎞️ Random Memories 🎞️</Heading>
        </Sparkles>
      </SparklesWrapper>
      <SubHeading>
        Many memories
        <br />
        Think of all the fun we had
        <br />
        More when you come back
      </SubHeading>

      <Masonry>
        <PhotoFrame style={{ animationDelay: "0s" }}>
          <StaticImage
            src="../images/memories/dave-activate.png"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.05s" }}>
          <StaticImage
            src="../images/memories/dave-aileen-showcase.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.1s" }}>
          <StaticImage
            src="../images/memories/dave-bike-ride.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.15s" }}>
          <StaticImage
            src="../images/memories/dave-dye-hair.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.2s" }}>
          <StaticImage
            src="../images/memories/dave-foster-city-kayaking.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.25s" }}>
          <StaticImage
            src="../images/memories/dave-iris-bday.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.3s" }}>
          <StaticImage
            src="../images/memories/dave-ivy-rooftop.jpeg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.35s" }}>
          <StaticImage
            src="../images/memories/dave-lucid-motors.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.4s" }}>
          <StaticImage
            src="../images/memories/dave-lyf-group-d.JPG"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.45s" }}>
          <StaticImage
            src="../images/memories/dave-lyf-pizza.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.5s" }}>
          <StaticImage
            src="../images/memories/dave-lyf-stuffed-animals.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.55s" }}>
          <StaticImage
            src="../images/memories/dave-men-dinner.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.6s" }}>
          <StaticImage
            src="../images/memories/dave-meta-sf-office.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.65s" }}>
          <StaticImage
            src="../images/memories/dave-museum-face.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.7s" }}>
          <StaticImage
            src="../images/memories/dave-pizza-gary-bday.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.75s" }}>
          <StaticImage
            src="../images/memories/dave-renaissance-fair.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.8s" }}>
          <StaticImage
            src="../images/memories/dave-room-napping.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.85s" }}>
          <StaticImage
            src="../images/memories/dave-round-one-high-score.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.9s" }}>
          <StaticImage
            src="../images/memories/dave-round-one-octopus-hands.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "0.95s" }}>
          <StaticImage
            src="../images/memories/dave-sea-urchin.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "1s" }}>
          <StaticImage
            src="../images/memories/dave-the-kitchen.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "1.05s" }}>
          <StaticImage
            src="../images/memories/dave-volo-volleyball.jpg"
            alt="Dave memory"
            placeholder="blurred"
            layout="fullWidth"
          />
        </PhotoFrame>
        <PhotoFrame style={{ animationDelay: "1.1s" }}>
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
