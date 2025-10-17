import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface SubscribeButtonProps {
  isSubscribed: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
}

export const SubscribeButton: React.FC<SubscribeButtonProps> = ({ isSubscribed, onClick, style }) => {
  const [pressed, setPressed] = useState(false);
  const { scale } = useSpring({ 
    scale: pressed ? 0.9 : 1,
    config: { tension: 300, friction: 10 }
  });

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
      className={`px-6 py-2.5 rounded-lg font-semibold text-white cursor-pointer transition-colors ${
        isSubscribed ? 'bg-buttonGrey' : 'bg-buttonRed'
      }`}
    >
      {isSubscribed ? 'Subscribed' : 'Subscribe'}
    </animated.button>
  );
};
