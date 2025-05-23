
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useBookmark } from "@/contexts/BookmarkContext";
import { Bookmark, X } from "lucide-react";
import { Link } from "react-router-dom";

interface BookmarksDialogProps {
  language: 'en' | 'bn';
}

const BookmarksDialog = ({ language }: BookmarksDialogProps) => {
  const { bookmarkedItems, removeBookmark } = useBookmark();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bookmark className="h-5 w-5" />
          {bookmarkedItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-bangladesh-green text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
              {bookmarkedItems.length}
            </span>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={language === 'bn' ? 'font-bengali' : ''}>
            {language === 'bn' ? 'বুকমার্কস' : 'Bookmarks'}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          {bookmarkedItems.length === 0 ? (
            <p className={`text-center text-gray-500 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {language === 'bn' ? 'কোন বুকমার্ক নেই' : 'No bookmarks yet'}
            </p>
          ) : (
            bookmarkedItems.map((id) => (
              <div key={id} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <Link to={`/subject/${id}`} className="flex-1">
                  <span className={`${language === 'bn' ? 'font-bengali' : ''}`}>
                    {id}
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeBookmark(id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookmarksDialog;
