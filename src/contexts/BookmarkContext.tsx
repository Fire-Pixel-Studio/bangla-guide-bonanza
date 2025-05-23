
import React, { createContext, useContext, useState, useEffect } from 'react';

interface BookmarkContextType {
  bookmarks: string[];
  addBookmark: (subjectId: string) => void;
  removeBookmark: (subjectId: string) => void;
  isBookmarked: (subjectId: string) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('bookmarks');
    if (stored) {
      setBookmarks(JSON.parse(stored));
    }
  }, []);

  const addBookmark = (subjectId: string) => {
    setBookmarks((prev) => {
      const newBookmarks = [...prev, subjectId];
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  const removeBookmark = (subjectId: string) => {
    setBookmarks((prev) => {
      const newBookmarks = prev.filter(id => id !== subjectId);
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  const isBookmarked = (subjectId: string) => bookmarks.includes(subjectId);

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};
