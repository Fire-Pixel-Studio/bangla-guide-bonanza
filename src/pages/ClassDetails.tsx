import { useState, useEffect, createContext, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import classesData from '../data/classesData.json';
import { Book, ArrowLeft, Download, ExternalLink, Bookmark } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

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
  }[];
}

// Create Bookmark Context
interface BookmarkContextType {
  bookmarkedItems: string[];
  addBookmark: (id: string) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

// Bookmark Provider Component
export const BookmarkProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([]);

  useEffect(() => {
    // Load bookmarked items from local storage on component mount
    const storedBookmarks = localStorage.getItem('bookmarks');
    if (storedBookmarks) {
      setBookmarkedItems(JSON.parse(storedBookmarks));
    }
  }, []);

  useEffect(() => {
    // Save bookmarked items to local storage whenever it changes
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkedItems));
  }, [bookmarkedItems]);

  const addBookmark = (id: string) => {
    setBookmarkedItems(prev => {
      if (!prev.includes(id)) {
        return [...prev, id];
      }
      return prev;
    });
  };

  const removeBookmark = (id: string) => {
    setBookmarkedItems(prev => prev.filter(item => item !== id));
  };

  const isBookmarked = (id: string) => bookmarkedItems.includes(id);

  return (
    <BookmarkContext.Provider value={{ bookmarkedItems, addBookmark, removeBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
};

// Hook to use Bookmark Context
export const useBookmark = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmark must be used within a BookmarkProvider");
  }
  return context;
};

const ClassDetails = () => {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const { classId } = useParams<{ classId: string }>();
  const [classDetails, setClassDetails] = useState<ClassDetails | null>(null);
  const { addBookmark, removeBookmark, isBookmarked } = useBookmark();

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
  const handleViewPdf = (subjectName: string) => {
    toast.info(
      language === 'bn' 
        ? `${subjectName} পিডিএফ লোড হচ্ছে...` 
        : `Loading ${subjectName} PDF...`,
      {
        description: language === 'bn' 
          ? 'পিডিএফ শীঘ্রই উপলব্ধ হবে।' 
          : 'PDFs will be available soon.',
        duration: 3000
      }
    );
  };

  // Handle PDF download button click
  const handleDownloadPdf = (subjectName: string) => {
    toast.info(
      language === 'bn' 
        ? `${subjectName} পিডিএফ ডাউনলোড হচ্ছে...` 
        : `Downloading ${subjectName} PDF...`,
      {
        description: language === 'bn' 
          ? 'পিডিএফ শীঘ্রই উপলব্ধ হবে।' 
          : 'PDFs will be available soon.',
        duration: 3000
      }
    );
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
      <Header language={language} onLanguageChange={handleLanguageChange} />

      <div className="container mx-auto px-4 py-12">
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
                <Card key={subject.id + "-bn"} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-white dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
                  <CardHeader className="bg-bangladesh-green/10 dark:bg-bangladesh-green/20 rounded-t-lg">
                    <CardTitle className={`flex items-center text-bangladesh-green dark:text-bangladesh-green-light ${language === 'bn' ? 'font-bengali' : ''}`}>
                      <Book className="mr-2" size={20} />
                      {subject.name.bn}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className={`text-gray-600 dark:text-gray-300 mb-4 ${language === 'bn' ? 'font-bengali text-sm' : ''}`}>
                      {language === 'bn' 
                        ? `${subject.name.bn} বইয়ের পিডিএফ ডাউনলোড করুন।` 
                        : `Download PDF of ${subject.name.bn} book.`}
                    </p>
                    <button
                      onClick={() => isBookmarked(subject.id) ? removeBookmark(subject.id) : addBookmark(subject.id)}
                      className={`mb-4 flex items-center text-sm ${isBookmarked(subject.id) ? 'text-yellow-500' : 'text-gray-500'}`}
                    >
                      <Bookmark className="w-4 h-4 mr-1" />
                      {language === 'bn' 
                        ? (isBookmarked(subject.id) ? 'বুকমার্ক করা আছে' : 'বুকমার্ক করুন')
                        : (isBookmarked(subject.id) ? 'Bookmarked' : 'Bookmark')}
                    </button>
                  </CardContent>
                  <div className="grid grid-cols-2 gap-2 p-4">
                    <Button 
                      onClick={() => handleViewPdf(subject.name.bn)}
                      className={`w-full ${language === 'bn' ? 'font-bengali' : ''}`} 
                      variant="outline"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      {language === 'bn' ? 'দেখুন' : 'View'}
                    </Button>

                    <Button 
                      onClick={() => handleDownloadPdf(subject.name.bn)}
                      className={`w-full ${language === 'bn' ? 'font-bengali' : ''}`}
                    >
                      <Download size={16} className="mr-1" />
                      {language === 'bn' ? 'ডাউনলোড' : 'Download'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* English Version Content */}
          <TabsContent value="en" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {classDetails.subjects.map((subject, idx) => (
                <Card key={subject.id + "-en"} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-white dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
                  <CardHeader className="bg-bangladesh-green/10 dark:bg-bangladesh-green/20 rounded-t-lg">
                    <CardTitle className="flex items-center text-bangladesh-green dark:text-bangladesh-green-light">
                      <Book className="mr-2" size={20} />
                      {subject.name.en}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {language === 'bn' 
                        ? `${subject.name.en} বইয়ের পিডিএফ ডাউনলোড করুন।` 
                        : `Download PDF of ${subject.name.en} book.`}
                    </p>
                    <button
                      onClick={() => isBookmarked(subject.id) ? removeBookmark(subject.id) : addBookmark(subject.id)}
                      className={`mb-4 flex items-center text-sm ${isBookmarked(subject.id) ? 'text-yellow-500' : 'text-gray-500'}`}
                    >
                      <Bookmark className="w-4 h-4 mr-1" />
                      {language === 'bn' 
                        ? (isBookmarked(subject.id) ? 'বুকমার্ক করা আছে' : 'বুকমার্ক করুন')
                        : (isBookmarked(subject.id) ? 'Bookmarked' : 'Bookmark')}
                    </button>
                  </CardContent>
                  <div className="grid grid-cols-2 gap-2 p-4">
                    <Button 
                      onClick={() => handleViewPdf(subject.name.en)}
                      className={`w-full ${language === 'bn' ? 'font-bengali' : ''}`} 
                      variant="outline"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      {language === 'bn' ? 'দেখুন' : 'View'}
                    </Button>

                    <Button 
                      onClick={() => handleDownloadPdf(subject.name.en)}
                      className={`w-full ${language === 'bn' ? 'font-bengali' : ''}`}
                    >
                      <Download size={16} className="mr-1" />
                      {language === 'bn' ? 'ডাউনলোড' : 'Download'}
                    </Button>
                  </div>
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