
import React from 'react';

interface AboutSectionProps {
  id: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 md:py-32 bg-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-sky-400 font-semibold tracking-wide uppercase">Our Story</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-50 sm:text-4xl" style={{fontFamily: "'Playfair Display', serif"}}>
            About Shambala LLC
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-300 lg:mx-auto">
            Shambala LLC is an Ohio-based, Wyoming registered Limited Liability Company passionate about leveraging technology to solve complex problems and drive business growth.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-100">Our Mission</h3>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  To empower businesses with innovative and reliable software solutions, specializing in bespoke web development, intelligent AI workflow automation, and transformative agentic systems. We are committed to delivering excellence and fostering long-term partnerships.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-100">Our Vision</h3>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  To be a leading force in the digital transformation landscape, recognized for our cutting-edge expertise, client-centric approach, and our dedication to pushing the boundaries of what's possible with technology.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img 
                className="rounded-xl shadow-2xl shadow-sky-900/40 object-cover h-80 w-full md:h-96 border-2 border-slate-700" 
                src="https://picsum.photos/seed/teamwork/600/400?grayscale&blur=1" 
                alt="Shambala Team Collaboration" 
              />
            </div>
          </div>
        </div>
         <div className="mt-24 text-center">
            <h3 className="text-2xl font-semibold text-slate-100 mb-12">Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Innovation', description: 'Constantly exploring new technologies to deliver creative solutions.'},
                { title: 'Integrity', description: 'Operating with transparency, honesty, and ethical practices.' },
                { title: 'Collaboration', description: 'Working closely with clients to achieve shared goals.'},
                { title: 'Excellence', description: 'Striving for the highest quality in everything we do.'}
              ].map(value => (
                <div key={value.title} className="bg-slate-700/70 p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group transform hover:-translate-y-1">
                  <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400 group-hover:from-sky-300 group-hover:to-purple-300 mb-2 transition-colors">{value.title}</h4>
                  <p className="text-slate-400 group-hover:text-slate-300 text-sm transition-colors">{value.description}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;