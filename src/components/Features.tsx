
import React from 'react';
import { Activity, Calendar, MessageCircle, Shield, Clock, Smartphone } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
      <div className="bg-getwell-teal/10 p-4 rounded-full inline-block mb-4 group-hover:bg-getwell-teal/20 transition-colors">
        <Icon className="h-6 w-6 text-getwell-teal" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-getwell-navy">{title}</h3>
      <p className="text-getwell-darkGray">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI Symptom Checker",
      description: "Get instant assessments of your symptoms with our medical AI that learns from millions of cases."
    },
    {
      icon: Shield,
      title: "Personalized Health Insights",
      description: "Receive tailored health recommendations based on your medical history and current condition."
    },
    {
      icon: Activity,
      title: "Wellness Tracking",
      description: "Monitor your health metrics and track your progress with easy-to-understand analytics."
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Easily book appointments with specialists through our integrated healthcare network."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access our AI healthcare assistant anytime, anywhere, without the wait times."
    },
    {
      icon: Smartphone,
      title: "Multi-device Access",
      description: "Use our platform seamlessly across all your devices with perfect synchronization."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-getwell-lightGray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-getwell-navy mb-4">
            Powerful Features for Your Wellbeing
          </h2>
          <p className="text-xl text-getwell-darkGray max-w-3xl mx-auto">
            Our AI-powered platform provides comprehensive tools to help you manage your health effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
