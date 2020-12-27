import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    text-decoration: none;
    box-sizing: border-box;
  }

  body{
    font-size: 16px;
    font-family: 'notokr',  "NanumGothic", "나눔고딕", 'NanumBarunGothic', 'Apple SD Neo Gothic', 'Malgun Gothic', 'Gulim', sans-serif; 
    line-height: 1.4;
  }
  
  a, button, input {
    outline: none;
    cursor: pointer;
  }
`;
