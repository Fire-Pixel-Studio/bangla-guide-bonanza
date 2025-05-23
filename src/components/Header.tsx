
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'bn';
  onLanguageChange: (lang: 'en' | 'bn') => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = {
    en: {
      title: 'Bangladesh Guide',
      home: 'Home',
      guides: 'Guides',
      about: 'About',
      contact: 'Contact'
    },
    bn: {
      title: 'বাংলাদেশ গাইড',
      home: 'হোম',
      guides: 'গাইড',
      about: 'সম্পর্কে',
      contact: 'যোগাযোগ'
    }
  };

  const t = content[language];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-bangladesh-green to-bangladesh-green-light rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">বা</span>
            </div>
            <h1 className={`text-xl font-bold text-bangladesh-green ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
              {t.title}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`hover:text-bangladesh-green transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
              {t.home}
            </a>
            <a href="#guides" className={`hover:text-bangladesh-green transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
              {t.guides}
            </a>
            <a href="#about" className={`hover:text-bangladesh-green transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
              {t.about}
            </a>
            <a href="#contact" className={`hover:text-bangladesh-green transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
              {t.contact}
            </a>
            
            {/* Language Toggle */}
            <button
              onClick={() => onLanguageChange(language === 'en' ? 'bn' : 'en')}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-bangladesh-green/10 hover:bg-bangladesh-green/20 transition-colors"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">{language === 'en' ? 'বাং' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => onLanguageChange(language === 'en' ? 'bn' : 'en')}
              className="p-2 rounded-lg bg-bangladesh-green/10"
            >
              <Globe size={16} />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-bangladesh-green/10"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#home" className={`hover:text-bangladesh-green transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                {t.home}
              </a>
              <a href="#guides" className={`hover:text-bangladesh-green transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                {t.guides}
              </a>
              <a href="#about" className={`hover:text-bangladesh-green transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                {t.about}
              </a>
              <a href="#contact" className={`hover:text-bangladesh-green transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                {t.contact}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
