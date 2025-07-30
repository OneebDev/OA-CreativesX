// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// interface NavigationProps {
//   activeSection: string;
// }

// export const Navigation = ({ activeSection }: NavigationProps) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navItems = [
//     { id: 'hero', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'skills', label: 'Skills' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'services', label: 'Services' },
//     { id: 'contact', label: 'Contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : 'auto';
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isOpen]);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
//         scrolled ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg' : 'bg-background/90 backdrop-blur-md'
//       }`}>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
//             <div
//               className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient-shift cursor-pointer"
//               onClick={() => scrollToSection('hero')}
//             >
//               OA CreativesX
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-1">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:scale-105 ${
//                     activeSection === item.id ? 'text-primary font-medium bg-primary/10 shadow-sm' : 'text-muted-foreground hover:text-primary'
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>

//             {/* Mobile menu toggle */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="lg:hidden relative overflow-hidden group"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               <div className="relative z-10">
//                 {isOpen ? (
//                   <X className="h-5 w-5 transition-transform duration-300 rotate-180" />
//                 ) : (
//                   <Menu className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
//                 )}
//               </div>
//               <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
//             </Button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Navigation Menu */}
//       <div className={`fixed inset-0 z-[50] transition-all duration-500 lg:hidden ${
//         isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
//       }`}>
//         <div className="absolute inset-0 bg-background/98 backdrop-blur-lg"></div>
//         <div className="relative flex flex-col items-center justify-center min-h-screen px-6">
//           <div className="grid gap-6 w-full max-w-sm">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`text-2xl sm:text-3xl font-medium transition-all duration-300 hover:scale-110 hover:text-primary py-4 px-6 rounded-xl hover:bg-primary/10 ${
//                   activeSection === item.id ? 'text-primary bg-primary/10 shadow-lg' : 'text-foreground'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>

//           <div className="mt-12 text-center space-y-2 text-muted-foreground">
//             <p className="text-sm">Get in touch</p>
//             <p className="text-xs">oacreatives951@gmail.com</p>
//             <p className="text-xs">+92-332-0313822</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// In your Hero section:
// <section id="hero" className="pt-24 md:pt-28 lg:pt-32">
// Navigation.tsx
// Navigation.tsx
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
}

export const Navigation = ({ activeSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg' : 'bg-background/90 backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
            <div
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient-shift cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              OA CreativesX
            </div>

            <div className="hidden sm:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:scale-105 ${
                    activeSection === item.id ? 'text-primary font-medium bg-primary/10 shadow-sm' : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="ml-2"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            <div className="sm:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="relative overflow-hidden group"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="relative z-10">
                  {isOpen ? (
                    <X className="h-5 w-5 transition-transform duration-300 rotate-180" />
                  ) : (
                    <Menu className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  )}
                </div>
                <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[50] transition-all duration-500 sm:hidden ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-background/98 backdrop-blur-lg"></div>
        <div className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-12">
          <div className="grid gap-6 w-full max-w-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-2xl sm:text-3xl font-medium transition-all duration-300 hover:scale-110 hover:text-primary py-4 px-6 rounded-xl hover:bg-primary/10 ${
                  activeSection === item.id ? 'text-primary bg-primary/10 shadow-lg' : 'text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
