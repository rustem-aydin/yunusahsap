import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";
import { Component } from "@/components/marquee-caarrd";
import React from "react";
const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai",
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech",
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.",
  },
];
const About = () => {
  return (
    <div>
      <Component />
    </div>
  );
};

export default About;
