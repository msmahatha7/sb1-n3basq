import React from 'react';
import { Navigation } from './components/Navigation';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100">
      <Navigation />
      <Stats />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;