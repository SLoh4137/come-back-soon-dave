import * as React from "react";
import styled, { keyframes } from "styled-components";

const rainbowBg = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10% { transform: translateX(-10px) rotate(-1deg); }
  20% { transform: translateX(10px) rotate(1deg); }
  30% { transform: translateX(-10px) rotate(-1deg); }
  40% { transform: translateX(10px) rotate(1deg); }
  50% { transform: translateX(-5px); }
  60% { transform: translateX(5px); }
`;

const bounceIn = keyframes`
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); opacity: 1; }
`;

const Section = styled.section`
  padding: 80px 20px;
  text-align: center;
  background: linear-gradient(180deg, #1a0a3e, #2d1b69);
  position: relative;
  z-index: 2;
`;

const Heading = styled.h2`
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 20px;
  color: #feca57;
`;

const SubText = styled.p`
  color: #aaa;
  margin-bottom: 40px;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
`;

const BigButton = styled.button`
  padding: 20px 50px;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #e74c3c, #8e44ad, #3498db);
  background-size: 200% 200%;
  animation: ${rainbowBg} 3s ease infinite;
  border: 3px solid #fff;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 0 30px rgba(142, 68, 173, 0.5);
  transition: transform 0.2s;
  display: block;
  margin: 0 auto 20px;

  &:hover {
    transform: scale(1.1);
  }

  &.shaking {
    animation: ${rainbowBg} 3s ease infinite, ${shake} 0.5s ease-in-out;
  }
`;

const Count = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: #ff6b6b;
`;

const PleaText = styled.p`
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  color: #feca57;
  animation: ${bounceIn} 0.5s ease;
  margin-top: 15px;
`;

const DodgeArea = styled.div`
  margin-top: 60px;
  min-height: 120px;
  position: relative;
`;

const DodgeButton = styled.button<{ $x: number; $y: number; $scale: number }>`
  padding: 12px 30px;
  font-size: 1rem;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  background: #333;
  color: #888;
  border: 1px solid #555;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.15s ease-out, opacity 0.3s ease;
  transform: translate(${({ $x }) => $x}px, ${({ $y }) => $y}px)
    scale(${({ $scale }) => $scale});
  opacity: ${({ $scale }) => $scale};
  position: relative;

  @media (pointer: coarse) {
    transform: scale(${({ $scale }) => $scale});
  }
`;

const pleas = [
  "PLEASE COME BACK DAVE 😭",
  "WE'LL DO ANYTHING!!!",
  "SF ISN'T THE SAME WITHOUT YOU!!!",
  "DAVE PLS 🥺👉👈",
  "WHAT DO WE HAVE TO DO???",
  "NAME YOUR PRICE DAVE",
  "OUR HEARTS ARE BROKEN 💔",
  "COME BAAAAAAACK",
  "ERROR 404: DAVE NOT FOUND 😵",
];

const mobileRefusals = [
  "Nice try! 😏",
  "Nope, not happening! 🙅",
  "We said NO! 😤",
  "Stop trying to give up on Dave!! 😡",
  "The button is SHRINKING because your hope is DYING 💀",
  "Almost gone... just like Dave... 😢",
  "...",
];

const BeggingButton: React.FC = () => {
  const [clickCount, setClickCount] = React.useState(0);
  const [currentPlea, setCurrentPlea] = React.useState("");
  const [buttonPos, setButtonPos] = React.useState({ x: 0, y: 0 });
  const [dodging, setDodging] = React.useState(false);
  const [shrinkTaps, setShrinkTaps] = React.useState(0);
  const [refusalMsg, setRefusalMsg] = React.useState("");
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const handleBeg = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    setCurrentPlea(pleas[newCount % pleas.length]);
    // Trigger shake via DOM to avoid styled-components re-render
    const el = buttonRef.current;
    if (el) {
      el.style.animation = "none";
      // Force reflow
      void el.offsetWidth;
      el.style.animation = "";
      el.classList.remove("shaking");
      void el.offsetWidth;
      el.classList.add("shaking");
      setTimeout(() => el.classList.remove("shaking"), 500);
    }
  };

  const handleDodgeDesktop = (e: React.MouseEvent) => {
    e.preventDefault();
    setButtonPos({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 100,
    });
    setDodging(true);
  };

  const handleDodgeMobile = () => {
    const newTaps = shrinkTaps + 1;
    setShrinkTaps(newTaps);
    setDodging(true);
    if (newTaps < mobileRefusals.length) {
      setRefusalMsg(mobileRefusals[newTaps - 1]);
    } else {
      setRefusalMsg("FINE. But Dave will always be in our hearts. 💔");
    }
  };

  const dodgeScale = isTouchDevice ? Math.max(0, 1 - shrinkTaps * 0.15) : 1;

  const vanished = dodgeScale <= 0;

  return (
    <Section>
      <Heading>🙏 The Official Begging Station 🙏</Heading>
      <SubText>Click the button to send a heartfelt plea into the void</SubText>

      <BigButton type="button" onClick={handleBeg} ref={buttonRef}>
        🥺 BEG DAVE TO COME BACK 🥺
      </BigButton>

      {clickCount > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <Count>
            Begged{" "}
            <span style={{ fontWeight: "bold", fontSize: "1.5em" }}>
              {clickCount}
            </span>{" "}
            {clickCount === 1 ? "time" : "times"}
          </Count>
          <PleaText key={clickCount}>{currentPlea}</PleaText>
        </div>
      )}

      <DodgeArea>
        <p style={{ color: "#666", marginBottom: "20px", fontSize: "0.9rem" }}>
          Or if you've given up hope...
        </p>
        {!vanished ? (
          <DodgeButton
            type="button"
            onMouseEnter={!isTouchDevice ? handleDodgeDesktop : undefined}
            onClick={
              isTouchDevice
                ? handleDodgeMobile
                : () =>
                    alert("HOW DID YOU CLICK THIS?! There is still hope!! 🎉")
            }
            $x={buttonPos.x}
            $y={buttonPos.y}
            $scale={dodgeScale}
          >
            Accept that Dave is gone forever 😞
          </DodgeButton>
        ) : (
          <p
            style={{
              color: "#feca57",
              fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
              fontSize: "1.1rem",
            }}
          >
            The button is gone. Just like Dave. 🪦
          </p>
        )}
        {dodging && refusalMsg && (
          <p
            key={shrinkTaps}
            style={{
              color: "#ff6b6b",
              marginTop: "20px",
              fontStyle: "italic",
              fontSize: "0.9rem",
              animation: "fadeIn 0.3s ease",
            }}
          >
            {refusalMsg}
          </p>
        )}
        {dodging && !isTouchDevice && (
          <p
            style={{
              color: "#ff6b6b",
              marginTop: "20px",
              fontStyle: "italic",
              fontSize: "0.9rem",
            }}
          >
            NO! We will NEVER give up! 😤
          </p>
        )}
      </DodgeArea>
    </Section>
  );
};

export default BeggingButton;
