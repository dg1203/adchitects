import styled from "styled-components";

const Input = styled.input`
  min-width: 416px;
  border-radius: 24px;
  height: 48px;
  padding: 14px 32px;
  border: none;
  outline: none;
  transition: .2s;
  margin-right: 16px;
  ${({ theme }) => `
    background-color: ${theme.color.silver};
    color: ${theme.color.primary};
    &:focus {
      box-shadow: 0px 0px 24px 0px ${theme.color.silver};
    }
    &::placeholder {
      color: ${theme.color.primary};
    }
    &:-ms-input-placeholder {
      color: ${theme.color.primary};
    }
    &::-ms-input-placeholder {
      color: ${theme.color.primary};
    }
  `};
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 16px;
    width: 100%;
    min-width: 100%;
  }
`;

export { Input };
