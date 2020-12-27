import { css } from "styled-components";

const color = {
  pryColor: "orange",
};

const container = css`
  width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  @media (max-width: 770px) {
    width: 100%;
  }
`;

const theme = {
  color,
  container,
};

export default theme;
