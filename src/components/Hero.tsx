import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-blue-900 text-white pt-16">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Hi, I'm Nidhika Chaudhary</h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              Web Developer & UI/UX Designer based in Mathura
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mb-8">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <a
              href="#portfolio"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors transform hover:-translate-y-1"
            >
              View My Work
            </a>
          </div>
          <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/premium-photo/free-vector-shy-girl-character_1077802-26470.jpg" // Ensure the image is placed in 'public/images/' folder
              alt="Nidhika Chaudhary"
              className="w-64 h-64 rounded-full border-4 border-blue-500 object-cover"
            />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
