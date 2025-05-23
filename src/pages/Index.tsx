
import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import Footer from '../components/Footer';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');

  const handleLanguageChange = (lang: 'en' | 'bn') => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <HeroSection language={language} />
      <CategoriesSection language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
