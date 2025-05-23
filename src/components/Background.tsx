
import { useEffect, useState } from 'react';

const Background = () => {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; delay: string; size: string }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      size: `${Math.random() * 2 + 1}px`
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="app-background">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            width: star.size,
            height: star.size
          }}
        />
      ))}
    </div>
  );
};

export default Background;
