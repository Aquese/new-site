import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Calendar } from "lucide-react";

const Certifications = ({ data }) => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Professional Certifications
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Industry-recognized credentials that validate my expertise and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((cert, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 animate-pulse">
                  {cert.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-slate-300 text-lg mb-4">
                  {cert.fullName}
                </p>
                <div className="flex items-center justify-center gap-2 text-slate-400 mb-4">
                  <Award size={18} />
                  <span className="font-medium">{cert.issuer}</span>
                </div>
                <Badge 
                  variant="secondary" 
                  className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-200 border-cyan-400/30"
                >
                  <Calendar size={14} className="mr-2" />
                  {cert.year}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6 animate-pulse">
            <Award size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Continuous Learning
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I maintain all certifications through ongoing education and hands-on experience, 
            ensuring my skills remain current with industry best practices and emerging technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;