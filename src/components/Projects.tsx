import React from 'react';

const projects = [
  {
      title: 'Teachers periodic Attendence system ',
      description: 'Using computer vision udating the attendence of teachers in every period ',
      tags: ['Python', 'OpenCv', 'React', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
    },
  {
    title: 'Computer Vision API',
    description: 'REST API for real-time object detection',
    tags: ['TensorFlow', 'FastAPI', 'Docker'],
    image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66'
  },
{
      title: 'Ground Water level Predictor',
      description: 'Deep learning model for predicting ground water level through historical data ',
      tags: ['Python', 'PyTorch', 'React', 'AWS'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
    }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#21262d] rounded-lg overflow-hidden border border-gray-800 hover:border-[#58a6ff] transition-all transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#30363d] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}