import { useSpring, animated } from '@react-spring/web';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';

interface LikeButtonProps {
  isLiked: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ isLiked, onClick, style }) => {
  const [clickSpring, api] = useSpring(() => ({ scale: 1 }));

  const handleClick = () => {
    // Trigger click animation
    api.start({
      scale: 0.9,
      config: { duration: 75 },
      onRest: () => api.start({ scale: 1, config: { duration: 75 } }),
    });
    onClick();
  };

  const Icon = isLiked ? AiFillLike : AiOutlineLike;

  return (
    <animated.button
      onClick={handleClick}
      style={{
        ...style,
        transform: clickSpring.scale.to((s) => `scale(${s})`),
      }}
      className={`w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer transition-colors ${
        isLiked ? 'bg-buttonBlue text-white' : 'bg-buttonGrey text-white'
      }`}
    >
      <Icon size={24} />
    </animated.button>
  );
};
