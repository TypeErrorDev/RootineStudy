import { useState, useEffect } from "react";
import Card from "./Card";
import TimerCircle from "./TimerCircle";
import Controls from "./Controls";
import TimerQueue from "./TimerQueue";
import ProgressPanel from "./ProgressPanel";
import useTimer from "../hooks/useTimer";

const Dashboard = () => {
  const [isRest, setIsRest] = useState(false);
  const [totalTimeStudied, setTotalTimeStudied] = useState(0);
  const [trees, setTrees] = useState(0);
  const [timerQueue, setTimerQueue] = useState([]);
  const [newTimer, setNewTimer] = useState({ duration: 25, isRest: false });
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleTimerComplete = () => {
    if (!isRest) {
      setTotalTimeStudied((prev) => {
        const newTotal = prev + newTimer.duration;
        if (Math.floor(newTotal / 30) > Math.floor(prev / 30)) {
          setTrees((prev) => prev + 1);
        }
        return newTotal;
      });
    }

    if (timerQueue.length > 0) {
      const [nextTimer, ...remaining] = timerQueue;
      setTimerQueue(remaining);
      setIsRest(nextTimer.isRest);
      resetTimer(nextTimer.duration * 60);
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const { time, isActive, toggleTimer, resetTimer, setIsActive } = useTimer(
    newTimer.duration * 60,
    handleTimerComplete
  );

  const handleAddTimer = () => {
    setTimerQueue([...timerQueue, newTimer]);
    setNewTimer({ duration: 25, isRest: false });
    if (!isActive && timerQueue.length === 0) {
      setIsRest(newTimer.isRest);
      resetTimer(newTimer.duration * 60);
      setIsActive(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div className="md:col-span-3 text-center mb-4">
          <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
        </div>
        <div className="md:col-span-2">
          <Card className="p-4 md:p-8 bg-gray-800">
            <div className="flex justify-center">
              <TimerCircle
                time={time}
                maxTime={newTimer.duration * 60}
                circleRef={circleRef}
              />
            </div>
            <Controls
              isActive={isActive}
              onToggle={toggleTimer}
              onReset={() => resetTimer(newTimer.duration * 60)}
            />
            <TimerQueue
              queue={timerQueue}
              newTimer={newTimer}
              onNewTimerChange={setNewTimer}
              onAddTimer={handleAddTimer}
            />
          </Card>
        </div>
        <div className="md:col-span-1">
          <ProgressPanel totalTimeStudied={totalTimeStudied} trees={trees} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
