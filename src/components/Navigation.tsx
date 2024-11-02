import React from 'react';
import { Code2 } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed w-full bg-[#161b22] border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Code2 className="w-8 h-8 text-[#58a6ff]" />
          <div className="flex space-x-4">
            <a href="#about" className="hover:text-[#58a6ff] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#58a6ff] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#58a6ff] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}