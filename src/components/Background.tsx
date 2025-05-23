
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Background = () => {
  const { theme } = useTheme();
  const [stars, setStars] = useState<{ 
    id: number; 
    top: string; 
    left: string; 
    delay: string; 
    size: string;
    color: string;
    speed: string;
    direction: 'left' | 'right' | 'up' | 'down';
  }[]>([]);

  useEffect(() => {
    const colors = ['#E6C3FF', '#98FB98', '#FFD700'];
    const directions: ('left' | 'right' | 'up' | 'down')[] = ['left', 'right', 'up', 'down'];
    
    const newStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: `${Math.random() * 4 + 2}px`,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: `${Math.random() * 15 + 10}s`,
      direction: directions[Math.floor(Math.random() * directions.length)]
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star absolute ${star.direction}-moving-star`}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            animationDelay: star.delay,
            animationDuration: star.speed
          }}
        />
      ))}
    </div>
  );
};

export default Background;
