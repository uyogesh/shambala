
import React, { useState } from 'react';

interface ContactSectionProps {
  id: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); 
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id={id} className="py-20 md:py-32 bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-base text-sky-400 font-semibold tracking-wide uppercase">Get In Touch</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-50 sm:text-4xl" style={{fontFamily: "'Playfair Display', serif"}}>
            Let's Build Something Amazing Together
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-300 mx-auto">
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-slate-800 p-8 rounded-xl shadow-2xl shadow-slate-950/50">
            <h3 className="text-2xl font-semibold text-slate-100 mb-6">Send Us a Message</h3>
            {isSubmitted && (
              <div className="mb-4 p-4 bg-green-500/20 text-green-300 border border-green-500/30 rounded-md">
                Thank you for your message! We'll be in touch soon. (This is a demo, no email was sent.)
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg shadow-sm placeholder-slate-400 
                             focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-slate-100
                             transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg shadow-sm placeholder-slate-400 
                             focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-slate-100
                             transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg shadow-sm placeholder-slate-400 
                             focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-slate-100
                             transition-all"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white 
                             bg-gradient-to-r from-sky-500 via-purple-600 to-pink-600
                             hover:from-sky-600 hover:via-purple-700 hover:to-pink-700
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-purple-500
                             transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8 text-slate-300">
            <div className="bg-slate-800 p-8 rounded-xl shadow-2xl shadow-slate-950/50">
              <h3 className="text-2xl font-semibold text-slate-100 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Email: <a href="mailto:contact@shambalallc.dev" className="ml-1 text-sky-400 hover:text-sky-300 transition-colors">contact@shambalallc.dev</a>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Location: Ohio-based (Wyoming Registered LLC)
                </p>
                 <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-pink-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.75 3.5a.75.75 0 00-1.5 0V4h-2.5a.75.75 0 000 1.5h.055a3.251 3.251 0 000 6.39.75.75 0 000 1.5H6.75A.75.75 0 006 14v.5H3.75a.75.75 0 000 1.5h2.25V16a.75.75 0 001.5 0v-.5h2.5a.75.75 0 000-1.5h-.055a3.251 3.251 0 000-6.39.75.75 0 000-1.5H13.25a.75.75 0 00.75-.75V4h-.5a.75.75 0 00-.75-.75zM10 8.25a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM4.75 12h-.001a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zm8.5 0h.001a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5z" />
                  </svg>
                  Connect: <a href="https://linkedin.com/company/shambala-llc-placeholder" target="_blank" rel="noopener noreferrer" className="ml-1 text-pink-400 hover:text-pink-300 transition-colors">LinkedIn (Placeholder)</a>
                </p>
              </div>
            </div>
             <div className="bg-slate-800 p-8 rounded-xl shadow-2xl shadow-slate-950/50">
                <h3 className="text-2xl font-semibold text-slate-100 mb-4">Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
                <p>Saturday - Sunday: By Appointment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;