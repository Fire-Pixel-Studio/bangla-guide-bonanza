
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import classesData from '../data/classesData.json';
import { Book, ArrowLeft, ExternalLink, Bookmark } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useBookmark } from '../contexts/BookmarkContext';
import { useButtonSound } from '../hooks/useButtonSound';

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

  // Handle PDF view button click
  const handleViewPdf = (subject: any) => {
    playButtonSound();
    // Open PDF in new tab (when actual PDFs are uploaded)
    window.open(subject.pdf, '_blank');
    
    toast.info(
      language === 'bn' 
        ? `${subject.name[language]} পিডিএফ খোলা হচ্ছে...` 
        : `Opening ${subject.name[language]} PDF...`,
      {
        description: language === 'bn' 
          ? 'পিডিএফ নতুন ট্যাবে খুলবে।' 
          : 'PDF will open in a new tab.',
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
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-bangladesh-green/20 dark:bg-bangladesh-green-light/20 mb-4"></div>
          <div className="h-6 w-48 rounded-md bg-bangladesh-green/20 dark:bg-bangladesh-green-light/20"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Background with animated stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(80)].map((_, i) => (
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
              className={`rounded-full ${
                i % 3 === 0 ? 'bg-purple-400/30' : 
                i % 3 === 1 ? 'bg-bangladesh-green/30' : 
                'bg-black/20 dark:bg-white/20'
              }`}
              style={{
                width: `${6 + Math.random() * 12}px`,
                height: `${6 + Math.random() * 12}px`,
              }}
            />
          </div>
        ))}
      </div>

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {classDetails.subjects.map((subject, idx) => (
                <Card key={subject.id + "-bn"} className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-white dark:bg-gray-800 border-2 border-bangladesh-green/20 dark:border-gray-700 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-bangladesh-green/10 to-purple-100/20 dark:from-bangladesh-green/20 dark:to-purple-900/20 rounded-t-lg">
                    <CardTitle className={`flex items-center text-bangladesh-green dark:text-bangladesh-green-light ${language === 'bn' ? 'font-bengali' : ''}`}>
                      <Book className="mr-2" size={20} />
                      {subject.name.bn}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className={`text-gray-600 dark:text-gray-300 mb-4 ${language === 'bn' ? 'font-bengali text-sm' : ''}`}>
                      {language === 'bn' 
                        ? `${subject.name.bn} বইয়ের পিডিএফ দেখুন।` 
                        : `View PDF of ${subject.name.bn} book.`}
                    </p>
                    <button
                      onClick={() => handleBookmarkToggle(subject)}
                      className={`mb-4 flex items-center text-sm transition-colors ${isBookmarked(subject.id) ? 'text-yellow-500' : 'text-gray-500 hover:text-yellow-500'}`}
                    >
                      <Bookmark className="w-4 h-4 mr-1" />
                      {language === 'bn' 
                        ? (isBookmarked(subject.id) ? 'বুকমার্ক করা আছে' : 'বুকমার্ক করুন')
                        : (isBookmarked(subject.id) ? 'Bookmarked' : 'Bookmark')}
                    </button>
                    
                    <Button 
                      onClick={() => handleViewPdf(subject)}
                      className={`w-full bg-bangladesh-green hover:bg-bangladesh-green-light text-white transition-all duration-300 hover:scale-105 ${language === 'bn' ? 'font-bengali' : ''}`}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      {language === 'bn' ? 'পিডিএফ দেখুন' : 'View PDF'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* English Version Content */}
          <TabsContent value="en" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {classDetails.subjects.map((subject, idx) => (
                <Card key={subject.id + "-en"} className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-white dark:bg-gray-800 border-2 border-bangladesh-green/20 dark:border-gray-700 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-bangladesh-green/10 to-purple-100/20 dark:from-bangladesh-green/20 dark:to-purple-900/20 rounded-t-lg">
                    <CardTitle className="flex items-center text-bangladesh-green dark:text-bangladesh-green-light">
                      <Book className="mr-2" size={20} />
                      {subject.name.en}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {language === 'bn' 
                        ? `${subject.name.en} বইয়ের পিডিএফ দেখুন।` 
                        : `View PDF of ${subject.name.en} book.`}
                    </p>
                    <button
                      onClick={() => handleBookmarkToggle(subject)}
                      className={`mb-4 flex items-center text-sm transition-colors ${isBookmarked(subject.id) ? 'text-yellow-500' : 'text-gray-500 hover:text-yellow-500'}`}
                    >
                      <Bookmark className="w-4 h-4 mr-1" />
                      {language === 'bn' 
                        ? (isBookmarked(subject.id) ? 'বুকমার্ক করা আছে' : 'বুকমার্ক করুন')
                        : (isBookmarked(subject.id) ? 'Bookmarked' : 'Bookmark')}
                    </button>

                    <Button 
                      onClick={() => handleViewPdf(subject)}
                      className={`w-full bg-bangladesh-green hover:bg-bangladesh-green-light text-white transition-all duration-300 hover:scale-105 ${language === 'bn' ? 'font-bengali' : ''}`}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      {language === 'bn' ? 'পিডিএফ দেখুন' : 'View PDF'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer language={language} />
    </div>
  );
};

export default ClassDetails;
