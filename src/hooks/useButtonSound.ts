
import { useCallback } from 'react';

const useButtonSound = () => {
  const playSound = useCallback(() => {
    const audio = new Audio('/click.mp3');
    audio.volume = 0.2;
    audio.play().catch(() => {});
  }, []);

  return playSound;
};

export default useButtonSound;
