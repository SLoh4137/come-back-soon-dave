import * as React from "react";
import styled, { keyframes } from "styled-components";

const rainbow = keyframes`
  0% { color: #ff0000; }
  14% { color: #ff7f00; }
  28% { color: #ffff00; }
  42% { color: #00ff00; }
  57% { color: #0000ff; }
  71% { color: #4b0082; }
  85% { color: #9400d3; }
  100% { color: #ff0000; }
`;

const blink = keyframes`
  50% { opacity: 0; }
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

const Section = styled.section`
  padding: 80px 20px;
  text-align: center;
  background: linear-gradient(180deg, #0a0a2e, #1a0020);
  position: relative;
  z-index: 2;
`;

const Heading = styled.h2`
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 10px;
  animation: ${rainbow} 3s linear infinite;
`;

const SubText = styled.p`
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  color: #888;
  margin-bottom: 40px;
  font-style: italic;
`;

const TimerRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const Unit = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;

const Number = styled.span`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  font-family: monospace;
  background: linear-gradient(180deg, #ff6b6b, #ee5a24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
`;

const Separator = styled(Number)`
  align-self: flex-start;
  animation: ${blink} 1s step-end infinite;
`;

const Label = styled.span`
  font-size: clamp(0.7rem, 2vw, 1rem);
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #aaa;
  margin-top: 5px;
`;

const SufferingText = styled.p`
  margin-top: 30px;
  font-size: clamp(1.5rem, 4vw, 3rem);
  animation: ${shake} 0.5s ease-in-out infinite;
`;

const CountUpTimer: React.FC = () => {
  const [now, setNow] = React.useState<Date | null>(null);
  const departureDate = new Date("2026-03-18T19:00:00");

  React.useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!now) return null;

  const diff = now.getTime() - departureDate.getTime();
  const absDiff = Math.abs(diff);
  const days = Math.floor(absDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((absDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((absDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((absDiff / 1000) % 60);

  return (
    <Section>
      <Heading>
        {diff > 0
          ? "⏰ Time Since Dave Abandoned Us ⏰"
          : "⏰ Countdown to Dave Abandoning Us ⏰"}
      </Heading>
      <SubText>(not that we're counting or anything...)</SubText>

      <TimerRow>
        <Unit>
          <Number>{days}</Number>
          <Label>days</Label>
        </Unit>
        <Separator>:</Separator>
        <Unit>
          <Number>{String(hours).padStart(2, "0")}</Number>
          <Label>hours</Label>
        </Unit>
        <Separator>:</Separator>
        <Unit>
          <Number>{String(minutes).padStart(2, "0")}</Number>
          <Label>minutes</Label>
        </Unit>
        <Separator>:</Separator>
        <Unit>
          <Number>{String(seconds).padStart(2, "0")}</Number>
          <Label>seconds</Label>
        </Unit>
      </TimerRow>

      <SufferingText>
        {diff > 0 ? "OF PURE SUFFERING 😩" : "UNTIL THE SUFFERING BEGINS 😰"}
      </SufferingText>
    </Section>
  );
};

export default CountUpTimer;
