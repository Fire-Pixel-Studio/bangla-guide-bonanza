
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
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <HeroSection language={language} />
      <CategoriesSection language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
