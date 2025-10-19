import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="p-8">
      <nav className="mb-8 flex gap-4">
        <button
          onClick={() => setCurrentPage('home')}
          className={`px-4 py-2 rounded ${
            currentPage === 'home' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setCurrentPage('about')}
          className={`px-4 py-2 rounded ${
            currentPage === 'about' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          About
        </button>
        <button
          onClick={() => setCurrentPage('contact')}
          className={`px-4 py-2 rounded ${
            currentPage === 'contact' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Contact
        </button>
      </nav>

      <div className="p-6 bg-gray-100 rounded">
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact Page</h1>
      <p>This is the contact page.</p>
    </div>
  );
}
