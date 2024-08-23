import React from 'react';
import { SiPython, SiJavascript, SiTypescript } from '@icons-pack/react-simple-icons';

export default function Future() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Favorite Languages</h1>
      <p className="text-lg text-gray-600">This is the introduction page for my favorite programming languages.</p>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <div className="w-64 h-64 bg-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-lg hover:shadow-white hover:scale-110 transition-transform duration-500 ease-in-out hover:bg-blue-500 hover:bg-opacity-50">
          <SiPython className="text-6xl text-gray-600" />
          <p className="text-lg font-semibold font-mono">Python</p>
        </div>
        <div className="w-64 h-64 bg-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-lg hover:shadow-white hover:scale-110 transition-transform duration-500 ease-in-out hover:bg-yellow-500 hover:bg-opacity-50">
          <SiJavascript className="text-6xl text-gray-600" />
          <p className="text-lg font-semibold font-mono">JavaScript</p>
        </div>
        <div className="w-64 h-64 bg-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-lg hover:shadow-white hover:scale-110 transition-transform duration-500 ease-in-out hover:bg-blue-700 hover:bg-opacity-50">
          <SiTypescript className="text-6xl text-gray-600" />
          <p className="text-lg font-semibold font-mono">TypeScript</p>
        </div>
      </div>
    </div>
  );
}
