import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {data.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">My Expertise</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                I specialize in building and maintaining robust IT infrastructure that scales with business needs. 
                My passion lies in creating secure, efficient systems that empower organizations to focus on their core objectives.
              </p>
              <div className="flex flex-wrap gap-2">
                {data.technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-200 border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {data.stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6 animate-pulse">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Always Learning, Always Growing
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I continuously expand my homelab and skill set to stay at the forefront of emerging technologies, 
            ensuring I can provide cutting-edge solutions for any challenge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;