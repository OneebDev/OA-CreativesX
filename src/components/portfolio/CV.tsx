import React from 'react';
import { Download, Mail, Phone, MapPin, Github, Linkedin, Code, Database, Palette, TrendingUp, Award, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const CV = () => {
  const downloadCV = () => {
    const element = document.getElementById('cv-content');
    if (element) {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Download Button */}
        <div className="flex justify-end mb-6 print:hidden">
          <Button onClick={downloadCV} className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>

        {/* CV Content */}
        <div id="cv-content" className="bg-white text-black shadow-lg rounded-lg overflow-hidden print:shadow-none print:rounded-none">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold">
                OA
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2">OA CreativesX</h1>
                <p className="text-xl opacity-90 mb-4">Full-Stack Developer & Digital Creative</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    oacreatives951@gmail.com
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +92-332-0313822
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Pakistan
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Professional Summary */}
            <section>
              <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Passionate and versatile digital creative with expertise in web development, WordPress development, 
                data science, graphic design, and digital marketing. Experienced in creating beautiful, functional 
                web experiences and leveraging data insights to drive business growth. Committed to delivering 
                high-quality solutions that combine technical excellence with creative innovation.
              </p>
            </section>

            {/* Core Competencies */}
            <section>
              <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">
                Core Competencies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Code className="w-5 h-5 text-blue-600" />
                      Web Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'Node.js', 'HTML/CSS', 'JavaScript', 'Tailwind CSS'].map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Code className="w-5 h-5 text-purple-600" />
                      WordPress Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {['WordPress', 'PHP', 'MySQL', 'Custom Themes', 'Plugin Development', 'WooCommerce'].map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Database className="w-5 h-5 text-green-600" />
                      Data Science
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Machine Learning', 'Data Analysis', 'SQL', 'Pandas', 'NumPy'].map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Palette className="w-5 h-5 text-pink-600" />
                      Graphic Design
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {['Adobe Photoshop', 'Illustrator', 'Figma', 'UI/UX Design', 'Brand Identity', 'Logo Design'].map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">
                Professional Experience
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">2022 - Present</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Freelance Full-Stack Developer</h3>
                  <p className="text-blue-600 font-medium mb-3">OA CreativesX</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Developed responsive web applications using React, TypeScript, and modern web technologies</li>
                    <li>• Created custom WordPress themes and plugins for various client projects</li>
                    <li>• Implemented data analysis solutions and visualization dashboards</li>
                    <li>• Designed brand identities and marketing materials for multiple businesses</li>
                    <li>• Managed digital marketing campaigns across social media platforms</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">2021 - 2022</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">WordPress Developer</h3>
                  <p className="text-purple-600 font-medium mb-3">Various Agencies</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Developed and maintained WordPress websites for small to medium businesses</li>
                    <li>• Customized themes and plugins to meet specific client requirements</li>
                    <li>• Optimized website performance and implemented SEO best practices</li>
                    <li>• Provided ongoing maintenance and support for client websites</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">
                Services Offered
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Web Development</h4>
                    <p className="text-sm text-gray-600">Custom web applications and responsive websites</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">WordPress Development</h4>
                    <p className="text-sm text-gray-600">Custom themes, plugins, and WordPress solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Data Analysis</h4>
                    <p className="text-sm text-gray-600">Business intelligence and data visualization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Palette className="w-5 h-5 text-pink-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Graphic Design</h4>
                    <p className="text-sm text-gray-600">Brand identity, logos, and marketing materials</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Digital Marketing</h4>
                    <p className="text-sm text-gray-600">Social media management and campaign optimization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Consulting</h4>
                    <p className="text-sm text-gray-600">Technical consulting and project management</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact & Links */}
            <section>
              <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">
                Connect With Me
              </h2>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/OACreatives" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  github.com/OACreatives
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/oa-creatives-543a66377/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};