import React, { FormEvent, useState } from "react";
import Api from "api";
import { useMutation } from "react-query";
import { NewsletterContainer, NewsletterTitle, NewsletterForm, ResponseMessage } from "components/atoms/Newsletter";
import { Input } from "components/atoms/Input";
import { Button } from "components/atoms/Button";
import {AxiosError} from "axios";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<{ variant: string | null, text: string }>({
    variant: null,
    text: "",
  });
  const { mutate, isLoading } = useMutation(() => Api.sendEmail(email), {
    onSuccess: (response: { data: { message: string } }) => {
      const { data } = response;
      setMessage({
        variant: "success",
        text: data.message,
      });
      setEmail("");
    },
    onError: (error: { response: { data: { message: string } } }) => {
      const { data } = error.response;
      setMessage({
        variant: "error",
        text: data.message,
      });
    }
  })
  const submit = (event: FormEvent) => {
    event.preventDefault();
    mutate();
  }
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
