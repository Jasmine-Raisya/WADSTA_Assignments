import { Link, useNavigate } from "react-router-dom";
import { logout } from "../firebase";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-gray-800 text-white">
      <div className="w-[60%] bg-gray-900 p-12 rounded-[50px] shadow-2xl flex flex-col items-center border border-purple-600">
        <h1 className="text-6xl font-extrabold text-purple-300 mb-6">Welcome to My App</h1>
        <p className="text-xl text-gray-400 mb-8">Organize your tasks and manage your profile with style.</p>

        <div className="flex space-x-8 mb-6">
          <Link
            to="/todo"
            className="px-8 py-4 bg-purple-600 text-white text-lg font-medium rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:bg-purple-500"
          >
            Go to To-Do List
          </Link>
          <Link
            to="/profile"
            className="px-8 py-4 bg-pink-500 text-white text-lg font-medium rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:bg-pink-400"
          >
            Go to Profile
          </Link>
        </div>

        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="mt-4 px-8 py-4 bg-red-500 text-white text-lg font-medium rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:bg-red-400"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
