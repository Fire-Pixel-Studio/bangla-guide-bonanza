
import { Heart, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'bn';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    en: {
      tagline: 'Made with love in Bangladesh',
      quickLinks: 'Quick Links',
      home: 'Home',
      guides: 'Guides',
      about: 'About Us',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      followUs: 'Follow Us',
      copyright: '© 2024 Bangladesh Guide. All rights reserved.',
      madeInBangladesh: 'Made in Bangladesh'
    },
    bn: {
      tagline: 'বাংলাদেশে ভালোবাসায় তৈরি',
      quickLinks: 'দ্রুত লিঙ্ক',
      home: 'হোম',
      guides: 'গাইড',
      about: 'আমাদের সম্পর্কে',
      contact: 'যোগাযোগ',
      privacy: 'গোপনীয়তা নীতি',
      terms: 'সেবার শর্তাবলী',
      followUs: 'আমাদের ফলো করুন',
      copyright: '© ২০২৪ বাংলাদেশ গাইড। সমস্ত অধিকার সংরক্ষিত।',
      madeInBangladesh: 'মেইড ইন বাংলাদেশ'
    }
  };

  const t = content[language];

  return (
    <footer className="bg-gradient-to-br from-bangladesh-green to-bangladesh-green-light text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl font-bengali">বা</span>
              </div>
              <h3 className={`text-2xl font-bold ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                {language === 'bn' ? 'বাংলাদেশ গাইড' : 'Bangladesh Guide'}
              </h3>
            </div>
            <p className={`text-white/80 mb-6 leading-relaxed max-w-md ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
              {t.tagline}
            </p>
            
            {/* Made in Bangladesh Badge */}
            <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 w-fit">
              <Heart className="text-red-400" size={16} fill="currentColor" />
              <span className={`text-sm font-medium ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                {t.madeInBangladesh}
              </span>
              <div className="w-6 h-4 bg-gradient-to-r from-bangladesh-green via-red-500 to-bangladesh-green rounded-sm"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
              {t.quickLinks}
            </h4>
            <div className="space-y-2">
              <a href="#home" className={`block text-white/80 hover:text-white transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                {t.home}
              </a>
              <a href="#guides" className={`block text-white/80 hover:text-white transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                {t.guides}
              </a>
              <a href="#about" className={`block text-white/80 hover:text-white transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                {t.about}
              </a>
              <a href="#contact" className={`block text-white/80 hover:text-white transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                {t.contact}
              </a>
              <a href="#privacy" className={`block text-white/80 hover:text-white transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                {t.privacy}
              </a>
              <a href="#terms" className={`block text-white/80 hover:text-white transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                {t.terms}
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
              {t.followUs}
            </h4>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className={`text-white/80 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
