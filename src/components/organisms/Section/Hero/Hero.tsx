import React from "react";
import { ISection } from "types";
import { HeroContainer, HeroText, HeroImg } from "components/atoms/Hero";

const Hero: React.FC<ISection> = ({ text, img }) => (
  <HeroContainer>
    <HeroText>{text}</HeroText>
    <HeroImg image={img} />
  </HeroContainer>
)

export default Hero;
