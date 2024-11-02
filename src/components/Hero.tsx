import React from 'react';
import TypewriterComponent from 'typewriter-effect';

export function Hero() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-4xl md:text-6xl font-bold mb-6 text-[#58a6ff]">
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
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl">
          AI/ML Developer specializing in deep learning, computer vision, and web development.
          Building intelligent solutions that bridge the gap between cutting-edge research and practical applications.
        </p>
      </div>
    </section>
  );
}