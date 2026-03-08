// Created by Josh W Comeau: https://www.joshwcomeau.com/react/animated-sparkles-in-react/

import React from "react";
import styled from "styled-components";

import random from "../utils/random";

const range = (start: number, end: number, step = 1) => {
  let output = [];

  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};

// Components
import Sparkle from "./Sparkle";

// Hooks
import useRandomInterval from "../hooks/useRandomInterval";

const Wrapper = styled("span")`
  display: inline-block;
  position: relative;
`;

const ChildWrapper = styled("strong")`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;

const DEFAULT_COLOR = "#FFC700";

const generateSparkle = (color: string) => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(0, 100) + "%",
      left: random(0, 100) + "%",
    },
  };
  return sparkle;
};

type SparklesProps = React.PropsWithChildren<{
  color?: string;
}>;

const Sparkles = ({
  color = DEFAULT_COLOR,
  children,
  ...delegated
}: SparklesProps) => {
  const [sparkles, setSparkles] = React.useState(() => {
    return [0, 1, 2].map(() => generateSparkle(color));
  });
  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color);
      const now = Date.now();
      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });
      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    100,
    450
  );
  return (
    <Wrapper {...delegated}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};

export default Sparkles;
