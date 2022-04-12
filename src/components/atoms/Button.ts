import styled from "styled-components";

const Button = styled.button`
  padding: 12px 54px;
  border-radius: 24px;
  border: none;
  height: 48px;
  cursor: pointer;
  transition: .2s;
  outline: none;
  min-width: 192px;
  ${({ theme }) => `
    background-color: ${theme.color.purple};
    color: ${theme.typography.color.primary};
    font-size: ${theme.typography.size.regular};
    &:hover {
      box-shadow: 0px 0px 24px 0px ${theme.color.purple};
    }
    &:disabled {
      opacity: .4;
    }
  `};
`;

export { Button };
