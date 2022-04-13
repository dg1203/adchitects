import React from "react";
import { NewsletterContainer, NewsletterTitle, NewsletterForm, ResponseMessage } from "components/atoms/Newsletter";
import { Input } from "components/atoms/Input";
import { Button } from "components/atoms/Button";
import useNewsletter from "./useNewsletter";

const Newsletter: React.FC = () => {
  const { message, email, setEmail, submit, isLoading } = useNewsletter();
  return (
    <NewsletterContainer>
      <NewsletterTitle>
        Sign up for Newsletter
      </NewsletterTitle>
      <NewsletterForm onSubmit={submit}>
        <Input
          type="email"
          placeholder="Type your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button type="submit" disabled={isLoading}>Submit</Button>
      </NewsletterForm>
      <ResponseMessage variant={message.variant}>
        {
          message.variant && message.text
        }
      </ResponseMessage>
    </NewsletterContainer>
  )
};

export default Newsletter;
