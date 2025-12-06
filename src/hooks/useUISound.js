import useSound from 'use-sound';

// Ses dosyalarının yolu (public klasöründe olacaklar)
const hoverSound = '/sounds/hover.mp3';
const clickSound = '/sounds/click.mp3';

export const useUISound = () => {
  const [playHover] = useSound(hoverSound, { volume: 0.2 }); // Ses kısık olsun, rahatsız etmesin
  const [playClick] = useSound(clickSound, { volume: 0.5 });

  return { playHover, playClick };
};