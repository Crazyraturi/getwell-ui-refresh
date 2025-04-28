
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, name, role, imgSrc }: { quote: string, name: string, role: string, imgSrc: string }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-getwell-yellow fill-getwell-yellow" />
        ))}
      </div>
      <p className="text-getwell-darkGray mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <img src={imgSrc} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
        <div>
          <h4 className="font-semibold text-getwell-navy">{name}</h4>
          <p className="text-sm text-getwell-darkGray">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "GoGetWell.ai has completely changed how I manage my chronic condition. The personalized insights have been invaluable.",
      name: "Sarah Johnson",
      role: "Chronic Illness Patient",
      imgSrc: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      quote: "As a busy parent, having 24/7 access to reliable health information has been a game-changer for my family's wellbeing.",
      name: "Michael Rodriguez",
      role: "Parent of Two",
      imgSrc: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The symptom checker is incredibly accurate. It helped me identify a condition my doctor later confirmed.",
      name: "Emily Chen",
      role: "Healthcare Professional",
      imgSrc: "https://randomuser.me/api/portraits/women/33.jpg"
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-getwell-teal/5 to-getwell-blue/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-getwell-navy mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-getwell-darkGray max-w-3xl mx-auto">
            Thousands of people trust GoGetWell.ai to manage their health needs every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              imgSrc={testimonial.imgSrc}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-getwell-darkGray mb-6">
            Join over <span className="font-semibold">50,000+ users</span> who trust GoGetWell.ai with their health
          </p>
          <div className="flex justify-center space-x-8">
            <img src="https://via.placeholder.com/120x40?text=Partner1" alt="Partner Logo" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://via.placeholder.com/120x40?text=Partner2" alt="Partner Logo" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://via.placeholder.com/120x40?text=Partner3" alt="Partner Logo" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://via.placeholder.com/120x40?text=Partner4" alt="Partner Logo" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
