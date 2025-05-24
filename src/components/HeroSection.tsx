
import { Search, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import useButtonSound from '../hooks/useButtonSound';

interface HeroSectionProps {
  language: 'en' | 'bn';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const playButtonSound = useButtonSound();

  const content = {
    en: {
      title: 'Guide of Bangladesh',
      subtitle: 'Your Complete Study Companion',
      description: 'Access comprehensive study guides, textbooks, and learning materials for all classes from 1st to 10th grade. Everything you need for academic success in Bangladesh.',
      searchPlaceholder: 'Search for subjects, classes, or topics...',
      getStarted: 'Get Started',
      exploreGuides: 'Explore Guides',
      searchButton: 'Search'
    },
    bn: {
      title: 'গাইড অফ বাংলাদেশ',
      subtitle: 'আপনার সম্পূর্ণ অধ্যয়ন সহায়ক',
      description: '১ম থেকে ১০ম শ্রেণী পর্যন্ত সকল শ্রেণীর জন্য ব্যাপক অধ্যয়ন গাইড, পাঠ্যবই এবং শিক্ষা উপকরণ অ্যাক্সেস করুন। বাংলাদেশে একাডেমিক সাফল্যের জন্য আপনার প্রয়োজনীয় সবকিছু।',
      searchPlaceholder: 'বিষয়, শ্রেণী বা বিষয়বস্তু অনুসন্ধান করুন...',
      getStarted: 'শুরু করুন',
      exploreGuides: 'গাইডস অন্বেষণ করুন',
      searchButton: 'অনুসন্ধান'
    }
  };

  const t = content[language];

  const handleSearch = () => {
    playButtonSound();
    if (searchQuery.trim()) {
      toast.success(
        language === 'bn' 
          ? `"${searchQuery}" এর জন্য অনুসন্ধান করা হচ্ছে...`
          : `Searching for "${searchQuery}"...`,
        {
          description: language === 'bn' 
            ? 'অনুসন্ধান ফলাফল শীঘ্রই আসছে।'
            : 'Search results coming soon.',
          duration: 3000
        }
      );
    } else {
      toast.error(
        language === 'bn' 
          ? 'অনুগ্রহ করে একটি অনুসন্ধান শব্দ লিখুন।'
          : 'Please enter a search term.',
        {
          duration: 2000
        }
      );
    }
  };

  const handleGetStarted = () => {
    playButtonSound();
    const guidesSection = document.getElementById('guides');
    if (guidesSection) {
      guidesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreGuides = () => {
    playButtonSound();
    const guidesSection = document.getElementById('guides');
    if (guidesSection) {
      guidesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-gradient-to-br from-bangladesh-green/5 via-green-50 to-white">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full dark:bg-[url('data:image/svg+xml,%3Csvg width=%2760%22 height=%2760%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23FFFFFF%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0 0c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-[url('data:image/svg+xml,%3Csvg width=%2760%22 height=%2760%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23006A4E%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0 0c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
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
              className="rounded-full bg-bangladesh-green/10 dark:bg-bangladesh-green-light/20"
              style={{
                width: `${8 + Math.random() * 16}px`,
                height: `${8 + Math.random() * 16}px`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-bangladesh-green dark:text-bangladesh-green-light mb-6 animate-fade-in ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
            {t.title}
          </h1>
          
          {/* Subtitle */}
          <h2 className={`text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4 animate-fade-in ${language === 'bn' ? 'font-bengali' : 'font-english'}`} style={{ animationDelay: '0.2s' }}>
            {t.subtitle}
          </h2>
          
          {/* Description */}
          <p className={`text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in ${language === 'bn' ? 'font-bengali' : 'font-english'}`} style={{ animationDelay: '0.4s' }}>
            {t.description}
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-4 border-bangladesh-green/20 dark:border-bangladesh-green-light/30">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className={`w-full pl-12 pr-4 py-4 bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none ${language === 'bn' ? 'font-bengali' : 'font-english'}`}
                />
              </div>
              <button
                onClick={handleSearch}
                className={`px-8 py-4 bg-bangladesh-green hover:bg-bangladesh-green-light text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${language === 'bn' ? 'font-bengali' : 'font-english'}`}
              >
                {t.searchButton}
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={handleGetStarted}
              className={`button-primary bg-bangladesh-green hover:bg-bangladesh-green-light text-white ${language === 'bn' ? 'font-bengali' : 'font-english'}`}
            >
              {t.getStarted}
              <ArrowRight className="ml-2" size={20} />
            </button>
            
            <button
              onClick={handleExploreGuides}
              className={`button-primary bg-transparent border-2 border-bangladesh-green text-bangladesh-green dark:text-bangladesh-green-light hover:bg-bangladesh-green hover:text-white dark:border-bangladesh-green-light ${language === 'bn' ? 'font-bengali' : 'font-english'}`}
            >
              {t.exploreGuides}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
