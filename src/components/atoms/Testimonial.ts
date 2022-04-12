import styled from "styled-components";

const TestimonialContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  ${({ theme }) => `
    background-color: ${theme.color.dark};
  `};
`;

const QuoteContainer = styled.div`
  max-width: 1056px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 128px auto;
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const QuoteText = styled.blockquote`
  margin-top: 68px;
  margin-left: 0;
  margin-right: 0;
  line-height: 40px;
  text-align: left;
  ${({ theme }) => `
    color: ${theme.typography.color.quote};
    font-size: ${theme.typography.size.quote};
    font-weight: 400;
    @media (max-width: 768px) {
      font-size: ${theme.typography.size.regular};
    };
  `};
`;

const QuoteAuthor = styled.div`
  margin-top: 96px;
  line-height: 29px;
  ${({ theme }) => `
    color: ${theme.typography.color.secondary};
    font-size: ${theme.typography.size.quote};
    font-weight: 400;
    @media (max-width: 768px) {
      font-size: ${theme.typography.size.regular};
    };
  `};
`;

export { TestimonialContainer, QuoteContainer, QuoteText, QuoteAuthor };

