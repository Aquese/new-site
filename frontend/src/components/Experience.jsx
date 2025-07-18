import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A track record of delivering exceptional IT solutions across diverse industries
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400 hidden md:block"></div>

          <div className="space-y-12">
            {data.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full hidden md:block transform -translate-x-1/2"></div>
                
                <div className="md:ml-16">
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {experience.title}
                          </h3>
                          <div className="flex items-center gap-2 text-slate-400 mb-2">
                            <Building size={18} />
                            <span className="text-lg font-semibold">{experience.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-full">
                          <Calendar size={18} />
                          <span className="font-medium">{experience.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 leading-relaxed mb-6">
                        {experience.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary" 
                            className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-200 border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;