interface AdminPanelProps {
  onIntro: () => void;
  onOutro: () => void;
  onReset: () => void;
  isVisible: boolean;
  onToggleVisibility: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  onIntro,
  onOutro,
  onReset,
  isVisible,
  onToggleVisibility,
}) => {
  if (!isVisible) {
    // Show small "Show Admin" button when panel is hidden
    return (
      <button
        onClick={onToggleVisibility}
        className="fixed bottom-2.5 right-2.5 bg-gray-800 bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all"
      >
        👁️ Show Admin
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-800 bg-opacity-90 px-6 py-4 rounded-xl flex items-center gap-3">
      <button
        onClick={onIntro}
        className="bg-buttonBlue text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
      >
        Play Intro
      </button>
      <button
        onClick={onOutro}
        className="bg-purple-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
      >
        Play Outro
      </button>
      <button
        onClick={onReset}
        className="bg-buttonRed text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-600 transition-colors"
      >
        Reset
      </button>
      <button
        onClick={onToggleVisibility}
        className="bg-buttonGrey text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
      >
        Hide Panel
      </button>
    </div>
  );
};
