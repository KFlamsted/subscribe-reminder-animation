import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';

interface LikeButtonProps {
  isLiked: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ isLiked, onClick, style }) => {
  const [pressed, setPressed] = useState(false);
  const { scale } = useSpring({ 
    scale: pressed ? 0.9 : 1,
    config: { tension: 300, friction: 10 }
  });

  const Icon = isLiked ? AiFillLike : AiOutlineLike;

  return (
    <animated.button
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => {
        setPressed(false);
        onClick();
      }}
      onMouseLeave={() => setPressed(false)}
      style={{
        ...style,
        transform: scale.to((s) => `scale(${s})`),
      }}
      className={`flex items-center justify-center cursor-pointer transition-colors bg-transparent border-none ${
        isLiked ? 'text-buttonBlue' : 'text-buttonGrey'
      }`}
    >
      <Icon size={36} />
    </animated.button>
  );
};
