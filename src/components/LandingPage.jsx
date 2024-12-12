// import Images from "../assets/Images";

import Images from "../assets/Images";

const LandingPage = () => {
  return (
    <div className="h-screen w-full bg-[#B0D0D3] flex flex-col justify-start items-center">
      <div>
        <div className="text-center text-[8rem] mt-32">
          <img src={Images.DevTimerLogo} alt="Dev Timer Logo" />
        </div>
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          className="m-auto"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="black"
            fill="none"
            strokeWidth="2"
          />
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="10"
            className="second-hand"
            stroke="red"
            strokeWidth="2"
          />
        </svg>
        <div className="m-auto text-center">
          <div className="text-2xl mt-20">
            Please Login or Register to use our app
          </div>
          <div className="flex justify-between mt-20">
            <button
              className="h-11 w-32 bg-[#C08497] rounded-3xl shadow-sm shadow-black border transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
          "
            >
              Login
            </button>
            <button className="h-11 w-32 bg-orange-300 rounded-3xl shadow-sm shadow-black border transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
