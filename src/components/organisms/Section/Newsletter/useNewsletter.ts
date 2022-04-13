import Api from "api";
import { useMutation } from "react-query";
import {FormEvent, useState} from "react";

const useNewsletter = () => {
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

  return {
    message,
    email,
    setEmail,
    isLoading,
    submit,
  }
}

export default useNewsletter;
