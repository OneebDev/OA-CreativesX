
import { useEffect, useState } from 'react';
import { Code, Database, Palette, TrendingUp, Zap, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: ['Responsive Design', 'E-commerce Solutions', 'WordPress Development', 'Custom Applications'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Transform your data into actionable insights with advanced analytics',
      features: ['Data Analysis', 'Machine Learning', 'Predictive Modeling', 'Business Intelligence'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Eye-catching designs that communicate your brand message effectively',
      features: ['Logo Design', 'Brand Identity', 'Social Media Graphics', 'Print Design'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive marketing strategies to grow your online presence',
      features: ['Social Media Marketing', 'Google Ads', 'Content Strategy', 'Email Marketing'],
      color: 'from-orange-500 to-orange-600'
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer comprehensive solutions across multiple domains to help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`hover:shadow-lg transition-all duration-300 group ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 200}ms` }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-full">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-sm font-medium">Crafted with passion for excellence</span>
          </div>
        </div>
      </div>
    </div>
  );
};
