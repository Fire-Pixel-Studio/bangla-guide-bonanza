
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';

interface RecentItem {
  id: string;
  name: {
    en: string;
    bn: string;
  };
  timestamp: number;
}

interface RecentlyViewedProps {
  language: 'en' | 'bn';
}

const RecentlyViewed = ({ language }: RecentlyViewedProps) => {
  const [recentItems, setRecentItems] = useState<RecentItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('recentlyViewed');
    if (stored) {
      setRecentItems(JSON.parse(stored));
    }
  }, []);

  if (recentItems.length === 0) return null;

  return (
    <div className="my-8">
      <h2 className={`text-2xl font-bold mb-4 text-bangladesh-green dark:text-bangladesh-green-light ${language === 'bn' ? 'font-bengali' : ''}`}>
        {language === 'bn' ? 'সম্প্রতি দেখা হয়েছে' : 'Recently Viewed'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recentItems.slice(0, 3).map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {item.name[language]}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                {new Date(item.timestamp).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
