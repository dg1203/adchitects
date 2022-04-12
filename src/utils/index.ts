import Section from "components/organisms/Section";
import React from "react";

const getNavigationLabel = (url: string): string => {
  let label = url.substring(1);
  return label !== "" ? label : "Home";
}

const Sections: {[key: string]: React.ElementType} = {
  hero: Section.Hero,
  testimonial: Section.Testimonial,
  newsletter: Section.Newsletter,
};

export { getNavigationLabel, Sections };
