import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#161b22]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/msmahatha" className="text-gray-400 hover:text-[#58a6ff] transition-colors">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/madhusudan-mahatha-373b38229" className="text-gray-400 hover:text-[#58a6ff] transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/msmahatha/" className="text-gray-400 hover:text-[#58a6ff] transition-colors">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="madhusudanmahatha14@gmail.com" className="text-gray-400 hover:text-[#58a6ff] transition-colors">
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}