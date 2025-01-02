const TimerCircle = ({ time, maxTime, circleRef }) => {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r="48%"
          className="stroke-gray-700"
          fill="none"
          strokeWidth="8"
        />
        <circle
          ref={circleRef}
          cx="50%"
          cy="50%"
          r="48%"
          className="stroke-green-600"
          fill="none"
          strokeWidth="8"
          strokeDasharray="283"
          strokeDashoffset="0"
          style={{
            transition: "stroke-dashoffset 1s linear",
            filter: "drop-shadow(0 0 4px rgb(34 197 94))", // Green blur
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl md:text-4xl font-bold">
          {Math.floor(time / 60)
            .toString()
            .padStart(2, "0")}
          :{(time % 60).toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default TimerCircle;
