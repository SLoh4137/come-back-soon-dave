import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    overflow-x: hidden;
    background: #0a0a2e;
    color: #fff;
    font-family: "Comic Sans MS", "Comic Sans", "Comic Neue", cursive;
  }
`;

export default GlobalStyles;
