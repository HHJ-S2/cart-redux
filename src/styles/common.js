import { css } from "styled-components";

const color = {
  pryColor: "tomato",
};

const pryBtn = css`
  padding: 5px 10px;
  background: #111;
  border: none;
  border-radius: 3px;
  letter-spacing: 0.08em;
  color: #fff;
`;

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

const ContentHeader = css`
  margin: 0 0 30px;
  padding: 0 0 15px;
  border-bottom: 2px solid #111;
  font-size: 30px;
  font-weight: 600;
`;

const theme = {
  color,
  pryBtn,
  container,
  flexCenter,
  positionCenter,
  ContentHeader,
};

export default theme;
