import React from "react";
import { ISection } from "types";
import { ReactComponent as QuoteMark } from "assets/images/quotation-mark.svg";
import { TestimonialContainer, QuoteContainer, QuoteText, QuoteAuthor } from "components/atoms/Testimonial";

const Testimonial:React.FC<ISection> = ({ text, author }) => (
  <TestimonialContainer>
    <QuoteContainer>
      <QuoteMark />
      <QuoteText>{text}</QuoteText>
      <QuoteAuthor>{author}</QuoteAuthor>
    </QuoteContainer>
  </TestimonialContainer>
);

export default Testimonial;
