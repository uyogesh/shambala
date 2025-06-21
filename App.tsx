
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ServiceItem, TestimonialItem } from './types';

const App: React.FC = () => {
  const navLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const servicesData: ServiceItem[] = [
    {
      id: 'webdev',
      title: 'Web Development',
      description: 'Crafting responsive, high-performance websites and web applications tailored to your business needs. From sleek front-ends to robust back-ends, we cover the full stack.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-sky-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
    },
    {
      id: 'aiworkflow',
      title: 'AI Workflow Automation',
      description: 'Streamlining your operations with intelligent AI-powered workflows. We design and implement custom AI solutions to boost efficiency and drive innovation.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.875 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.125 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L18 14.25l-.25-2.25a3.375 3.375 0 00-2.437-2.438L12.75 9l2.25-.25a3.375 3.375 0 002.437-2.438L18 3.75l.25 2.25a3.375 3.375 0 002.437 2.438L23.25 9l-2.25.25a3.375 3.375 0 00-2.437 2.438z" />
        </svg>
      ),
    },
    {
      id: 'agentic',
      title: 'Agentic Solutions',
      description: 'Developing sophisticated AI agents and LLM-powered applications that can reason, learn, and act autonomously to solve complex problems and enhance user experiences.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-pink-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0110.5 3h6a2.25 2.25 0 012.25 2.25v13.5A2.25 2.25 0 0116.5 21h-6a2.25 2.25 0 01-2.25-2.25V15m-3 0h3m0 0v3m0-3V9m0 0H6V5.25a2.25 2.25 0 012.25-2.25h3M3 7.5h.008v.008H3V7.5zm0 3h.008v.008H3v-.008zm0 3h.008v.008H3v-.008z" />
        </svg>
      ),
    },
    {
      id: 'consulting',
      title: 'Comprehensive Consulting',
      description: 'Providing expert guidance and strategic insights for "everything in between" – from initial concept and architecture to deployment and scaling your software solutions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-teal-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
  ];

  const testimonialsData: TestimonialItem[] = [
    {
      id: 't1',
      quote: "Shambala LLC transformed our online presence with a stunning website and streamlined our processes with their AI expertise. Highly recommended!",
      author: 'Jane Doe',
      company: 'Innovatech Solutions',
      avatar: 'https://picsum.photos/seed/jane/100/100'
    },
    {
      id: 't2',
      quote: "The agentic solution they developed for us has been a game-changer. Their team is knowledgeable, responsive, and truly understood our vision.",
      author: 'John Smith',
      company: 'Future Forward Inc.',
      avatar: 'https://picsum.photos/seed/john/100/100'
    },
    {
      id: 't3',
      quote: "From initial consultation to final delivery, Shambala LLC exceeded our expectations. Their technical skills and strategic insights are top-notch.",
      author: 'Alice Brown',
      company: 'Synergy Corp',
      avatar: 'https://picsum.photos/seed/alice/100/100'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Navbar navLinks={navLinks} companyName="Shambala LLC" />
      <main className="flex-grow">
        <HeroSection id="hero" />
        <AboutSection id="about" />
        <ServicesSection id="services" services={servicesData} />
        <TestimonialsSection id="testimonials" testimonials={testimonialsData} />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default App;