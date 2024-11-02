import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import TypewriterComponent from 'typewriter-effect';

const skills = [
  { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Computer Vision', 'NLP'] },
  { category: 'Web Dev', items: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'Next.js'] },
  { category: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Git'] },
];

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, url: 'https://github.com/msmahatha', label: 'GitHub' },
  { icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/madhusudan-mahatha-373b38229', label: 'LinkedIn' },
  { icon: <Mail className="w-5 h-5" />, url: 'madhusudanmahatha14@gmail.com', label: 'Email' },
  { icon: <Instagram className="w-5 h-5" />, url: 'https://www.instagram.com/msmahatha/', label: 'Instagram' },
];

export function Stats() {
  return (
    <section className="pt-24 pb-12 bg-[#161b22]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-[#21262d] rounded-lg p-6 border border-gray-800">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.ibb.co/9TNdQGt/Whats-App-Image-2024-07-20-at-15-14-35-1.jpg"
                  alt="Profile"
                  className="w-32 h-32 rounded-full mb-4 border-2 border-[#58a6ff]"
                />
                <h2 className="text-2xl font-bold mb-2">Madhusudan MAhatha</h2>
                <p className="text-gray-400 text-center mb-4">(AIML & Full Stack)Developer</p>
                
                {/* Social Links */}
                <div className="flex space-x-4 mb-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="text-gray-400 hover:text-[#58a6ff] transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>

                <div className="w-full border-t border-gray-800 pt-4">
                  <p className="text-sm text-gray-400">
                    📍 Kolkata, IND
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="bg-[#21262d] rounded-lg p-6 border border-gray-800">
              <div className="text-3xl md:text-4xl font-bold mb-6 text-[#58a6ff]">
                <TypewriterComponent
                  options={{
                    strings: [
                      'Hello World! 👋',
                      'I build AI solutions 🤖',
                      'I create web apps 💻',
                      'I solve problems 🎯'
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="text-lg md:text-xl text-gray-400">
                AI/ML Developer specializing in deep learning, computer vision, and web development.
                Building intelligent solutions that bridge the gap between cutting-edge research and practical applications.
              </p>
            </div>

            {/* Technical Expertise */}
            <div className="bg-[#21262d] rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-bold mb-6">Technical Expertise</h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-[#58a6ff] font-semibold mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-[#30363d] rounded-full text-sm hover:bg-[#3d444c] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}