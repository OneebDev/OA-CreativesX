
import { useEffect, useState } from 'react';
import { Award, Users, Coffee, Star, Code2, Palette, BarChart3, Megaphone, Heart, Target, Lightbulb, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, coffee: 0, rating: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Animated counter effect
  useEffect(() => {
    if (isVisible) {
      const stats = { projects: 50, clients: 25, coffee: 500, rating: 4.9 };
      const duration = 2000;
      const intervals: NodeJS.Timeout[] = [];

      Object.entries(stats).forEach(([key, targetValue]) => {
        let currentValue = 0;
        const increment = targetValue / (duration / 50);
        
        const interval = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(interval);
          }
          setCounters(prev => ({ ...prev, [key]: currentValue }));
        }, 50);
        
        intervals.push(interval);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [isVisible]);

  const stats = [
    { icon: Award, value: counters.projects, label: 'Projects Completed', suffix: '+', color: 'text-primary' },
    { icon: Users, value: counters.clients, label: 'Happy Clients', suffix: '+', color: 'text-blue-600' },
    { icon: Coffee, value: counters.coffee, label: 'Cups of Coffee', suffix: '+', color: 'text-amber-600' },
    { icon: Star, value: counters.rating, label: 'Rating', suffix: '/5', color: 'text-green-600' },
  ];

  const skills = [
    { icon: Code2, title: 'Web Development', description: 'HTML, CSS, JavaScript, WordPress', color: 'bg-blue-500/10 border-blue-500/20' },
    { icon: BarChart3, title: 'Data Science', description: 'Python, Analytics, Machine Learning', color: 'bg-green-500/10 border-green-500/20' },
    { icon: Palette, title: 'Graphic Design', description: 'Branding, UI/UX, Visual Identity', color: 'bg-purple-500/10 border-purple-500/20' },
    { icon: Megaphone, title: 'Digital Marketing', description: 'Strategy, Campaigns, Growth', color: 'bg-orange-500/10 border-orange-500/20' },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <Heart className="w-6 h-6 text-red-500 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold">
              About <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <Lightbulb className="w-6 h-6 text-yellow-500 animate-pulse" />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a <span className="text-primary font-semibold">multi-skilled creative professional</span> with expertise in web development, data science, 
            graphic design, and digital marketing. I love turning <span className="text-blue-600 font-semibold">bold ideas into reality</span>.
          </p>
        </div>

        {/* Skills showcase */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className={`${skill.color} hover:scale-105 transition-all duration-300 cursor-pointer group ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                <skill.icon className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative">
              <Target className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-6">My Journey</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <p className="text-muted-foreground leading-relaxed">
                    With <span className="text-primary font-semibold">years of experience</span> across multiple disciplines, I've developed a unique perspective 
                    that allows me to approach problems from different angles. Whether it's building responsive 
                    websites, analyzing complex datasets, creating stunning visuals, or crafting marketing strategies, 
                    I bring <span className="text-blue-600 font-semibold">creativity and technical expertise</span> to every project.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in <span className="text-blue-600 font-semibold">continuous learning</span> and staying updated with the latest trends and technologies. 
                    This passion for growth has helped me deliver <span className="text-primary font-semibold">exceptional results</span> for clients across various industries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative w-full h-96 bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-600/10 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-primary/20">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-40 h-40 bg-gradient-to-br from-primary via-purple-500 to-blue-600 rounded-full mx-auto flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <span className="text-5xl font-bold text-white">OA</span>
                    </div>
                    <Rocket className="absolute -top-2 -right-2 w-8 h-8 text-primary animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">OA CreativesX</h3>
                  <p className="text-muted-foreground mb-4">Creative Professional</p>
                  <div className="flex justify-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`text-center hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-background to-muted/50 border-2 hover:border-primary/50 group ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <stat.icon className={`w-10 h-10 mx-auto ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-xl"></div>
                </div>
                <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.label === 'Rating' 
                    ? stat.value.toFixed(1)
                    : Math.floor(stat.value)
                  }{stat.suffix}
                </div>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
