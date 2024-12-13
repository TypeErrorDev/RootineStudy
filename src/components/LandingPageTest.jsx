import { LuTrees } from "react-icons/lu";
import { Link } from "react-router-dom";
const LandingPageTest = () => {
  return (
    // Container
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-around p-4 text-white">
      {/* Header */}
      <h1 className="text-4xl font-bold mt-10 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ">
        Grow While You Learn
      </h1>
      {/* Icon */}
      <div className="text-9xl text-green-500 animate-slowPulse">
        <LuTrees />
      </div>
      {/* Subheader */}
      <h2 className="text-2xl mb-10 text-center">
        A platform for users to track their study sessions and grow their
        knowledge.
      </h2>
      {/* Buttons */}
      <div className="flex space-x-4">
        <Link to="/login">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Register
          </button>
        </Link>
      </div>

      {/* Background blurs */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute animate-blob top-1/4 left-1/4 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute animate-blob animation-delay-2000 top-1/2 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute animate-blob animation-delay-4000 bottom-1/4 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
    </div>
  );
};

export default LandingPageTest;
