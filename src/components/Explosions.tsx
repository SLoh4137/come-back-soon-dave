import * as React from "react";
import styled, { keyframes } from "styled-components";

const PARTICLE_COLORS = [
  "#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#00bfff",
  "#ff69b4", "#ff00ff", "#ffd700", "#00ffff", "#ff4500",
];

const EXPLOSION_EMOJIS = [
  "💥", "🔥", "✨", "⭐", "💫", "🎆", "🎇", "🌟", "☄️", "🫠",
];

interface Particle {
  id: number;
  dx: number;
  dy: number;
  size: number;
  color: string;
  type: "dot" | "emoji";
  emoji?: string;
  duration: number;
}

interface Explosion {
  id: number;
  x: number;
  y: number;
  emoji: string;
  particles: Particle[];
}

const flash = keyframes`
  0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
  50% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
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

const FlashCircle = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.9), rgba(255,200,0,0.5), transparent);
  animation: ${flash} 0.5s ease-out forwards;
`;

const CenterEmoji = styled.div`
  position: absolute;
  font-size: 4rem;
  animation: ${bigBoom} 0.8s ease-out forwards;
`;

// Use a single @keyframes for all particles — the actual direction/distance
// is handled per-element via a CSS custom property and inline style.
const particleFly = keyframes`
  0% { transform: translate(0, 0) scale(1); opacity: 1; }
  100% { transform: translate(var(--dx), var(--dy)) scale(0); opacity: 0; }
`;

const Dot = styled.div`
  position: absolute;
  border-radius: 50%;
  animation: ${particleFly} var(--dur) ease-out forwards;
`;

const EmojiPart = styled.div`
  position: absolute;
  animation: ${particleFly} var(--dur) ease-out forwards;
`;

const createExplosion = (x: number, y: number, id: number): Explosion => {
  const count = 15 + Math.floor(Math.random() * 15);
  const particles: Particle[] = Array.from({ length: count }, (_, i) => {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
    const speed = 60 + Math.random() * 140;
    const isEmoji = Math.random() < 0.3;
    return {
      id: i,
      dx: Math.cos(angle) * speed,
      dy: Math.sin(angle) * speed,
      size: isEmoji ? 16 + Math.random() * 16 : 4 + Math.random() * 8,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      type: isEmoji ? "emoji" : "dot",
      emoji: EXPLOSION_EMOJIS[Math.floor(Math.random() * EXPLOSION_EMOJIS.length)],
      duration: isEmoji ? 0.8 + Math.random() * 0.5 : 0.6 + Math.random() * 0.4,
    };
  });
  const emoji = EXPLOSION_EMOJIS[Math.floor(Math.random() * EXPLOSION_EMOJIS.length)];
  return { id, x, y, emoji, particles };
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
      setTimeout(() => {
        setExplosions((prev) => prev.filter((e) => e.id !== id));
      }, 1500);
    };

    const scheduleNext = () => {
      const delay = 1 + Math.random() * 1500;
      return setTimeout(() => {
        spawnRandom();
        timerRef = scheduleNext();
      }, delay);
    };

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
          <FlashCircle style={{ left: explosion.x, top: explosion.y }} />
          <CenterEmoji style={{ left: explosion.x, top: explosion.y }}>
            💥
          </CenterEmoji>
          {explosion.particles.map((p) =>
            p.type === "emoji" ? (
              <EmojiPart
                key={`${explosion.id}-${p.id}`}
                style={{
                  left: explosion.x,
                  top: explosion.y,
                  fontSize: p.size,
                  "--dx": `${p.dx}px`,
                  "--dy": `${p.dy}px`,
                  "--dur": `${p.duration}s`,
                } as React.CSSProperties}
              >
                {p.emoji}
              </EmojiPart>
            ) : (
              <Dot
                key={`${explosion.id}-${p.id}`}
                style={{
                  left: explosion.x,
                  top: explosion.y,
                  width: p.size,
                  height: p.size,
                  background: p.color,
                  boxShadow: `0 0 6px ${p.color}`,
                  "--dx": `${p.dx}px`,
                  "--dy": `${p.dy}px`,
                  "--dur": `${p.duration}s`,
                } as React.CSSProperties}
              />
            )
          )}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Explosions;
