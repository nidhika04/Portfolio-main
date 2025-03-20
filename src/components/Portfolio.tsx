import React, { useState } from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A modern e-commerce platform with intuitive user interface and seamless checkout process.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
      category: 'Development'
    },
    {
      id: 2,
      title: 'Chat Analysis',
      description: 'A clean and modern UI design for analysing chat with focus on user experience.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
      category: 'UI/UX'
    },
    {
      id: 3,
      title: '',
      description: 'A responsive website for a local restaurant with online reservation system.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000',
      category: 'Web Design'
    },
    {
      id: 4,
      title: 'TaskBar Manager',
      description: 'A mobile app for managing Daily tasks with visual data representation.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000',
      category: 'Development'
    },
  ];

  const filters = ['All', 'Web Design', 'UI/UX', 'Development'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Briefcase className="text-blue-600 mr-3" size={28} />
          <h2 className="text-3xl font-bold">My Portfolio</h2>
        </div>

        <div className="flex justify-center mb-12 space-x-4">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-white hover:text-blue-400 transition-colors"
                >
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;