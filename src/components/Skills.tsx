import React from 'react';
import { Code2 } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Development',
      skills: [
        { name: 'HTML/CSS', percentage: 95 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'React/Next', percentage: 80 },
        { name: 'Node.js', percentage: 75 },
      ],
    },
    {
      title: 'Other',
      skills: [
        { name: 'Project Management', percentage: 80 },
        { name: 'Linux', percentage: 60 },
        { name: 'Google Cloud', percentage: 85 },
        { name: 'Git', percentage: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Code2 className="text-blue-600 mr-3" size={28} />
          <h2 className="text-3xl font-bold">My Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-500"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;