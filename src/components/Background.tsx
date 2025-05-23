
import { useEffect, useState } from 'react';

const Background = () => {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; delay: string; size: string }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: `${Math.random() * 3 + 1}px`
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star absolute"
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
