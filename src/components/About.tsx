import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <User className="text-blue-600 mr-3" size={28} />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 mb-8 md:mb-0">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hello! I'm Nidhika, a passionate web developer and UI/UX designer creating beautiful, functional websites and applications. I specialize in creating user-centered designs that not only look great but also provide an intuitive and engaging user experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With a background in both design and development, I bring a unique perspective to every project. I believe that great design is not just about aesthetics, but also about solving problems and creating meaningful experiences for users.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              When I'm not coding or designing, you can find me hiking, reading science fiction novels, or experimenting with new recipes in the kitchen.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors transform hover:-translate-y-1"
            >
              Let's Connect
            </a>
          </div>
          <div className="md:w-2/5 md:pl-12">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
              alt="About Nidhika"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;