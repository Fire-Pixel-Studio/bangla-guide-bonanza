
import { useEffect, useState } from 'react';

const Background = () => {
  const [stars, setStars] = useState<{ 
    id: number; 
    top: string; 
    left: string; 
    delay: string; 
    size: string;
    color: string;
  }[]>([]);

  useEffect(() => {
    const colors = ['#E6C3FF', '#98FB98', '#FFD700'];
    const newStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: `${Math.random() * 4 + 2}px`,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star absolute"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            animationDelay: star.delay
          }}
        />
      ))}
    </div>
  );
};

export default Background;
