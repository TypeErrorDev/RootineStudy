import { useState, useRef, useEffect } from "react";

const useTimer = (initialTime, onComplete) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const circleRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          const newTime = prev - 1;
          updateCircleProgress(newTime);
          return newTime;
        });
      }, 1000);
    } else if (time === 0) {
      onComplete();
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, time, onComplete]);

  const updateCircleProgress = (currentTime) => {
    if (circleRef.current) {
      const progress = (currentTime / initialTime) * 283;
      circleRef.current.style.strokeDashoffset = 283 - progress;
    }
  };

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = (newTime = initialTime) => {
    setIsActive(false);
    setTime(newTime);
    updateCircleProgress(newTime);
  };

  return {
    time,
    isActive,
    circleRef,
    toggleTimer,
    resetTimer,
    setIsActive,
  };
};

export default useTimer;
