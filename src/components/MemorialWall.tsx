import * as React from "react"
import styled, { keyframes } from "styled-components"

const slideInLeft = keyframes`
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`

const slideInRight = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`

const Section = styled.section`
  padding: 80px 20px;
  background: linear-gradient(180deg, #2d1b69, #0a0a2e);
  position: relative;
  z-index: 2;
`

const Heading = styled.h2`
  text-align: center;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 15px;
`

const SubHeading = styled.p`
  text-align: center;
  color: #888;
  margin-bottom: 50px;
  font-style: italic;
  font-size: clamp(0.85rem, 2vw, 1rem);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
`

const Card = styled.div<{ $index: number }>`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${({ $index }) => ($index % 2 === 0 ? slideInLeft : slideInRight)} 0.6s
    ${({ $index }) => $index * 0.15}s both;
  text-align: center;
`

const Emoji = styled.span`
  font-size: 3rem;
  display: block;
  margin-bottom: 12px;
`

const Title = styled.h3`
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: 1.1rem;
  color: #feca57;
  margin-bottom: 8px;
`

const Content = styled.p`
  color: #bbb;
  font-size: 0.95rem;
  line-height: 1.4;
`

const memories = [
  { title: "Dave's Last Words", content: "\"I'll be back before you know it\" — Dave, a known liar", emoji: "🤥" },
  { title: "Dave's Favorite Spot", content: "Every restaurant in SF, simultaneously", emoji: "🍽️" },
  { title: "Fun Dave Fact #1", content: "Dave's departure caused a 0.3 magnitude earthquake in SF", emoji: "🌍" },
  { title: "Fun Dave Fact #2", content: "Local seagulls have been spotted wearing tiny black armbands", emoji: "🐦" },
  { title: "Dave's Legacy", content: "A slightly warmer barstool and a lot of empty group chat messages", emoji: "🪑" },
  { title: "Official Mourning Period", content: "Until Dave comes back (so basically forever)", emoji: "⏳" },
]

const MemorialWall: React.FC = () => {
  return (
    <Section>
      <Heading>🪦 The Dave Hsu Memorial Wall 🪦</Heading>
      <SubHeading>(He's not dead, he just left SF. Which is honestly worse.)</SubHeading>
      <Grid>
        {memories.map((memory, i) => (
          <Card key={i} $index={i}>
            <Emoji>{memory.emoji}</Emoji>
            <Title>{memory.title}</Title>
            <Content>{memory.content}</Content>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}

export default MemorialWall
