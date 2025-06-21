
import React from 'react';
import { TestimonialItem } from '../types';

interface TestimonialsSectionProps {
  id: string;
  testimonials: TestimonialItem[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ id, testimonials }) => {
  return (
    <section id={id} className="py-20 md:py-32 bg-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-base text-sky-400 font-semibold tracking-wide uppercase">Client Feedback</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-50 sm:text-4xl" style={{fontFamily: "'Playfair Display', serif"}}>
            What Our Clients Say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-slate-700/70 p-8 rounded-xl shadow-xl shadow-slate-900/40 flex flex-col 
                         transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/30
                         border border-slate-600 hover:border-purple-500/50"
            >
              {testimonial.avatar && (
                <img src={testimonial.avatar} alt={testimonial.author} className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-slate-600 group-hover:border-purple-500 transition-colors"/>
              )}
              <blockquote className="text-slate-300 italic text-center text-lg mb-6 flex-grow relative">
                <span className="absolute -top-3 -left-1 text-5xl text-sky-500 opacity-50 font-serif">“</span>
                {testimonial.quote}
                <span className="absolute -bottom-3 -right-1 text-5xl text-sky-500 opacity-50 font-serif">”</span>
              </blockquote>
              <div className="text-center mt-auto pt-4 border-t border-slate-600/50">
                <p className="font-semibold text-slate-100 text-md">{testimonial.author}</p>
                {testimonial.company && <p className="text-sky-400 text-sm">{testimonial.company}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;