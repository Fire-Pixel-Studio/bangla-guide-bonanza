
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useButtonSound from '../hooks/useButtonSound';

interface HeroSectionProps {
  language: 'en' | 'bn';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const navigate = useNavigate();
  const playButtonSound = useButtonSound();

  const content = {
    en: {
      title: 'Guide of Bangladesh',
      subtitle: 'Your Complete Study Companion',
      description: 'Access comprehensive study guides, textbooks, and learning materials for all classes from 1st to 10th grade. Everything you need for academic success in Bangladesh.',
      exploreGuides: 'Explore Guides',
      contactUs: 'Contact Us'
    },
    bn: {
      title: 'গাইড অফ বাংলাদেশ',
      subtitle: 'আপনার সম্পূর্ণ অধ্যয়ন সহায়ক',
      description: '১ম থেকে ১০ম শ্রেণী পর্যন্ত সকল শ্রেণীর জন্য ব্যাপক অধ্যয়ন গাইড, পাঠ্যবই এবং শিক্ষা উপকরণ অ্যাক্সেস করুন। বাংলাদেশে একাডেমিক সাফল্যের জন্য আপনার প্রয়োজনীয় সবকিছু।',
      exploreGuides: 'গাইডস অন্বেষণ করুন',
      contactUs: 'যোগাযোগ করুন'
    }
  };

  const t = content[language];

  const handleExploreGuides = () => {
    playButtonSound();
    const guidesSection = document.getElementById('guides');
    if (guidesSection) {
      guidesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactUs = () => {
    playButtonSound();
    navigate('/contact');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-gradient-to-br from-bangladesh-green/5 via-green-50 to-white">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full dark:bg-[url('data:image/svg+xml,%3Csvg width=%2760%22 height=%2760%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23FFFFFF%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0 0c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-[url('data:image/svg+xml,%3Csvg width=%2760%22 height=%2760%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23006A4E%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0 0c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
        </div>
      </div>

      {/* Enhanced Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div 
              className="rounded-full bg-gradient-to-br from-bangladesh-green/20 to-purple-200/30 dark:from-bangladesh-green/30 dark:to-purple-900/40 shadow-lg"
              style={{
                width: `${12 + Math.random() * 24}px`,
                height: `${12 + Math.random() * 24}px`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Title with Enhanced Styling */}
          <h1 className={`text-4xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bangladesh-green to-bangladesh-green-light dark:from-bangladesh-green-light dark:to-white mb-8 animate-fade-in drop-shadow-2xl ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
            {t.title}
          </h1>
          
          {/* Subtitle with Enhanced Typography */}
          <h2 className={`text-xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-200 mb-6 animate-fade-in leading-relaxed ${language === 'bn' ? 'font-bengali' : 'font-english'}`} style={{ animationDelay: '0.2s' }}>
            {t.subtitle}
          </h2>
          
          {/* Description with Better Readability */}
          <p className={`text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in ${language === 'bn' ? 'font-bengali' : 'font-english'}`} style={{ animationDelay: '0.4s' }}>
            {t.description}
          </p>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={handleExploreGuides}
              className={`button-primary bg-gradient-to-r from-bangladesh-green to-bangladesh-green-light hover:from-bangladesh-green-light hover:to-bangladesh-green text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 rounded-3xl px-12 py-5 text-lg font-bold ${language === 'bn' ? 'font-bengali' : 'font-english'}`}
            >
              {t.exploreGuides}
              <ArrowRight className="ml-3" size={24} />
            </button>
            
            <button
              onClick={handleContactUs}
              className={`button-primary bg-transparent border-3 border-bangladesh-green text-bangladesh-green dark:text-bangladesh-green-light hover:bg-bangladesh-green hover:text-white dark:border-bangladesh-green-light shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500 rounded-3xl px-12 py-5 text-lg font-bold ${language === 'bn' ? 'font-bengali' : 'font-english'}`}
            >
              {t.contactUs}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
