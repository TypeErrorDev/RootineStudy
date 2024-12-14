import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-around p-4 text-white">
      <form action="submit">
        <h1 className="text-4xl font-bold mt-8 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 pb-2 text-center">
          Register
        </h1>
        <div className="flex flex-col space-y-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-800 text-white p-2 rounded"
          />
          <label htmlFor="email">Username</label>
          <input
            type="username"
            name="username"
            id="username"
            className="bg-gray-800 text-white p-2 rounded"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-800 text-white p-2 rounded"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold mt-5 py-2 px-4 rounded">
            Login
          </button>
          <Link to="/" className="text-center ">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold w-60 py-2 px-4 rounded">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
