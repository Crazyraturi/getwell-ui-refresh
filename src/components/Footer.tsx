
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-getwell-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              GoGetWell<span className="text-getwell-teal">.ai</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Making healthcare accessible, personalized, and efficient with AI technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-getwell-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-getwell-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-getwell-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-getwell-teal transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-getwell-teal transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-getwell-teal transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-getwell-teal transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-getwell-teal transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-getwell-teal transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-getwell-teal transition-colors">Health Library</a></li>
              <li><a href="#" className="text-gray-300 hover:text-getwell-teal transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-getwell-teal transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-getwell-teal transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-getwell-teal transition-colors">HIPAA Compliance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest health tips and updates.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Email address" 
                className="bg-getwell-navy-800 border-gray-700 text-white placeholder:text-gray-400 focus-visible:ring-getwell-teal"
              />
              <Button className="bg-getwell-teal hover:bg-getwell-teal/80">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} GoGetWell.ai. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-getwell-teal text-sm transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-getwell-teal text-sm transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-getwell-teal text-sm transition-colors">Cookies</a>
              <a href="#" className="text-gray-400 hover:text-getwell-teal text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
