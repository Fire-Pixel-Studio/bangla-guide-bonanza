
import { GraduationCap, MapPin, Palette, Clock, Building, Users } from 'lucide-react';

interface CategoriesSectionProps {
  language: 'en' | 'bn';
}

const CategoriesSection = ({ language }: CategoriesSectionProps) => {
  const content = {
    en: {
      title: 'Explore Bangladesh',
      subtitle: 'Discover everything you need to know about Bangladesh',
      comingSoon: 'Coming Soon',
      categories: [
        {
          title: 'Education',
          description: 'Universities, schools, and learning opportunities across Bangladesh',
          icon: GraduationCap
        },
        {
          title: 'Travel & Tourism',
          description: 'Beautiful destinations, travel tips, and hidden gems to explore',
          icon: MapPin
        },
        {
          title: 'Culture & Arts',
          description: 'Rich cultural heritage, traditional arts, music, and festivals',
          icon: Palette
        },
        {
          title: 'History',
          description: 'Ancient civilizations, liberation war, and historical landmarks',
          icon: Clock
        },
        {
          title: 'Government',
          description: 'Government services, policies, and administrative information',
          icon: Building
        },
        {
          title: 'Society',
          description: 'Social customs, traditions, and community life in Bangladesh',
          icon: Users
        }
      ]
    },
    bn: {
      title: 'বাংলাদেশ অন্বেষণ করুন',
      subtitle: 'বাংলাদেশ সম্পর্কে যা জানা প্রয়োজন সব কিছু আবিষ্কার করুন',
      comingSoon: 'শীঘ্রই আসছে',
      categories: [
        {
          title: 'শিক্ষা',
          description: 'বাংলাদেশ জুড়ে বিশ্ববিদ্যালয়, স্কুল এবং শেখার সুযোগ',
          icon: GraduationCap
        },
        {
          title: 'ভ্রমণ ও পর্যটন',
          description: 'সুন্দর গন্তব্য, ভ্রমণের টিপস এবং অন্বেষণের জন্য লুকানো রত্ন',
          icon: MapPin
        },
        {
          title: 'সংস্কৃতি ও শিল্প',
          description: 'সমৃদ্ধ সাংস্কৃতিক ঐতিহ্য, ঐতিহ্যবাহী শিল্প, সঙ্গীত এবং উৎসব',
          icon: Palette
        },
        {
          title: 'ইতিহাস',
          description: 'প্রাচীন সভ্যতা, মুক্তিযুদ্ধ এবং ঐতিহাসিক নিদর্শন',
          icon: Clock
        },
        {
          title: 'সরকার',
          description: 'সরকারি সেবা, নীতিমালা এবং প্রশাসনিক তথ্য',
          icon: Building
        },
        {
          title: 'সমাজ',
          description: 'সামাজিক রীতিনীতি, ঐতিহ্য এবং বাংলাদেশের সামাজিক জীবন',
          icon: Users
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="guides" className="py-20 bg-gradient-to-b from-white to-green-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-3xl md:text-5xl font-bold text-bangladesh-green mb-4 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
            {t.title}
          </h2>
          <p className={`text-lg md:text-xl text-gray-600 max-w-2xl mx-auto ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-bangladesh-green to-bangladesh-green-light rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-white" size={28} />
                </div>
                
                <h3 className={`text-xl font-bold text-gray-800 mb-3 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                  {category.title}
                </h3>
                
                <p className={`text-gray-600 mb-6 leading-relaxed ${language === 'bn' ? 'font-bengali text-sm' : 'font-english'}`}>
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`inline-block bg-bangladesh-green/10 text-bangladesh-green px-4 py-2 rounded-full text-sm font-medium ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                    {t.comingSoon}
                  </span>
                  <div className="w-8 h-8 bg-bangladesh-green/10 rounded-full flex items-center justify-center group-hover:bg-bangladesh-green group-hover:text-white transition-colors duration-300">
                    <span className="text-bangladesh-green group-hover:text-white">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
