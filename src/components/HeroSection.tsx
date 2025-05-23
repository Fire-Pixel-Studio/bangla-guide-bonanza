
import { Download, BookOpen, Mail } from 'lucide-react';

interface HeroSectionProps {
  language: 'en' | 'bn';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    en: {
      title: 'Discover the Beauty of Bangladesh',
      subtitle: 'Your comprehensive guide to culture, travel, education, and heritage of the beautiful land of rivers and greenery.',
      browseGuides: 'Browse Guides',
      downloadPdf: 'Download PDF',
      contact: 'Contact Us'
    },
    bn: {
      title: 'বাংলাদেশের সৌন্দর্য আবিষ্কার করুন',
      subtitle: 'নদী ও সবুজের অপরূপ দেশের সংস্কৃতি, ভ্রমণ, শিক্ষা এবং ঐতিহ্যের সম্পূর্ণ গাইড।',
      browseGuides: 'গাইড ব্রাউজ করুন',
      downloadPdf: 'পিডিএফ ডাউনলোড',
      contact: 'যোগাযোগ করুন'
    }
  };

  const t = content[language];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Bangladesh landscape pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-bangladesh-green/5 via-green-50 to-white">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23006A4E%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0 0c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-bangladesh-green/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-bangladesh-green-light/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-bangladesh-gold/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Title */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
            <span className="bg-gradient-to-r from-bangladesh-green via-bangladesh-green-light to-bangladesh-green bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
            {t.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right">
            <button className={`flex items-center space-x-2 bg-bangladesh-green hover:bg-bangladesh-green/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
              <BookOpen size={20} />
              <span>{t.browseGuides}</span>
            </button>
            
            <button className={`flex items-center space-x-2 bg-white hover:bg-gray-50 text-bangladesh-green border-2 border-bangladesh-green px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
              <Download size={20} />
              <span>{t.downloadPdf}</span>
            </button>
            
            <button className={`flex items-center space-x-2 bg-bangladesh-green-light hover:bg-bangladesh-green-light/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
              <Mail size={20} />
              <span>{t.contact}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
