
import { useEffect, useState } from 'react';
import { Code, Database, Palette, TrendingUp, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Skills = () => {
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

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: 'Web Development',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'WordPress', level: 85 },
        { name: 'React', level: 80 },
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Database,
      title: 'Data Science',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'SQL', level: 90 },
        { name: 'Data Analysis', level: 88 },
        { name: 'Machine Learning', level: 75 },
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      skills: [
        { name: 'Logo Design', level: 90 },
        { name: 'Banner Design', level: 85 },
        { name: 'Social Media Posts', level: 92 },
        { name: 'Brand Identity', level: 88 },
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      skills: [
        { name: 'Social Media Strategy', level: 85 },
        { name: 'Google Ads', level: 80 },
        { name: 'Email Marketing', level: 78 },
        { name: 'Content Marketing', level: 82 },
      ],
      color: 'from-orange-500 to-orange-600'
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I have expertise across multiple domains, allowing me to provide comprehensive solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 200}ms` }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(index * 200) + (skillIndex * 100)}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
