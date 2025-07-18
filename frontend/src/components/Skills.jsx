import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";

const Skills = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive expertise across modern infrastructure and security technologies
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {data.categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.categories[activeCategory].skills.map((skill, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h3>
                  <Badge variant="secondary" className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-200 border-cyan-400/30">
                    {skill.level}%
                  </Badge>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-2 bg-slate-700"
                />
                <style jsx>{`
                  .progress-bar {
                    background: linear-gradient(90deg, #06b6d4, #8b5cf6);
                  }
                `}</style>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Infrastructure Design",
              "Security Implementation",
              "Cloud Architecture",
              "Automation & Scripting",
              "Performance Optimization",
              "Disaster Recovery",
              "Compliance & Governance",
              "Team Leadership"
            ].map((competency, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <span className="text-slate-300 font-medium">{competency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;