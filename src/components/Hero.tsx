
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-getwell-lightGray overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-getwell-navy mb-6 leading-tight">
              Your Personal AI Doctor, 
              <span className="text-getwell-teal"> Available 24/7</span>
            </h1>
            <p className="text-xl text-getwell-darkGray mb-8 leading-relaxed">
              GoGetWell.ai helps you understand and manage your health with AI-powered symptom checking, personalized wellness plans, and reliable medical information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2">
                Get Started Free
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="btn-secondary">
                See How It Works
              </Button>
            </div>
            <div className="mt-8 flex items-center text-getwell-darkGray">
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                No credit card required
              </span>
              <span className="text-sm">•</span>
              <span className="ml-2 text-sm">HIPAA Compliant</span>
              <span className="text-sm ml-2">•</span>
              <span className="ml-2 text-sm">Cancel anytime</span>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-getwell-teal/10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
              <img 
                src="https://gogetwell.ai/assets/our_mission-nN9YP0Qb.gif" 
                alt="GoGetWell.ai Mission Animation" 
                className="relative z-10 rounded-lg shadow-xl animate-float"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-xs font-medium">AI Doctor Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
