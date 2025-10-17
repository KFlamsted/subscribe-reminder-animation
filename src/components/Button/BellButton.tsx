import { useSpring, animated } from "@react-spring/web";
import { TbBellOff, TbBellRingingFilled } from "react-icons/tb";

interface BellButtonProps {
  isClicked: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
}

export const BellButton: React.FC<BellButtonProps> = ({
  isClicked,
  onClick,
  style,
}) => {
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

  const Icon = isClicked ? TbBellRingingFilled : TbBellOff;

  return (
    <animated.button
      onClick={handleClick}
      style={{
        ...style,
        transform: clickSpring.scale.to((s) => `scale(${s})`),
      }}
      className={`flex items-center justify-center cursor-pointer transition-colors bg-transparent border-none ${
        isClicked ? "text-buttonGrey" : "text-buttonGrey"
      }`}
    >
      <Icon size={36} />
    </animated.button>
  );
};
