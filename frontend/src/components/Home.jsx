import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Contact from "./Contact";
import { mockData } from "../utils/mockData";

const Home = () => {
  const [data, setData] = useState(mockData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-xl font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <Hero data={data.hero} />
      <About data={data.about} />
      <Experience data={data.experience} />
      <Skills data={data.skills} />
      <Certifications data={data.certifications} />
      <Projects data={data.projects} />
      <Contact data={data.contact} />
    </div>
  );
};

export default Home;