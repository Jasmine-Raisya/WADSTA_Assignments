import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md p-4 flex justify-center space-x-8 text-white z-50">
      <Link to="/" className="text-lg font-semibold hover:text-purple-400 transition">Home</Link>
      <Link to="/todo" className="text-lg font-semibold hover:text-purple-400 transition">To-Do List</Link>
      <Link to="/profile" className="text-lg font-semibold hover:text-purple-400 transition">Profile</Link>
    </nav>
  );
};

export default Navbar;
