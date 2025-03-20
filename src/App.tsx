import React, { useState } from 'react';
import { Menu, Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, Phone, MapPin } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;