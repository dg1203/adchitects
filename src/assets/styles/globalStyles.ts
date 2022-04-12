import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-family: Inter, sans-serif;
  }
  body {
    margin: 0;
  }
`;

export default GlobalStyle;
