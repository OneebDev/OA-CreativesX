

// import { useState } from 'react';
// import emailjs from 'emailjs-com';
// import { Send, Phone, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { toast } from 'sonner';

// export const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const templateParams = {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       subject: formData.subject,
//       message: formData.message,
//       time: new Date().toLocaleString()
//     };

//     emailjs.send(
//       'services_oacreatives',             // ✅ Your EmailJS service ID
//       'template_n2vxseo',                 // ✅ Your actual template ID
//       templateParams,
//       'EsFLLUM7i6x_4d4-H'                // ✅ Your EmailJS public key
//     ).then(() => {
//       toast.success('Message sent successfully!');
//       setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
//     }).catch((error) => {
//       console.error('EmailJS Error:', error);
//       toast.error('Failed to send message. Check your EmailJS config.');
//     });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const contactInfo = [
//     {
//       icon: Phone,
//       label: 'Phone',
//       value: '+92 347 1024771',
//       href: 'tel:+923471024771'
//     },
// {
//   icon: Mail,
//   label: 'Email',
//   value: 'oacreatives951@gmail.com',
//   href: 'https://mail.google.com/mail/?view=cm&fs=1&to=oacreatives951@gmail.com&su=Project%20Inquiry%20for%20OA%20Creatives&body=Hi%20OA%20Creatives%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you.%20Can%20we%20discuss%20more%20about%20the%20project%3F%0A%0AThanks%2C%0A[Your%20Name]'
// },

//     {
//       icon: MapPin,
//       label: 'Location',
//       value: 'Karachi, Sindh, Pakistan'
//     }
//   ];

//   const socialLinks = [
//     { icon: Github, label: 'GitHub', url: '#' },
//     { icon: Linkedin, label: 'LinkedIn', url: '#' },
//     { icon: Twitter, label: 'Twitter', url: '' },
//   ];

//   return (
//     <div className="py-20 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Get In <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Touch</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Have a project in mind? Let's discuss how we can work together to bring your ideas to life
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-semibold mb-6">Let's Start a Conversation</h3>
//               <p className="text-muted-foreground mb-8">
//                 I'm always excited to work on new projects and help bring creative ideas to life. 
//                 Whether you need web development, data analysis, design work, or marketing strategies, 
//                 I'm here to help.
//               </p>
//             </div>

//             <div className="space-y-4">
//               {contactInfo.map((item, index) => (
//                 <div key={index} className="flex items-center gap-4">
//                   <div className="p-3 bg-primary/10 rounded-lg">
//                     <item.icon className="w-5 h-5 text-primary" />
//                   </div>
//                   <div>
//                     <p className="font-medium">{item.label}</p>
//                     {item.href ? (
//                       <a href={item.href} className="text-muted-foreground hover:underline">
//                         {item.value}
//                       </a>
//                     ) : (
//                       <p className="text-muted-foreground">{item.value}</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="pt-8">
//               <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
//               <div className="flex gap-4">
//                 {socialLinks.map((social, index) => (
//                   <Button
//                     key={index}
//                     variant="outline"
//                     size="icon"
//                     className="hover:bg-primary hover:text-primary-foreground transition-colors"
//                   >
//                     <social.icon className="w-5 h-5" />
//                   </Button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <Card>
//             <CardHeader>
//               <CardTitle>Send Me a Message</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="name">Name</Label>
//                     <Input
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email</Label>
//                     <Input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="phone">Phone</Label>
//                   <Input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="subject">Subject</Label>
//                   <Input
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="message">Message</Label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={5}
//                     className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                     required
//                   />
//                 </div>

//                 <Button type="submit" className="w-full">
//                   <Send className="w-4 h-4 mr-2" />
//                   Send Message
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="mt-16 text-center">
//           <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-full">
//             <span className="text-sm font-medium">© 2024 OA CreativesX. All rights reserved.</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Send, Phone, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString()
    };

    emailjs.send(
      'services_oacreatives',
      'template_n2vxseo',
      templateParams,
      'EsFLLUM7i6x_4d4-H'
    ).then(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }).catch((error) => {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Check your EmailJS config.');
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 347 1024771',
      href: 'tel:+923471024771'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'oacreatives951@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=oacreatives951@gmail.com&su=Project%20Inquiry%20for%20OA%20Creatives&body=Hi%20OA%20Creatives%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you.%20Can%20we%20discuss%20more%20about%20the%20project%3F%0A%0AThanks%2C%0A[Your%20Name]'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karachi, Sindh, Pakistan'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/OACreatives' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/oa-creatives-543a66377/' },
    { icon: Twitter, label: 'Twitter', url: 'https://x.com/OACreatives' }
  ];

  return (
    <div className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground mb-8">
                I'm always excited to work on new projects and help bring creative ideas to life. 
                Whether you need web development, data analysis, design work, or marketing strategies, 
                I'm here to help.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-full">
            <span className="text-sm font-medium">© 2024 OA CreativesX. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

