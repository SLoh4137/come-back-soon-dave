import * as React from "react"
import styled, { keyframes } from "styled-components"

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const slideInRight = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.85);
  border-radius: 16px;
  padding: 12px 20px;
  z-index: 100;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  max-width: 280px;
  animation: ${slideInRight} 1s 2s both;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Disc = styled.div<{ $spinning: boolean }>`
  font-size: 2rem;
  animation: ${({ $spinning }) => ($spinning ? spin : "none")} 3s linear infinite;
`

const Info = styled.div`
  flex: 1;
  min-width: 0;
`

const NowPlaying = styled.p`
  font-size: 0.75rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2px;
`

const TrackName = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Artist = styled.p`
  font-size: 0.75rem;
  color: #aaa;
`

const PlayButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 4px;
`

const ProgressBar = styled.div`
  margin-top: 8px;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
`

const Progress = styled.div`
  width: 35%;
  height: 100%;
  background: linear-gradient(90deg, #1db954, #1ed760);
  border-radius: 2px;
`

const FakeMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(true)

  return (
    <Container>
      <Row>
        <Disc $spinning={isPlaying}>💿</Disc>
        <Info>
          <NowPlaying>Now Playing</NowPlaying>
          <TrackName>My Heart Will Go On</TrackName>
          <Artist>Celine Dion (for Dave)</Artist>
        </Info>
        <PlayButton onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "⏸️" : "▶️"}
        </PlayButton>
      </Row>
      <ProgressBar>
        <Progress />
      </ProgressBar>
    </Container>
  )
}

export default FakeMusicPlayer
