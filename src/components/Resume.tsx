import React from 'react';

const Resume = () => {
  const resumePath = "/path-to-your-resume.pdf"; // Provide the path to your resume file here

  return (
    <section id="resume" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Resume</h2>
      <a
        href={resumePath}
        download
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors transform hover:-translate-y-1"
      >
        View and Download Resume
      </a>
    </section>
  );
};

export default Resume;