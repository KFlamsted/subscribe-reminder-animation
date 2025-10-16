import { useSpring, animated } from '@react-spring/web';
import { IoNotificationsOutline, IoNotifications } from 'react-icons/io5';

interface BellButtonProps {
  isClicked: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
}

export const BellButton: React.FC<BellButtonProps> = ({ isClicked, onClick, style }) => {
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

  const Icon = isClicked ? IoNotifications : IoNotificationsOutline;

  return (
    <animated.button
      onClick={handleClick}
      style={{
        ...style,
        transform: clickSpring.scale.to((s) => `scale(${s})`),
      }}
      className={`w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer transition-colors border-2 ${
        isClicked
          ? 'bg-buttonGrey border-buttonGrey text-iconGrey'
          : 'bg-white border-buttonGrey text-buttonGrey'
      }`}
    >
      <Icon size={24} />
    </animated.button>
  );
};
