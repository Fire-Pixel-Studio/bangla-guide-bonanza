
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import classesData from '../data/classesData.json';
import { Book, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

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

const ClassDetails = () => {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const { classId } = useParams<{ classId: string }>();
  const [classDetails, setClassDetails] = useState<ClassDetails | null>(null);

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

  if (!classDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading class details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Link to="/" className="flex items-center text-bangladesh-green hover:text-bangladesh-green-light transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            <span className={language === 'bn' ? 'font-bengali' : ''}>
              {language === 'bn' ? 'ফিরে যান' : 'Back to Home'}
            </span>
          </Link>
        </div>

        <div className="text-center mb-10 animate-fade-in">
          <h1 className={`text-3xl md:text-5xl font-bold text-bangladesh-green mb-4 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
            {classDetails.name[language]}
          </h1>
          <p className={`text-lg text-gray-600 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
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
                <Card key={subject.id + "-bn"} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-white">
                  <CardHeader className="bg-bangladesh-green/10 rounded-t-lg">
                    <CardTitle className={`flex items-center text-bangladesh-green ${language === 'bn' ? 'font-bengali' : ''}`}>
                      <Book className="mr-2" size={20} />
                      {subject.name.bn}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className={`text-gray-600 mb-4 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn' 
                        ? `${subject.name.bn} বইয়ের পিডিএফ ডাউনলোড করুন।` 
                        : `Download PDF of ${subject.name.bn} book.`}
                    </p>
                    <Button className={`w-full ${language === 'bn' ? 'font-bengali' : ''}`} variant="outline">
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
                <Card key={subject.id + "-en"} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-white">
                  <CardHeader className="bg-bangladesh-green/10 rounded-t-lg">
                    <CardTitle className="flex items-center text-bangladesh-green">
                      <Book className="mr-2" size={20} />
                      {subject.name.en}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-600 mb-4">
                      {language === 'bn' 
                        ? `${subject.name.en} বইয়ের পিডিএফ ডাউনলোড করুন।` 
                        : `Download PDF of ${subject.name.en} book.`}
                    </p>
                    <Button className={`w-full ${language === 'bn' ? 'font-bengali' : ''}`} variant="outline">
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
