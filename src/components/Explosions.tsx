import * as React from "react";
import styled, { keyframes } from "styled-components";

const PARTICLE_COLORS = [
  "#ff0000",
  "#ff7f00",
  "#ffff00",
  "#00ff00",
  "#00bfff",
  "#ff69b4",
  "#ff00ff",
  "#ffd700",
  "#00ffff",
  "#ff4500",
];

const EXPLOSION_EMOJIS = [
  "💥",
  "🔥",
  "✨",
  "⭐",
  "💫",
  "🎆",
  "🎇",
  "🌟",
  "☄️",
  "🫠",
];

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  size: number;
  color: string;
  type: "dot" | "emoji";
  emoji?: string;
}

interface Explosion {
  id: number;
  x: number;
  y: number;
  particles: Particle[];
  emoji: string;
  timestamp: number;
}

const explode = (angle: number, speed: number) => keyframes`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(
      ${Math.cos(angle) * speed}px,
      ${Math.sin(angle) * speed}px
    ) scale(0);
    opacity: 0;
  }
`;

const flash = keyframes`
  0% { transform: scale(0); opacity: 1; }
  50% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.5); opacity: 0; }
`;

const bigBoom = keyframes`
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  20% { transform: translate(-50%, -50%) scale(1.4); opacity: 1; }
  50% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 50;
  overflow: hidden;
`;

const FlashCircle = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.9),
    rgba(255, 200, 0, 0.5),
    transparent
  );
  transform: translate(-50%, -50%);
  animation: ${flash} 0.5s ease-out forwards;
`;

const CenterEmoji = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  font-size: 4rem;
  animation: ${bigBoom} 0.8s ease-out forwards;
`;

const DotParticle = styled.div<{
  $x: number;
  $y: number;
  $size: number;
  $color: string;
  $angle: number;
  $speed: number;
}>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  box-shadow: 0 0 6px ${({ $color }) => $color};
  animation: ${({ $angle, $speed }) => explode($angle, $speed)}
    ${() => 0.6 + Math.random() * 0.4}s ease-out forwards;
`;

const EmojiParticle = styled.div<{
  $x: number;
  $y: number;
  $size: number;
  $angle: number;
  $speed: number;
}>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  font-size: ${({ $size }) => $size}px;
  animation: ${({ $angle, $speed }) => explode($angle, $speed)}
    ${() => 0.8 + Math.random() * 0.5}s ease-out forwards;
`;

const createExplosion = (x: number, y: number, id: number): Explosion => {
  const particleCount = 15 + Math.floor(Math.random() * 15);
  const particles: Particle[] = Array.from(
    { length: particleCount },
    (_, i) => {
      const isEmoji = Math.random() < 0.3;
      return {
        id: i,
        x,
        y,
        angle: (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5,
        speed: 60 + Math.random() * 140,
        size: isEmoji ? 16 + Math.random() * 16 : 4 + Math.random() * 8,
        color:
          PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        type: isEmoji ? "emoji" : "dot",
        emoji:
          EXPLOSION_EMOJIS[Math.floor(Math.random() * EXPLOSION_EMOJIS.length)],
      };
    }
  );

  const emoji =
    EXPLOSION_EMOJIS[Math.floor(Math.random() * EXPLOSION_EMOJIS.length)];
  return { id, x, y, particles, emoji, timestamp: Date.now() };
};

const Explosions: React.FC = () => {
  const [explosions, setExplosions] = React.useState<Explosion[]>([]);
  const idRef = React.useRef(0);

  React.useEffect(() => {
    const spawnRandom = () => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const id = idRef.current++;
      setExplosions((prev) => [...prev, createExplosion(x, y, id)]);

      // Clean up old explosions
      setTimeout(() => {
        setExplosions((prev) => prev.filter((e) => e.id !== id));
      }, 1500);
    };

    // Random interval between explosions
    const scheduleNext = () => {
      const delay = 1 + Math.random() * 1500;
      return setTimeout(() => {
        spawnRandom();
        timerRef = scheduleNext();
      }, delay);
    };

    // Initial explosion after a short delay
    let timerRef = setTimeout(() => {
      spawnRandom();
      timerRef = scheduleNext();
    }, 1000);

    return () => clearTimeout(timerRef);
  }, []);

  return (
    <Container>
      {explosions.map((explosion) => (
        <React.Fragment key={explosion.id}>
          <FlashCircle $x={explosion.x} $y={explosion.y} />
          <CenterEmoji $x={explosion.x} $y={explosion.y}>
            💥
          </CenterEmoji>
          {explosion.particles.map((p) =>
            p.type === "emoji" ? (
              <EmojiParticle
                key={`${explosion.id}-${p.id}`}
                $x={p.x}
                $y={p.y}
                $size={p.size}
                $angle={p.angle}
                $speed={p.speed}
              >
                {p.emoji}
              </EmojiParticle>
            ) : (
              <DotParticle
                key={`${explosion.id}-${p.id}`}
                $x={p.x}
                $y={p.y}
                $size={p.size}
                $color={p.color}
                $angle={p.angle}
                $speed={p.speed}
              />
            )
          )}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Explosions;
