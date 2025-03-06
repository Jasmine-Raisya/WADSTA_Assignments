import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-gray-200">
      <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to My App</h1>
        <p className="text-lg text-gray-600 mb-8">Organize your tasks and manage your profile effortlessly.</p>

        <div className="flex space-x-6">
          <Link
            to="/todo"
            className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:bg-blue-700"
          >
            Go to To-Do List
          </Link>
          <Link
            to="/profile"
            className="px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:bg-green-700"
          >
            Go to Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
