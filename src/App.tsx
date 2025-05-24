
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Background from "@/components/Background";
import { BookmarkProvider } from './contexts/BookmarkContext';
import Index from "./pages/Index";
import ClassDetails from "./pages/ClassDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <BookmarkProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-background">
            <Background />
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/class/:classId" element={<ClassDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </BookmarkProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
