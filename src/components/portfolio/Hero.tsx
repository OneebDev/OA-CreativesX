
import { useState, useEffect } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Code, Database, Palette, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

import React from 'react';

export const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = [
    { text: 'Web Developer', icon: Code },
    { text: 'WordPress Developer', icon: Code },
    { text: 'Data Scientist', icon: Database },
    { text: 'Graphic Designer', icon: Palette },
    { text: 'Digital Marketer', icon: TrendingUp }
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i].text;

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentRoleIcon = roles[loopNum % roles.length].icon;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-600/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{
            left: `${Math.sin(Date.now() * 0.001) * 100 + 50}px`,
            top: `${Math.cos(Date.now() * 0.001) * 100 + 50}px`,
          }}
        ></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Interactive cursor effect */}
        <div 
          className="absolute w-32 h-32 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-full blur-2xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
        ></div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary/30 rounded-full animate-float-particle-${i + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Floating name with sparkle effect */}
          <div className="relative mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 relative">
              <span className="inline-block animate-bounce-subtle">Hi,</span>{' '}
              <span className="inline-block animate-bounce-subtle" style={{ animationDelay: '0.1s' }}>I'm</span>{' '}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient-shift relative">
                OA CreativesX
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary animate-spin-slow" />
              </span>
            </h1>
          </div>
          
          {/* Enhanced typing effect with icon */}
          <div className="text-xl md:text-3xl mb-8 h-12 flex items-center justify-center gap-3">
            <span className="text-muted-foreground">I'm a </span>
            <div className="flex items-center gap-2">
              {React.createElement(currentRoleIcon, { 
                className: "w-6 h-6 text-primary animate-pulse" 
              })}
              <span className="text-primary font-medium bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {text}
                <span className="animate-blink text-primary">|</span>
              </span>
            </div>
          </div>
          
          {/* Enhanced description with floating words */}
          <div className="relative mb-10">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about{' '}
              <span className="text-primary font-semibold hover:scale-110 inline-block transition-transform cursor-default">
                creating beautiful web experiences
              </span>, 
              <span className="text-blue-600 font-semibold hover:scale-110 inline-block transition-transform cursor-default">
                {' '}analyzing data insights
              </span>, 
              <span className="text-purple-500 font-semibold hover:scale-110 inline-block transition-transform cursor-default">
                {' '}designing stunning visuals
              </span>, and{' '}
              <span className="text-green-500 font-semibold hover:scale-110 inline-block transition-transform cursor-default">
                crafting effective marketing strategies
              </span>.
            </p>
          </div>
          
          {/* Enhanced buttons with hover effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-primary via-purple-500 to-blue-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25 relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('/cv', '_blank')}
              className="hover:scale-105 transition-all duration-300 border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              <Download className="mr-2 h-4 w-4 animate-bounce" />
              Download CV
            </Button>
          </div>
          
          {/* Enhanced social links with stagger animation */}
          <div className="flex gap-6 justify-center mb-12">
            {[
              { 
                icon: Github, 
                delay: '0ms', 
                href: 'https://github.com/OACreatives',
                label: 'GitHub'
              },
              { 
                icon: Linkedin, 
                delay: '100ms', 
                href: 'https://www.linkedin.com/in/oa-creatives-543a66377/',
                label: 'LinkedIn'
              },
              { 
                icon: Mail, 
                delay: '200ms', 
                  href: 'https://mail.google.com/mail/?view=cm&fs=1&to=oacreatives951@gmail.com&su=Project%20Inquiry%20for%20OA%20Creatives&body=Hi%20OA%20Creatives%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you.%20Can%20we%20discuss%20more%20about%20the%20project%3F%0A%0AThanks%2C%0A[Your%20Name]',
                label: 'Email'
              }
            ].map(({ icon: Icon, delay, href, label }, index) => (
              <Button 
                key={index}
                variant="outline" 
                size="icon" 
                className="hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 hover:rotate-6 border-primary/30 relative group"
                style={{ animationDelay: delay }}
                onClick={() => window.open(href, '_blank')}
              >
                <Icon className="h-5 w-5" />
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 px-2 py-1 rounded text-xs whitespace-nowrap pointer-events-none">
                  {label}
                </div>
              </Button>
            ))}
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="animate-bounce-gentle">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="rounded-full hover:bg-primary/10 transition-all duration-300 group"
          >
            <ArrowDown className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </Button>
          <p className="text-xs text-muted-foreground mt-2 animate-fade-in-delayed">Scroll to explore</p>
        </div>
      </div>
    </div>
  );
};
