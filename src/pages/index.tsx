import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import FloatingEmojis from "../components/FloatingEmojis";
import MarqueeText from "../components/MarqueeText";
import HeroSection from "../components/HeroSection";
import CountUpTimer from "../components/CountUpTimer";
import SadGoldenGate from "../components/SadGoldenGate";
import FarewellMessages from "../components/FarewellMessages";
import BeggingButton from "../components/BeggingButton";
import MemorialWall from "../components/MemorialWall";
import FinalPlea from "../components/FinalPlea";
import FakeMusicPlayer from "../components/FakeMusicPlayer";
import GlobalStyles from "../components/GlobalStyles";
import Explosions from "../components/Explosions";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GlobalStyles />
      <FloatingEmojis />
      <Explosions />
      <FakeMusicPlayer />

      <MarqueeText
        text="🚨 BREAKING NEWS: DAVID HSU IS LEAVING THE BAY. THIS IS NOT A DRILL. 🚨 REPEAT: DAVE IS LEAVING. 🚨 PLEASE SEND HELP. 🚨"
        speed={20}
      />

      <HeroSection />

      <MarqueeText
        text="💔 COME BACK DAVE 💔 WE MISS YOU 💔 COME BACK DAVE 💔 WE MISS YOU 💔 COME BACK DAVE 💔 WE MISS YOU 💔 COME BACK DAVE 💔"
        speed={12}
        bgColor="#1a0a3e"
        textColor="#ff69b4"
        fontSize="1.2rem"
      />

      <CountUpTimer />
      <SadGoldenGate />
      <FarewellMessages />

      <MarqueeText
        text="⚠️ AMBER ALERT: MISSING FRIEND — DAVID HSU, LAST SEEN IN SF, APPROXIMATELY 1 DAVE TALL, RESPONDS TO 'DAVE', 'DAVID', AND 'HEY YOU' ⚠️"
        speed={25}
        bgColor="#ff6b00"
        textColor="#fff"
        fontSize="1rem"
      />

      <BeggingButton />
      <MemorialWall />
      <FinalPlea />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Come Back Soon, Dave! 😭🌉</title>
    <link rel="icon" href="/favicon.ico" sizes="16x16" type="image/x-icon" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta
      name="description"
      content="An extremely emotional and totally professional farewell page for David Hsu leaving SF"
    />
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap');
    `}</style>
  </>
);
