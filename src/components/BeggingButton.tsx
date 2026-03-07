import * as React from "react"
import styled, { keyframes } from "styled-components"

const rainbowBg = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10% { transform: translateX(-10px) rotate(-1deg); }
  20% { transform: translateX(10px) rotate(1deg); }
  30% { transform: translateX(-10px) rotate(-1deg); }
  40% { transform: translateX(10px) rotate(1deg); }
  50% { transform: translateX(-5px); }
  60% { transform: translateX(5px); }
`

const bounceIn = keyframes`
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); opacity: 1; }
`

const Section = styled.section`
  padding: 80px 20px;
  text-align: center;
  background: linear-gradient(180deg, #1a0a3e, #2d1b69);
  position: relative;
  z-index: 2;
`

const Heading = styled.h2`
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 20px;
  color: #feca57;
`

const SubText = styled.p`
  color: #aaa;
  margin-bottom: 40px;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
`

const BigButton = styled.button<{ $shaking: boolean }>`
  padding: 20px 50px;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #e74c3c, #8e44ad, #3498db);
  background-size: 200% 200%;
  animation: ${rainbowBg} 3s ease infinite${({ $shaking }) => ($shaking ? `, ${shake} 0.5s ease-in-out` : "")};
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
`

const Count = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: #ff6b6b;
`

const PleaText = styled.p`
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  color: #feca57;
  animation: ${bounceIn} 0.5s ease;
  margin-top: 15px;
`

const DodgeArea = styled.div`
  margin-top: 60px;
  min-height: 120px;
  position: relative;
`

const DodgeButton = styled.button<{ $x: number; $y: number }>`
  padding: 12px 30px;
  font-size: 1rem;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  background: #333;
  color: #888;
  border: 1px solid #555;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.15s ease-out;
  transform: translate(${({ $x }) => $x}px, ${({ $y }) => $y}px);
  position: relative;
`

const pleas = [
  "PLEASE COME BACK DAVE 😭",
  "WE'LL DO ANYTHING!!!",
  "SF ISN'T THE SAME WITHOUT YOU!!!",
  "I'M LITERALLY BEGGING RN 🧎",
  "DAVE PLS 🥺👉👈",
  "WHAT DO WE HAVE TO DO???",
  "NAME YOUR PRICE DAVE",
  "OUR HEARTS ARE BROKEN 💔",
  "*UGLY CRYING NOISES* 😭😭😭",
  "THE BURRITOS MISS YOU TOO 🌯",
  "COME BAAAAAAACK",
  "ERROR 404: DAVE NOT FOUND 😵",
  "WE MISS YOUR FACE 🫠",
]

const BeggingButton: React.FC = () => {
  const [clickCount, setClickCount] = React.useState(0)
  const [currentPlea, setCurrentPlea] = React.useState("")
  const [isShaking, setIsShaking] = React.useState(false)
  const [buttonPos, setButtonPos] = React.useState({ x: 0, y: 0 })
  const [dodging, setDodging] = React.useState(false)

  const handleBeg = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)
    setCurrentPlea(pleas[newCount % pleas.length])
    setIsShaking(true)
    setTimeout(() => setIsShaking(false), 500)
  }

  const handleDontClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setButtonPos({ x: (Math.random() - 0.5) * 200, y: (Math.random() - 0.5) * 100 })
    setDodging(true)
  }

  return (
    <Section>
      <Heading>🙏 The Official Begging Station 🙏</Heading>
      <SubText>Click the button to send a heartfelt plea into the void</SubText>

      <BigButton onClick={handleBeg} $shaking={isShaking}>
        🥺 BEG DAVE TO COME BACK 🥺
      </BigButton>

      {clickCount > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <Count>
            Begged <span style={{ fontWeight: "bold", fontSize: "1.5em" }}>{clickCount}</span>{" "}
            {clickCount === 1 ? "time" : "times"}
          </Count>
          <PleaText key={clickCount}>{currentPlea}</PleaText>
        </div>
      )}

      <DodgeArea>
        <p style={{ color: "#666", marginBottom: "20px", fontSize: "0.9rem" }}>
          Or if you've given up hope...
        </p>
        <DodgeButton
          onMouseEnter={handleDontClick}
          onClick={() => alert("HOW DID YOU CLICK THIS?! There is still hope!! 🎉")}
          $x={buttonPos.x}
          $y={buttonPos.y}
        >
          Accept that Dave is gone forever 😞
        </DodgeButton>
        {dodging && (
          <p style={{ color: "#ff6b6b", marginTop: "20px", fontStyle: "italic", fontSize: "0.9rem" }}>
            NO! We will NEVER give up! 😤
          </p>
        )}
      </DodgeArea>
    </Section>
  )
}

export default BeggingButton
