
import { useState } from 'react';
import useButtonSound from '../hooks/useButtonSound';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const playButtonSound = useButtonSound();

  const handleLanguageChange = (lang: 'en' | 'bn') => {
    setLanguage(lang);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playButtonSound();
    toast.success(
      language === 'bn' 
        ? 'আপনার বার্তা পাঠানো হয়েছে!' 
        : 'Your message has been sent!',
      {
        description: language === 'bn' 
          ? 'আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।' 
          : 'We will get back to you soon.',
        duration: 3000
      }
    );
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const content = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch with us for any questions or feedback',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send Message'
      },
      info: {
        title: 'Get in Touch',
        email: 'Email Us',
        phone: 'Call Us',
        address: 'Visit Us'
      }
    },
    bn: {
      title: 'যোগাযোগ করুন',
      subtitle: 'যেকোনো প্রশ্ন বা মতামতের জন্য আমাদের সাথে যোগাযোগ করুন',
      form: {
        name: 'আপনার নাম',
        email: 'আপনার ইমেইল',
        message: 'আপনার বার্তা',
        send: 'বার্তা পাঠান'
      },
      info: {
        title: 'যোগাযোগ করুন',
        email: 'ইমেইল করুন',
        phone: 'ফোন করুন',
        address: 'আমাদের ঠিকানা'
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 relative">
      <Background />

      <Header language={language} onLanguageChange={handleLanguageChange} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className={`text-3xl md:text-5xl font-bold text-bangladesh-green dark:text-bangladesh-green-light mb-4 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
            {t.title}
          </h1>
          <p className={`text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white dark:bg-gray-800 border-2 border-bangladesh-green/20 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-bangladesh-green/10 to-purple-100/20 dark:from-bangladesh-green/20 dark:to-purple-900/20">
              <CardTitle className={`text-bangladesh-green dark:text-bangladesh-green-light ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                {t.form.send}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-bangladesh-green/20 rounded-xl focus:border-bangladesh-green focus:ring-2 focus:ring-bangladesh-green/20 transition-colors"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-bangladesh-green/20 rounded-xl focus:border-bangladesh-green focus:ring-2 focus:ring-bangladesh-green/20 transition-colors"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                    {t.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-bangladesh-green/20 rounded-xl focus:border-bangladesh-green focus:ring-2 focus:ring-bangladesh-green/20 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  onClick={playButtonSound}
                  className={`w-full bg-bangladesh-green hover:bg-bangladesh-green-light text-white py-3 rounded-xl transition-all duration-300 hover:scale-105 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}
                >
                  <Send className="mr-2" size={20} />
                  {t.form.send}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white dark:bg-gray-800 border-2 border-bangladesh-green/20 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-bangladesh-green/10 to-purple-100/20 dark:from-bangladesh-green/20 dark:to-purple-900/20">
                <CardTitle className={`text-bangladesh-green dark:text-bangladesh-green-light ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                  {t.info.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-bangladesh-green/10 rounded-xl">
                    <Mail className="text-bangladesh-green" size={24} />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-gray-800 dark:text-gray-200 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                      {t.info.email}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">info@guideofeveryclass.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100/50 dark:bg-purple-900/30 rounded-xl">
                    <Phone className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-gray-800 dark:text-gray-200 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                      {t.info.phone}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">+880 1234567890</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-yellow-100/50 dark:bg-yellow-900/30 rounded-xl">
                    <MapPin className="text-yellow-600 dark:text-yellow-400" size={24} />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-gray-800 dark:text-gray-200 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                      {t.info.address}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {language === 'bn' 
                        ? 'ঢাকা, বাংলাদেশ' 
                        : 'Dhaka, Bangladesh'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inspirational Quote Card */}
            <Card className="bg-gradient-to-br from-bangladesh-green/10 to-purple-100/20 dark:from-bangladesh-green/20 dark:to-purple-900/20 border-2 border-bangladesh-green/20 shadow-xl">
              <CardContent className="p-8 text-center">
                <blockquote className={`text-lg italic text-gray-700 dark:text-gray-300 mb-4 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                  {language === 'bn' 
                    ? '"শিক্ষাই জাতির মেরুদণ্ড"' 
                    : '"Education is the backbone of a nation"'}
                </blockquote>
                <cite className={`text-bangladesh-green dark:text-bangladesh-green-light font-semibold ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                  {language === 'bn' ? '- বঙ্গবন্ধু শেখ মুজিবুর রহমান' : '- Bangabandhu Sheikh Mujibur Rahman'}
                </cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer language={language} />
    </div>
  );
};

export default Contact;
