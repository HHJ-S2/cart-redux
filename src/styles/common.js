import { css } from "styled-components";

const color = {
  pryColor: "tomato",
};

const container = css`
  width: 1170px;
  margin: 0 auto;
  @media (max-width: 770px) {
    width: 100%;
  }
`;

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const positionCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const theme = {
  color,
  container,
  flexCenter,
  positionCenter,
};

export default theme;
