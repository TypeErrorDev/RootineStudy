import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect - load username");
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleSignOut = () => {
    console.log("handleSignOut");
    localStorage.removeItem("username");
    navigate("/");
  };

  const handleTimerComplete = useCallback(() => {
    console.log("handleTimerComplete");
    if (!isRest) {
      setTotalTimeStudied((prev) => {
        const newTotal = prev + newTimer.duration;
        console.log("Updating totalTimeStudied:", newTotal);
        if (Math.floor(newTotal / 30) > Math.floor(prev / 30)) {
          setTrees((prevTrees) => {
            console.log("Planting a tree:", prevTrees + 1);
            return prevTrees + 1;
          });
        }
        return newTotal;
      });
    }

    if (timerQueue.length > 0) {
      const [nextTimer, ...remaining] = timerQueue;
      console.log("Moving to next timer:", nextTimer);
      setTimerQueue(remaining);
      setIsRest(nextTimer.isRest);
      setNewTimer(nextTimer);

      resetTimer(nextTimer.duration * 60);
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [isRest, newTimer.duration, timerQueue]);

  const { time, isActive, toggleTimer, resetTimer, setIsActive } = useTimer(
    newTimer.duration * 60,
    handleTimerComplete
  );

  useEffect(() => {
    console.log("useEffect - update document title");
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    document.title = `${minutes}:${seconds} - Timer`;
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${minutes}:${seconds}</text></svg>`;
    }
  }, [time]);

  const handleAddTimer = () => {
    console.log("handleAddTimer");
    setTimerQueue((prevQueue) => {
      const updatedQueue = [...prevQueue, newTimer];
      if (!isActive && prevQueue.length === 0) {
        setIsRest(newTimer.isRest);
        resetTimer(newTimer.duration * 60);
        setIsActive(true);
      }
      return updatedQueue;
    });
    setNewTimer({ duration: 25, isRest: false });
  };

  const handleToggleComplete = (index) => {
    console.log("handleToggleComplete", index);
    setTimerQueue((prevQueue) =>
      prevQueue.map((timer, i) =>
        i === index ? { ...timer, completed: !timer.completed } : timer
      )
    );
  };

  const handleDeleteTimer = (index) => {
    console.log("handleDeleteTimer", index);
    setTimerQueue((prevQueue) => prevQueue.filter((_, i) => i !== index));
  };

  const handleResetQueue = () => {
    console.log("handleResetQueue");
    setTimerQueue([]);
  };

  const handleSkipTimer = () => {
    console.log("handleSkipTimer");
    if (timerQueue.length > 0) {
      const [nextTimer, ...remaining] = timerQueue;
      setTimerQueue(remaining);
      setIsRest(nextTimer.isRest);
      setNewTimer(nextTimer);
      resetTimer(nextTimer.duration * 60);
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div className="md:col-span-3 text-center mb-4">
          <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
          <button
            onClick={handleSignOut}
            className="mt-4 p-2 bg-red-600 rounded hover:bg-red-700 transition-colors"
          >
            Sign Out
          </button>
        </div>
        <div className="md:col-span-2">
          <Card className="p-4 md:p-8 bg-gray-800">
            <div className="flex justify-center">
              <TimerCircle time={time} maxTime={newTimer.duration * 60} />
            </div>
            <Controls
              isActive={isActive}
              onToggle={toggleTimer}
              onReset={() => resetTimer(newTimer.duration * 60)}
              onSkip={handleSkipTimer}
            />
            <TimerQueue
              queue={timerQueue}
              newTimer={newTimer}
              onNewTimerChange={setNewTimer}
              onAddTimer={handleAddTimer}
              onToggleComplete={handleToggleComplete}
              onDeleteTimer={handleDeleteTimer}
            />
            <button
              onClick={handleResetQueue}
              className="mt-4 p-2 bg-red-600 rounded hover:bg-red-700 transition-colors w-full"
            >
              Reset Queue
            </button>
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
