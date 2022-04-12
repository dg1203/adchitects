import styled from "styled-components";

const HeroContainer = styled.div`
  max-width: 1056px;
  min-height: 664px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    height: auto;
    padding: 16px;
    flex-direction: column;
    min-height: auto;
  }
`;

const HeroText = styled.h1`
  font-weight: 500;
  max-width: 516px;
  margin-right: 24px;
  ${({ theme }) => `
    font-size: ${theme.typography.size.head};
    color: ${theme.typography.color.primary};
    @media (max-width: 768px) {
      font-size: ${theme.typography.size.quote};
      height: auto;
      padding: 16px;
      text-align: center;
    };
  `};
`;

const HeroImg = styled.div<{ image: string | undefined }>`
  width: 516px;
  height: 384px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${({ image }) => `
    background-image: url(${image});
  `};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export { HeroContainer, HeroText, HeroImg };
