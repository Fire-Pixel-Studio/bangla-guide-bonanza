import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import Footer from '../components/Footer';
import Background from '../components/Background';
import AdBanner from '../components/AdBanner';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');

  const handleLanguageChange = (lang: 'en' | 'bn') => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 relative">
      <Background />
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <AdBanner />
      <HeroSection language={language} />
      <CategoriesSection language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;