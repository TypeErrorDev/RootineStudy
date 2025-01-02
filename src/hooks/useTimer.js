import { useState, useRef, useEffect } from "react";

const useTimer = (initialTime, onComplete) => {
  const [time, setTime] = useState(() => {
    const savedTime = localStorage.getItem("time");
    return savedTime !== null ? parseInt(savedTime, 10) : initialTime;
  });
  const [isActive, setIsActive] = useState(() => {
    const savedIsActive = localStorage.getItem("isActive");
    return savedIsActive !== null ? JSON.parse(savedIsActive) : false;
  });
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          const newTime = prev - 1;
          localStorage.setItem("time", newTime);
          return newTime;
        });
      }, 1000);
    } else if (time === 0) {
      onComplete();
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, time, onComplete]);

  useEffect(() => {
    localStorage.setItem("isActive", isActive);
  }, [isActive]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = (newTime = initialTime) => {
    setIsActive(false);
    setTime(newTime);
    localStorage.setItem("time", newTime);
  };

  return {
    time,
    isActive,
    toggleTimer,
    resetTimer,
    setIsActive, // Expose setIsActive
  };
};

export default useTimer;
