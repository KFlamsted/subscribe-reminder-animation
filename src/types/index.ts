export type AnimationPhase = 'idle' | 'intro' | 'outro' | 'complete';

export interface ButtonStates {
  liked: boolean;
  subscribed: boolean;
  bellClicked: boolean;
}

export interface AnimationTimings {
  scaleIn: number;         // 500ms
  scaleOut: number;        // 400ms
  clickAnimation: number;  // 150ms
}

export const ANIMATION_TIMINGS: AnimationTimings = {
  scaleIn: 500,
  scaleOut: 400,
  clickAnimation: 150,
};
