import styled from "styled-components";

const NewsletterContainer = styled.div`
  padding: 128px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const NewsletterTitle = styled.div`
  line-height: 56px;
  ${({ theme }) => `
    font-size: ${theme.typography.size.head2};
    color: ${theme.typography.color.primary};
    @media (max-width: 768px) {
      font-size: ${theme.typography.size.regular};
    };
  `};
`;

const NewsletterForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 64px;
  margin-bottom: 48px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 32px;
  }
`;

const ResponseMessage = styled.div<{ variant: string | null }>`
  ${({ theme, variant }) => `
    font-size: ${theme.typography.size.small};
    color: ${variant === "success" ? theme.typography.color.success : theme.typography.color.error};
  `};
`;

export { NewsletterContainer, NewsletterTitle, NewsletterForm, ResponseMessage };
