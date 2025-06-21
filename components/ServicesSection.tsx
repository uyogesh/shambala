
import React from 'react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  id: string;
  services: ServiceItem[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ id, services }) => {
  return (
    <section id={id} className="py-20 md:py-32 bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-base text-sky-400 font-semibold tracking-wide uppercase">Our Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-50 sm:text-4xl" style={{fontFamily: "'Playfair Display', serif"}}>
            Services We Offer
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-300 mx-auto">
            We provide a comprehensive suite of software development services, focusing on Web Development, AI Workflow automation, Agentic Solutions, and everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-slate-800 rounded-2xl p-8 flex flex-col items-start 
                         shadow-xl shadow-slate-950/30 hover:shadow-purple-600/20
                         transition-all duration-300 ease-in-out transform hover:-translate-y-2 group
                         relative overflow-hidden border border-slate-700 hover:border-transparent"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-purple-600/20 to-pink-600/20 blur-xl"></div>
                <div className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-2xl bg-gradient-to-r from-sky-500 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 animate-pulse-slow"></div>
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex-shrink-0 mb-6">
                  <div className={`flex items-center justify-center h-20 w-20 rounded-full
                                 bg-gradient-to-br from-sky-500/20 via-purple-600/20 to-pink-500/20 
                                 group-hover:from-sky-500/30 group-hover:via-purple-600/30 group-hover:to-pink-500/30
                                 transition-all duration-300`}>
                    {service.icon && React.cloneElement(service.icon, { 
                      className: `w-10 h-10 ${service.icon.props.className.replace(/text-\w+-\d+/, '')} text-slate-100 group-hover:scale-110 transition-transform duration-300`
                    })}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-slate-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 leading-relaxed text-base flex-grow transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;