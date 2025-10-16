import { useSpring, animated } from '@react-spring/web';
import type { AnimationPhase, ButtonStates } from '../types';
import { LikeButton } from './Button/LikeButton';
import { SubscribeButton } from './Button/SubscribeButton';
import { BellButton } from './Button/BellButton';

interface ReminderBoxProps {
  animationPhase: AnimationPhase;
  buttonStates: ButtonStates;
  onLikeClick: () => void;
  onSubscribeClick: () => void;
  onBellClick: () => void;
}

export const ReminderBox: React.FC<ReminderBoxProps> = ({
  animationPhase,
  buttonStates,
  onLikeClick,
  onSubscribeClick,
  onBellClick,
}) => {
  // Determine animation values based on phase
  const getAnimationValues = () => {
    switch (animationPhase) {
      case 'intro':
        return { opacity: 1, scale: 1 };
      case 'outro':
        return { opacity: 0, scale: 0 };
      case 'complete':
        return { opacity: 0, scale: 0 };
      case 'idle':
      default:
        return { opacity: 1, scale: 1 };
    }
  };

  const boxSpring = useSpring({
    opacity: getAnimationValues().opacity,
    scale: getAnimationValues().scale,
    from: { opacity: 0, scale: 0 },
    config: { tension: 180, friction: 20 },
  });

  return (
    <animated.div
      style={{
        opacity: boxSpring.opacity,
        transform: boxSpring.scale.to((s) => `scale(${s})`),
      }}
      className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4"
    >
      <LikeButton isLiked={buttonStates.liked} onClick={onLikeClick} />
      <SubscribeButton isSubscribed={buttonStates.subscribed} onClick={onSubscribeClick} />
      <BellButton isClicked={buttonStates.bellClicked} onClick={onBellClick} />
    </animated.div>
  );
};
