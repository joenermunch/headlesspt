import React from "react";
import Projects from "../components/Projects/Projects";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Timeline from "../components/Timeline/Timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Timeline />
    </>
  );
}
