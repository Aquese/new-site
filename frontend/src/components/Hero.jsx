import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronDown, MapPin, Mail, Phone } from "lucide-react";

const Hero = ({ data }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["System Administrator", "DevOps Engineer", "Security Specialist", "Infrastructure Expert"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent animate-fade-in">
            {data.name}
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6 h-12 flex items-center justify-center">
            <span className="mr-2">I'm a</span>
            <span className="text-cyan-400 transition-all duration-500 transform">
              {roles[currentRole]}
            </span>
          </div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            {data.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Let's Work Together
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("about")}
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-400 mb-12">
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-cyan-400" />
            <span>{data.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={20} className="text-cyan-400" />
            <span>{data.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} className="text-cyan-400" />
            <span>{data.phone}</span>
          </div>
        </div>

        <div className="animate-bounce">
          <ChevronDown 
            size={32} 
            className="text-cyan-400 cursor-pointer hover:text-cyan-300 transition-colors"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;