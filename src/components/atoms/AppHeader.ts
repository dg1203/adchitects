import styled from "styled-components";

const AppHeader = styled.header`
  height: 97px;
  padding: 0 64px;
  ${({theme}) => `
    background-color: ${theme.color.white};
    border-bottom: 1px solid ${theme.color.silver};
  `};
  @media (max-width: 768px) {
    height: auto;
    padding: 16px;
  }
`;

export { AppHeader };
