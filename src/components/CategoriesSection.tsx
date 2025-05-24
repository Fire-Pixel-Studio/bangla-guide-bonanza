
import { GraduationCap, BookOpen, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoriesSectionProps {
  language: 'en' | 'bn';
}

const CategoriesSection = ({ language }: CategoriesSectionProps) => {
  const content = {
    en: {
      title: 'Class Guides',
      subtitle: 'Find study materials for every class from 1 to 10',
      comingSoon: 'Explore',
      classes: [
        {
          title: 'Class 1',
          description: 'Study guides and materials for Class 1 students',
          icon: BookOpen
        },
        {
          title: 'Class 2',
          description: 'Study guides and materials for Class 2 students',
          icon: BookOpen
        },
        {
          title: 'Class 3',
          description: 'Study guides and materials for Class 3 students',
          icon: BookOpen
        },
        {
          title: 'Class 4',
          description: 'Study guides and materials for Class 4 students',
          icon: Book
        },
        {
          title: 'Class 5',
          description: 'Study guides and materials for Class 5 students',
          icon: Book
        },
        {
          title: 'Class 6',
          description: 'Study guides and materials for Class 6 students',
          icon: Book
        },
        {
          title: 'Class 7',
          description: 'Study guides and materials for Class 7 students',
          icon: GraduationCap
        },
        {
          title: 'Class 8',
          description: 'Study guides and materials for Class 8 students',
          icon: GraduationCap
        },
        {
          title: 'Class 9-10',
          description: 'Study guides and materials for Class 9-10 students',
          icon: GraduationCap
        }
      ]
    },
    bn: {
      title: 'শ্রেণী গাইডস',
      subtitle: '১ম থেকে ১০ম শ্রেণী পর্যন্ত প্রতিটি শ্রেণীর জন্য অধ্যয়ন সামগ্রী খুঁজুন',
      comingSoon: 'অন্বেষণ করুন',
      classes: [
        {
          title: '১ম শ্রেণী',
          description: '১ম শ্রেণীর শিক্ষার্থীদের জন্য অধ্যয়ন গাইড এবং উপকরণ',
          icon: BookOpen
        },
        {
          title: '২য় শ্রেণী',
          description: '২য় শ্রেণীর শিক্ষার্থীদের জন্য অধ্যয়ন গাইড এবং উপকরণ',
          icon: BookOpen
        },
        {
          title: '৩য় শ্রেণী',
          description: '৩য় শ্রেণীর শিক্ষার্থীদের জন্য অধ্যয়ন গাইড এবং উপকরণ',
          icon: BookOpen
        },
        {
          title: '৪র্থ শ্রেণী',
          description: '৪র্থ শ্রেণীর শিক্ষার্থীদের জন্য অধ্যয়ন গাইড এবং উপকরণ',
          icon: Book
        },
        {
          title: '৫ম শ্রেণী',
          description: '৫ম শ্রেণীর শিক্ষার্থীদের জন্য অধ্যয়ন গাইড এবং উপকরণ',
          icon: Book
        },
        {
          title: '৬ষ্ঠ শ্রেণী',
          description: '৬ষ্ঠ শ্রেণীর শিক্ষার্থীদের জন্য অধ্যয়ন গাইড এবং উপকরণ',
          icon: Book
        },
        {
          title: '৭ম শ্রেণী',
          description: '৭ম শ্রেণীর শিক্ষার্থীদের জন্য অধ্যয়ন গাইড এবং উপকরণ',
          icon: GraduationCap
        },
        {
          title: '৮ম শ্রেণী',
          description: '৮ম শ্রেণীর শিক্ষার্থীদের জন্য অধ্যয়ন গাইড এবং উপকরণ',
          icon: GraduationCap
        },
        {
          title: '৯ম-১০ম শ্রেণী',
          description: '৯ম-১০ম শ্রেণীর শিক্ষার্থীদের জন্য অধ্যয়ন গাইড এবং উপকরণ',
          icon: GraduationCap
        }
      ]
    }
  };

  const t = content[language];

  const getClassId = (index: number) => {
    if (index < 8) {
      return `class${index + 1}`;
    } else {
      return 'class9-10';
    }
  };

  return (
    <section id="guides" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative Star Dots Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Generate random star dots */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <div 
              className="rounded-full bg-bangladesh-green/20 dark:bg-bangladesh-green-light/30"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Background with Bangladesh landscape pattern */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-gradient-to-br from-bangladesh-green/5 via-green-50 to-white">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full dark:bg-[url('data:image/svg+xml,%3Csvg width=%2760%22 height=%2760%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23FFFFFF%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0 0c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-[url('data:image/svg+xml,%3Csvg width=%2760%22 height=%2760%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23006A4E%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0 0c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-3xl md:text-5xl font-bold text-bangladesh-green dark:text-bangladesh-green-light mb-4 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
            {t.title}
          </h2>
          <p className={`text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {t.classes.map((classItem, index) => {
            const IconComponent = classItem.icon;
            const classId = getClassId(index);
            
            return (
              <Link 
                to={`/class/${classId}`}
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700 animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card decorative dots */}
                <div className="absolute top-2 right-2 opacity-20">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="inline-block w-1 h-1 bg-bangladesh-green dark:bg-bangladesh-green-light rounded-full mr-1 animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-bangladesh-green to-bangladesh-green-light rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-white" size={28} />
                </div>
                
                <h3 className={`text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                  {classItem.title}
                </h3>
                
                <p className={`text-gray-600 dark:text-gray-300 mb-6 leading-relaxed ${language === 'bn' ? 'font-bengali text-sm' : 'font-english'}`}>
                  {classItem.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`inline-block bg-bangladesh-green/10 dark:bg-bangladesh-green/20 text-bangladesh-green dark:text-bangladesh-green-light px-4 py-2 rounded-full text-sm font-medium ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                    {t.comingSoon}
                  </span>
                  <div className="w-8 h-8 bg-bangladesh-green/10 dark:bg-bangladesh-green/20 rounded-full flex items-center justify-center group-hover:bg-bangladesh-green group-hover:text-white transition-colors duration-300">
                    <span className="text-bangladesh-green dark:text-bangladesh-green-light group-hover:text-white">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
