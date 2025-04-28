
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-getwell-navy">
              GoGetWell<span className="text-getwell-teal">.ai</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-getwell-darkGray hover:text-getwell-navy transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-getwell-darkGray hover:text-getwell-navy transition-colors">
            How it Works
          </a>
          <a href="#testimonials" className="text-getwell-darkGray hover:text-getwell-navy transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-getwell-darkGray hover:text-getwell-navy transition-colors">
            Pricing
          </a>
          <Button variant="outline" className="border-getwell-teal text-getwell-teal hover:bg-getwell-teal hover:text-white">
            Log in
          </Button>
          <Button className="bg-getwell-teal hover:bg-getwell-navy text-white">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-getwell-navy focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-getwell-darkGray hover:text-getwell-navy transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-getwell-darkGray hover:text-getwell-navy transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </a>
            <a 
              href="#testimonials" 
              className="text-getwell-darkGray hover:text-getwell-navy transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-getwell-darkGray hover:text-getwell-navy transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="border-getwell-teal text-getwell-teal hover:bg-getwell-teal hover:text-white w-full">
                Log in
              </Button>
              <Button className="bg-getwell-teal hover:bg-getwell-navy text-white w-full">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
