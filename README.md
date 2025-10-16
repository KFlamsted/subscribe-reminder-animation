# Subscribe & Like Reminder Animation

A React application for creating recordable YouTube subscribe/like reminder animations with a green screen background.

## Features

- ✅ Green screen background (#00FF00) for easy chroma keying
- ✅ Animated reminder box with Like, Subscribe, and Bell buttons
- ✅ Smooth scale-in/scale-out animations using react-spring
- ✅ Interactive buttons with click animations
- ✅ Admin control panel for managing animations
- ✅ Hide/show admin panel functionality for clean recordings

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Spring** for smooth animations
- **React Icons** for button icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

## Usage

### Recording Setup

1. Open the application in your browser
2. Position your recording frame to capture the center area (avoiding the admin panel at the bottom)
3. Or use the "Hide Panel" button to completely remove the admin panel for recording

### Animation Controls

The admin panel at the bottom provides these controls:

- **Play Intro**: Scales in the reminder box from 0 to 1 (500ms animation)
- **Play Outro**: Scales out the reminder box from 1 to 0 (400ms animation)
- **Reset**: Resets all button states to default and returns to idle phase
- **Hide Panel**: Hides the admin panel (shows a small "👁️ Show Admin" button in bottom-right corner)

### Button Interactions

1. **Like Button**: 
   - Default: Grey
   - Clicked: Blue with filled icon
   - Toggles on each click

2. **Subscribe Button**:
   - Default: Red with "Subscribe" text
   - Clicked: Grey with "Subscribed" text
   - Toggles on each click

3. **Bell Button**:
   - Default: White with grey border and outline icon
   - Clicked: Grey with filled icon
   - Toggles on each click

### Recording Workflow

1. Start your screen recording software
2. Click "Play Intro" to animate the box in
3. Click the buttons to demonstrate interactions (Like, Subscribe, Bell)
4. Click "Play Outro" to animate the box out
5. Stop recording
6. Use your video editor to chroma key out the green background

### Tips

- The green screen background (#00FF00) is optimized for chroma keying
- Position your recording frame to exclude the admin panel or hide it completely
- Use "Reset" between takes to return all buttons to default state
- All animations use hardware-accelerated properties (transform, opacity) for smooth 60fps playback

## Project Structure

```
src/
├── components/
│   ├── ReminderBox.tsx      # Main animation component
│   ├── AdminPanel.tsx       # Control panel
│   └── Button/
│       ├── LikeButton.tsx
│       ├── SubscribeButton.tsx
│       └── BellButton.tsx
├── hooks/
│   └── useAnimationState.ts # State management hook
├── types/
│   └── index.ts            # TypeScript types
├── App.tsx                 # Root component
└── main.tsx               # Entry point
```

## Customization

You can customize colors in `tailwind.config.js`:

```javascript
colors: {
  greenScreen: '#00FF00',  // Change green screen color
  buttonGrey: '#6B7280',
  buttonBlue: '#3B82F6',
  buttonRed: '#EF4444',
  iconGrey: '#4B5563',
}
```

Animation timings can be adjusted in `src/types/index.ts`:

```typescript
export const ANIMATION_TIMINGS = {
  scaleIn: 500,          // Intro animation duration
  scaleOut: 400,         // Outro animation duration
  clickAnimation: 150,   // Button click animation
};
```

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari

Requires a modern browser with support for CSS transforms and React 18.

## License

MIT
