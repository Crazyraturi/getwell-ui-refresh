
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const CTASection = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "Free",
      period: "forever",
      description: "Essential features for occasional health questions",
      features: [
        "AI Symptom Checker",
        "Health Information",
        "Limited Chat Sessions",
        "Basic Health Reports"
      ],
      buttonText: "Get Started Free",
      highlight: false
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      description: "Advanced features for comprehensive health management",
      features: [
        "Everything in Basic",
        "Unlimited Chat Sessions",
        "Medication Tracking",
        "In-depth Health Reports",
        "Health Goal Setting",
        "Priority Support"
      ],
      buttonText: "Start 7-Day Free Trial",
      highlight: true
    },
    {
      name: "Family",
      price: "$19",
      period: "per month",
      description: "Complete coverage for your whole family",
      features: [
        "Everything in Pro",
        "Up to 5 Family Profiles",
        "Family Health Dashboard",
        "Pediatric Symptom Checker",
        "Emergency Contact System",
        "24/7 Priority Support"
      ],
      buttonText: "Start 7-Day Free Trial",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-getwell-navy mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-getwell-darkGray max-w-3xl mx-auto">
            Choose the plan that fits your health management needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl shadow-sm border ${plan.highlight ? 'border-getwell-teal ring-2 ring-getwell-teal/20' : 'border-gray-200'} bg-white overflow-hidden transition-transform hover:translate-y-[-5px]`}
            >
              {plan.highlight && (
                <div className="bg-getwell-teal text-white py-2 text-center text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-getwell-navy mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-getwell-navy">{plan.price}</span>
                  <span className="text-getwell-darkGray ml-2">/{plan.period}</span>
                </div>
                <p className="text-getwell-darkGray mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-getwell-teal flex-shrink-0 mr-2" />
                      <span className="text-getwell-darkGray">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.highlight ? 'bg-getwell-teal hover:bg-getwell-navy' : 'bg-white border border-getwell-teal text-getwell-teal hover:bg-getwell-teal hover:text-white'} transition-colors flex items-center justify-center gap-2`}
                >
                  {plan.buttonText}
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 bg-getwell-lightGray rounded-xl">
          <h3 className="text-2xl font-bold text-getwell-navy mb-4">
            Need a custom solution for your organization?
          </h3>
          <p className="text-lg text-getwell-darkGray mb-6 max-w-2xl mx-auto">
            We offer specialized enterprise plans for healthcare providers, insurance companies, and corporate wellness programs.
          </p>
          <Button variant="outline" className="bg-white border-getwell-teal text-getwell-teal hover:bg-getwell-teal hover:text-white">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
