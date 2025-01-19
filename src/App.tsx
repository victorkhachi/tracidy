import React from 'react';
import { Heart, Clock, Shield, Users } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Compassionate Home Care Services for Your Loved Ones
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Providing compassionate and reliable home health care services to help maintain independence and quality of life.
              </p>
              <Link
                to="/contact"
                className="mt-8 bg-rose-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-700 transition-colors inline-flex items-center"
              >
                Contact Us
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
                alt="Caring nurse with patient"
                className="rounded-lg shadow-lg image-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Clock className="h-12 w-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Care</h3>
              <p className="text-gray-600">Round-the-clock support and assistance for your loved ones.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personal Care</h3>
              <p className="text-gray-600">Assistance with daily activities and personal hygiene.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Skilled Nursing</h3>
              <p className="text-gray-600">Professional medical care from licensed nurses.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white shadow-sm fixed w-full z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <Heart className="h-8 w-8 text-rose-600" />
                  <span className="ml-2 text-xl font-semibold text-gray-900">TracidyHomeCare</span>
                </Link>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-700 hover:text-rose-600">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-rose-600">About</Link>
                <a href="#services" className="text-gray-700 hover:text-rose-600">Services</a>
                <Link to="/contact" className="text-gray-700 hover:text-rose-600">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-rose-500" />
                <span className="ml-2 text-xl font-semibold">TracidyHomeCare</span>
              </div>
              <div className="text-gray-400">
                © 2024 TracidyHomeCare. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;