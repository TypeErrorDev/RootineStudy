import { Play, Pause, RotateCcw, SkipForward } from "lucide-react";

const Controls = ({ isActive, onToggle, onReset, onSkip }) => {
  return (
    <div className="flex justify-center gap-4 mt-4 md:mt-8">
      <button
        onClick={onToggle}
        className="p-3 bg-green-600 rounded-full hover:bg-green-700 transition-colors"
      >
        {isActive ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <button
        onClick={onReset}
        className="p-3 bg-green-600 rounded-full hover:bg-green-700 transition-colors"
      >
        <RotateCcw size={24} />
      </button>
      <button
        onClick={onSkip}
        className="p-3 bg-green-600 rounded-full hover:bg-green-700 transition-colors"
      >
        <SkipForward size={24} />
      </button>
    </div>
  );
};

export default Controls;
