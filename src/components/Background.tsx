
import { cn } from "@/lib/utils";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23006A4E%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0 0c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      
      {/* Moving Stars */}
      {[...Array(120)].map((_, i) => (
        <div
          key={i}
          className={`absolute star ${
            i % 4 === 0 ? 'up-moving-star' : 
            i % 4 === 1 ? 'down-moving-star' : 
            i % 4 === 2 ? 'left-moving-star' : 
            'right-moving-star'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
            width: `${3 + Math.random() * 6}px`,
            height: `${3 + Math.random() * 6}px`,
            color: i % 5 === 0 ? '#A855F7' : 
                   i % 5 === 1 ? '#10B981' : 
                   i % 5 === 2 ? '#000000' : 
                   i % 5 === 3 ? '#FFD700' : 
                   '#FFFFFF'
          }}
        />
      ))}
    </div>
  );
};

export default Background;
