
import { Clock, Facebook, Instagram, Shield, Users } from 'lucide-react';

import React, { useState } from 'react';
import { Heart, Menu } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import { MobileNav } from './components/MobileNav';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        boxSizing: "border-box",
        position: "relative",
        width: "100%"
}} className="pt-24 pb-12 pxS-4 sm:px-5 lg:px-8 bg-gradient-to-br from-rose-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div style={{position:"relative", height:"400px"}} className="grid md:grid-cols-2 gap-12 items-center">
            <div style={{position:'relative',zIndex:"9"}} className='pl-4'>
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-900 leading-tight">
                Compassionate Home Care Services for Your Loved Ones
              </h1>
              <p style={{textShadow:"0 0 white"}} className="mt-8 text-lg text-gray-900">
                Providing compassionate and reliable home health care services to help maintain independence and quality of life.
              </p>
              <Link
                to="/contact"
                className="mt-8 bg-rose-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-700 transition-colors inline-flex items-center"
              >
                Contact Us
              </Link>
            </div>
            <div style={{width:"100%",position:"absolute",height:"100%",left:"0"}}>
              <img
                style={{width:"100%",height:"100%"}}
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
                alt="Caring nurse with patient"
                className="rounded-lg shadow-lg image-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 pr-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-12">Our Services</h2>
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                  <span className="ml-2 text-xl font-semibold text-red-900">Tracidy Home Care</span>
                </Link>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-700 hover:text-rose-600">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-rose-600">About</Link>
                <a href="#services" className="text-gray-700 hover:text-rose-600">Services</a>
                <Link to="/contact" className="text-gray-700 hover:text-rose-600">Contact</Link>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <MobileNav
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between md:justify-center flex-wrap gap-4">
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-rose-500" />
                <span className="ml-2 text-xl font-semibold">Tracidy Home Care</span>
              </div>
              <div className="text-gray-400">
                © 2024 Tracidy Home Care. All rights reserved.
              </div>
              
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/tracidyhomecare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rose-100 p-3 rounded-full hover:bg-rose-200 transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-rose-600" />
                  </a>
                  <a
                    href="https://instagram.com/tracidyhomecare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rose-100 p-3 rounded-full hover:bg-rose-200 transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-rose-600" />
                  </a>
                </div>
          
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;