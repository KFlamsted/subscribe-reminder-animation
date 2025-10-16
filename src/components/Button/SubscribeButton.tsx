import { useSpring, animated } from '@react-spring/web';

interface SubscribeButtonProps {
  isSubscribed: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
}

export const SubscribeButton: React.FC<SubscribeButtonProps> = ({ isSubscribed, onClick, style }) => {
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

  return (
    <animated.button
      onClick={handleClick}
      style={{
        ...style,
        transform: clickSpring.scale.to((s) => `scale(${s})`),
      }}
      className={`px-6 py-2.5 rounded-lg font-semibold text-white cursor-pointer transition-colors ${
        isSubscribed ? 'bg-buttonGrey' : 'bg-buttonRed'
      }`}
    >
      {isSubscribed ? 'Subscribed' : 'Subscribe'}
    </animated.button>
  );
};
