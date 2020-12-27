import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    text-decoration: none;
    box-sizing: border-box;
  }
  
  a, button, input {
    outline: none;
    cursor: pointer;
  }
`;
