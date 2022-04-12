import React from "react";
import { ISection } from "types";
import Hero from "./Hero";
import Testimonial from "./Testimonial";
import Newsletter from "./Newsletter";

type IProps = React.FC &
{ Hero: React.FC<ISection> } & { Testimonial: React.FC<ISection> } & { Newsletter: React.FC<ISection> };

const Section: IProps = () => null;

Section.Hero = Hero;
Section.Testimonial = Testimonial;
Section.Newsletter = Newsletter;

export default Section;
