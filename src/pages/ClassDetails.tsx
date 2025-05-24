import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import classesData from '../data/classesData.json';
import { Book, ArrowLeft, ExternalLink, Bookmark } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from '../components/Background';
import AdBanner from '../components/AdBanner';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useBookmark } from '../contexts/BookmarkContext';
import useButtonSound from '../hooks/useButtonSound';

interface ClassDetails {
  id: string;
  name: {
    en: string;
    bn: string;
  };
  subjects: {
    id: string;
    name: {
      en: string;
      bn: string;
    };
    pdf: string;
  }[];
}

const ClassDetails = () => {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const { classId } = useParams<{ classId: string }>();
  const [classDetails, setClassDetails] = useState<ClassDetails | null>(null);
  const { addBookmark, removeBookmark, isBookmarked } = useBookmark();
  const playButtonSound = useButtonSound();

  const handleLanguageChange = (lang: 'en' | 'bn') => {
    setLanguage(lang);
  };

  useEffect(() => {
    // Find the class details from the JSON file
    const foundClass = classesData.classes.find(c => c.id === classId);
    if (foundClass) {
      setClassDetails(foundClass);
    }
  }, [classId]);

  // Handle Guide view button click
  const handleViewGuide = (subject: any) => {
    playButtonSound();
    // Open Guide in new tab (when actual PDFs are uploaded)
    window.open(subject.pdf, '_blank');
    
    toast.info(
      language === 'bn' 
        ? `${subject.name[language]} গাইড খোলা হচ্ছে...` 
        : `Opening ${subject.name[language]} Guide...`,
      {
        description: language === 'bn' 
          ? 'গাইড নতুন ট্যাবে খুলবে।' 
          : 'Guide will open in a new tab.',
        duration: 3000
      }
    );
  };

  const handleBookmarkToggle = (subject: any) => {
    playButtonSound();
    if (isBookmarked(subject.id)) {
      removeBookmark(subject.id);
    } else {
      addBookmark(subject.id);
    }
  };

  if (!classDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Background />
        <AdBanner />
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-bangladesh-green/20 dark:bg-bangladesh-green-light/20 mb-4"></div>
          <div className="h-6 w-48 rounded-md bg-bangladesh-green/20 dark:bg-bangladesh-green-light/20"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 relative">
      <Background />
      <AdBanner />

      <Header language={language} onLanguageChange={handleLanguageChange} />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="mb-6">
          <Link to="/" className="flex items-center text-bangladesh-green hover:text-bangladesh-green-light dark:text-bangladesh-green-light dark:hover:text-white transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            <span className={language === 'bn' ? 'font-bengali' : ''}>
              {language === 'bn' ? 'ফিরে যান' : 'Back to Home'}
            </span>
          </Link>
        </div>

        <div className="text-center mb-10 animate-fade-in">
          <h1 className={`text-3xl md:text-5xl font-bold text-bangladesh-green dark:text-bangladesh-green-light mb-4 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
            {classDetails.name[language]}
          </h1>
          <p className={`text-lg text-gray-600 dark:text-gray-300 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
            {language === 'bn' 
              ? `${classDetails.name.bn} এর জন্য অধ্যয়ন সামগ্রী` 
              : `Study materials for ${classDetails.name.en}`}
          </p>
        </div>

        <Tabs defaultValue="bn" className="w-full mb-12">
          <TabsList className="w-full flex justify-center mb-8">
            <TabsTrigger value="bn" className={`px-8 py-3 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {language === 'bn' ? 'বাংলা সংস্করণ' : 'Bengali Version'}
            </TabsTrigger>
            <TabsTrigger value="en" className={`px-8 py-3 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {language === 'bn' ? 'ইংরেজি সংস্করণ' : 'English Version'}
            </TabsTrigger>
          </TabsList>

          {/* Bengali Version Content */}
          <TabsContent value="bn" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {classDetails.subjects.map((subject, idx) => (
                <Card key={subject.id + "-bn"} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer bg-gradient-to-br from-white to-bangladesh-green/5 dark:from-gray-800 dark:to-bangladesh-green/10 border-2 border-bangladesh-green/30 dark:border-bangladesh-green-light/40 overflow-hidden rounded-3xl shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-bangladesh-green/20 to-purple-200/30 dark:from-bangladesh-green/30 dark:to-purple-900/40 rounded-t-3xl p-6">
                    <CardTitle className={`flex items-center text-bangladesh-green dark:text-bangladesh-green-light font-bold text-xl ${language === 'bn' ? 'font-bengali' : ''}`}>
                      <Book className="mr-3 group-hover:scale-110 transition-transform duration-300" size={24} />
                      {subject.name.bn}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 p-6">
                    <p className={`text-gray-600 dark:text-gray-300 mb-6 leading-relaxed ${language === 'bn' ? 'font-bengali text-base' : ''}`}>
                      {language === 'bn' 
                        ? `${subject.name.bn} গাইড দেখুন।` 
                        : `View ${subject.name.bn} guide.`}
                    </p>
                    <button
                      onClick={() => handleBookmarkToggle(subject)}
                      className={`mb-6 flex items-center text-sm transition-all duration-300 hover:scale-105 ${isBookmarked(subject.id) ? 'text-yellow-500' : 'text-gray-500 hover:text-yellow-500'}`}
                    >
                      <Bookmark className="w-4 h-4 mr-2" />
                      {language === 'bn' 
                        ? (isBookmarked(subject.id) ? 'বুকমার্ক করা আছে' : 'বুকমার্ক করুন')
                        : (isBookmarked(subject.id) ? 'Bookmarked' : 'Bookmark')}
                    </button>
                    
                    <Button 
                      onClick={() => handleViewGuide(subject)}
                      className={`w-full bg-gradient-to-r from-bangladesh-green to-bangladesh-green-light hover:from-bangladesh-green-light hover:to-bangladesh-green text-white transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl rounded-2xl py-3 font-semibold ${language === 'bn' ? 'font-bengali' : ''}`}
                    >
                      <ExternalLink size={18} className="mr-2" />
                      {language === 'bn' ? 'গাইড দেখুন' : 'View Guide'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* English Version Content - Coming Soon */}
          <TabsContent value="en" className="animate-fade-in">
            <div className="flex flex-col items-center justify-center py-20">
              <div className="text-center bg-gradient-to-br from-bangladesh-green/10 to-purple-100/20 dark:from-bangladesh-green/20 dark:to-purple-900/20 rounded-3xl p-12 border-2 border-bangladesh-green/20 shadow-xl">
                <Book className="w-24 h-24 text-bangladesh-green dark:text-bangladesh-green-light mb-6 mx-auto animate-pulse" />
                <h2 className={`text-3xl font-bold text-bangladesh-green dark:text-bangladesh-green-light mb-4 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                  {language === 'bn' ? 'শীঘ্রই আসছে' : 'Coming Soon'}
                </h2>
                <p className={`text-lg text-gray-600 dark:text-gray-300 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                  {language === 'bn' 
                    ? 'ইংরেজি সংস্করণ শীঘ্রই উপলব্ধ হবে।' 
                    : 'English version will be available soon.'}
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer language={language} />
    </div>
  );
};

export default ClassDetails;