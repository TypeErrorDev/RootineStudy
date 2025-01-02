import { Plus, Check, Trash } from "lucide-react";

const TimerQueue = ({
  queue,
  newTimer,
  onNewTimerChange,
  onAddTimer,
  onToggleComplete,
  onDeleteTimer,
}) => {
  const handleDurationChange = (e) => {
    const value = parseInt(e.target.value, 10);
    onNewTimerChange({
      ...newTimer,
      duration: isNaN(value) ? "" : value,
    });
  };

  return (
    <div className="mt-4 md:mt-8">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={newTimer.duration}
          onChange={handleDurationChange}
          className="bg-gray-700 rounded px-3 py-2 w-full md:w-24"
        />
        <select
          value={newTimer.isRest.toString()}
          onChange={(e) =>
            onNewTimerChange({ ...newTimer, isRest: e.target.value === "true" })
          }
          className="bg-gray-700 rounded px-3 py-2 w-full md:w-auto"
        >
          <option value="false">Study</option>
          <option value="true">Rest</option>
        </select>
        <button
          onClick={onAddTimer}
          className="p-2 bg-green-600 rounded hover:bg-green-700 transition-colors w-full md:w-auto"
        >
          <Plus size={24} />
        </button>
      </div>

      <div className="space-y-2">
        {queue.map((timer, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 bg-gray-700 p-2 rounded ${
              timer.completed ? "line-through" : ""
            }`}
          >
            <button
              onClick={() => onToggleComplete(index)}
              className={`p-1 rounded transition-colors ${
                timer.completed
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              <Check size={16} />
            </button>
            <span>{timer.isRest ? "Rest" : "Study"}</span>
            <span>{timer.duration} minutes</span>
            <button
              onClick={() => onDeleteTimer(index)}
              className="p-1 bg-red-600 rounded hover:bg-red-700 transition-colors"
            >
              <Trash size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimerQueue;
