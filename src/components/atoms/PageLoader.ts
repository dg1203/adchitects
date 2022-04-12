import styled, { keyframes } from "styled-components";
import Logo from "assets/images/logo.svg";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const PageLoader = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(${Logo});
  background-position: center;
  background-repeat: no-repeat;
  animation: 1s ${fadeIn} ease-out infinite;
`;

export { PageLoader };
