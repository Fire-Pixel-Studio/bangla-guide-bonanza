
import { useEffect, useState } from 'react';

const Background = () => {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; delay: string }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`
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
            animationDelay: star.delay
          }}
        />
      ))}
    </div>
  );
};

export default Background;
