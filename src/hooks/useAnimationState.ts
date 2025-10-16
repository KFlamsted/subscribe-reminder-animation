import { useState, useCallback } from 'react';
import type { AnimationPhase, ButtonStates } from '../types';
import { ANIMATION_TIMINGS } from '../types';

interface UseAnimationStateReturn {
  animationPhase: AnimationPhase;
  buttonStates: ButtonStates;
  adminPanelVisible: boolean;
  startIntro: () => void;
  startOutro: () => void;
  resetStates: () => void;
  toggleLike: () => void;
  toggleSubscribe: () => void;
  toggleBell: () => void;
  toggleAdminPanel: () => void;
}

const DEFAULT_BUTTON_STATES: ButtonStates = {
  liked: false,
  subscribed: false,
  bellClicked: false,
};

export const useAnimationState = (): UseAnimationStateReturn => {
  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>('idle');
  const [buttonStates, setButtonStates] = useState<ButtonStates>(DEFAULT_BUTTON_STATES);
  const [adminPanelVisible, setAdminPanelVisible] = useState(true);

  const startIntro = useCallback(() => {
    setAnimationPhase('intro');
    // Automatically transition to idle after animation completes
    setTimeout(() => {
      setAnimationPhase('idle');
    }, ANIMATION_TIMINGS.scaleIn);
  }, []);

  const startOutro = useCallback(() => {
    setAnimationPhase('outro');
    // Automatically transition to complete after animation finishes
    setTimeout(() => {
      setAnimationPhase('complete');
    }, ANIMATION_TIMINGS.scaleOut);
  }, []);

  const resetStates = useCallback(() => {
    setButtonStates(DEFAULT_BUTTON_STATES);
    setAnimationPhase('idle');
  }, []);

  const toggleLike = useCallback(() => {
    setButtonStates((prev) => ({ ...prev, liked: !prev.liked }));
  }, []);

  const toggleSubscribe = useCallback(() => {
    setButtonStates((prev) => ({ ...prev, subscribed: !prev.subscribed }));
  }, []);

  const toggleBell = useCallback(() => {
    setButtonStates((prev) => ({ ...prev, bellClicked: !prev.bellClicked }));
  }, []);

  const toggleAdminPanel = useCallback(() => {
    setAdminPanelVisible((prev) => !prev);
  }, []);

  return {
    animationPhase,
    buttonStates,
    adminPanelVisible,
    startIntro,
    startOutro,
    resetStates,
    toggleLike,
    toggleSubscribe,
    toggleBell,
    toggleAdminPanel,
  };
};
