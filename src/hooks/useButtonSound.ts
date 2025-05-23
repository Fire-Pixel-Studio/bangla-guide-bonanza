
import useSound from 'use-sound';

const useButtonSound = () => {
  const [playClick] = useSound('/click.mp3', { volume: 0.5 });
  
  const playButtonSound = () => {
    playClick();
  };

  return playButtonSound;
};

export default useButtonSound;
