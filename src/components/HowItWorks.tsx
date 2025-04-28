
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up for Free",
      description: "Create your account in seconds with just your email. No credit card required to get started.",
      imgSrc: "/lovable-uploads/a7397efa-e597-487d-b756-f947a3264b7b.png",
    },
    {
      number: "02",
      title: "Share Your Symptoms",
      description: "Describe your symptoms to our AI in natural language, just like you would with a real doctor.",
      imgSrc: "/lovable-uploads/66d601e9-57fc-4855-be17-463c0e80306e.png",
    },
    {
      number: "03",
      title: "Get Instant Analysis",
      description: "Receive AI-generated health insights, possible conditions, and recommended next steps.",
      imgSrc: "/lovable-uploads/36d14572-682f-43fe-976a-58ae38ed94c9.png",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-getwell-navy mb-4">
            How GoGetWell.ai Works
          </h2>
          <p className="text-xl text-getwell-darkGray max-w-3xl mx-auto">
            Our intuitive process makes health management simple and accessible for everyone.
          </p>
        </div>

        <div className="space-y-20 mt-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 bg-getwell-teal/10 rounded-full w-20 h-20 flex items-center justify-center">
                    <span className="text-getwell-teal text-2xl font-bold">{step.number}</span>
                  </div>
                  <img 
                    src={step.imgSrc} 
                    alt={step.title} 
                    className="rounded-lg shadow-lg w-full object-cover aspect-video"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-getwell-navy mb-4">{step.title}</h3>
                <p className="text-lg text-getwell-darkGray mb-6">{step.description}</p>
                {index === steps.length - 1 && (
                  <Button className="btn-primary flex items-center gap-2">
                    Try it Now
                    <ArrowRight size={18} />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
