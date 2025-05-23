
import { useEffect, useState } from 'react';

const Background = () => {
  const [stars, setStars] = useState<{ 
    id: number; 
    top: string; 
    left: string; 
    delay: string; 
    size: string;
    color: string;
    opacity: string;
  }[]>([]);

  useEffect(() => {
    const colors = ['#FFD700', '#FFFFFF', '#98FB98'];
    const newStars = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      size: `${Math.random() * 3 + 1}px`,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: `${Math.random() * 0.7 + 0.3}`
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star absolute rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            opacity: star.opacity,
            animationDelay: star.delay,
            boxShadow: `0 0 ${star.size} ${star.color}`
          }}
        />
      ))}
    </div>
  );
};

export default Background;
