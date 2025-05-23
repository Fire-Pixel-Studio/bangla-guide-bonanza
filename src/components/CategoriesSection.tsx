
import { GraduationCap, BookOpen, Book } from 'lucide-react';

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
          title: 'Class 9',
          description: 'Study guides and materials for Class 9 students',
          icon: GraduationCap
        },
        {
          title: 'Class 10',
          description: 'Study guides and materials for Class 10 students',
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
          title: '৯ম শ্রেণী',
          description: '৯ম শ্রেণীর শিক্ষার্থীদের জন্য অধ্যয়ন গাইড এবং উপকরণ',
          icon: GraduationCap
        },
        {
          title: '১০ম শ্রেণী',
          description: '১০ম শ্রেণীর শিক্ষার্থীদের জন্য অধ্যয়ন গাইড এবং উপকরণ',
          icon: GraduationCap
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {t.classes.map((classItem, index) => {
            const IconComponent = classItem.icon;
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
                  {classItem.title}
                </h3>
                
                <p className={`text-gray-600 mb-6 leading-relaxed ${language === 'bn' ? 'font-bengali text-sm' : 'font-english'}`}>
                  {classItem.description}
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
