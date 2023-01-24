import React from "react";
import Projects from "../components/Projects/Projects";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Timeline from "../components/Timeline/Timeline";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Learning React Helmet!</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <Hero />

      <About />
      <Projects />
      <Timeline />
    </>
  );
}
