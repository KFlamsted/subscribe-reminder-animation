import { useAnimationState } from './hooks/useAnimationState';
import { ReminderBox } from './components/ReminderBox';
import { AdminPanel } from './components/AdminPanel';

function App() {
  const {
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
  } = useAnimationState();

  return (
    <div className="min-h-screen bg-greenScreen flex items-center justify-center">
      <ReminderBox
        animationPhase={animationPhase}
        buttonStates={buttonStates}
        onLikeClick={toggleLike}
        onSubscribeClick={toggleSubscribe}
        onBellClick={toggleBell}
      />
      <AdminPanel
        onIntro={startIntro}
        onOutro={startOutro}
        onReset={resetStates}
        isVisible={adminPanelVisible}
        onToggleVisibility={toggleAdminPanel}
      />
    </div>
  );
}

export default App;
