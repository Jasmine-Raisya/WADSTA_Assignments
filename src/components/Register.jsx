import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/todo");
  }, [user, loading, navigate]);

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-gray-800 text-white">
      <div className="w-full max-w-md bg-gray-900 p-12 rounded-[50px] shadow-2xl flex flex-col items-center border border-purple-600">
        <h1 className="text-4xl font-extrabold text-purple-300 mb-6">Create Account</h1>
        <p className="text-lg text-gray-400 mb-8">Join us to start managing your tasks efficiently.</p>
        
        <input
          type="text"
          className="w-full px-6 py-4 mb-4 text-gray-800 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="w-full px-6 py-4 mb-4 text-gray-800 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="w-full px-6 py-4 mb-6 text-gray-800 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        
        <button
          className="w-full px-8 py-4 bg-purple-600 text-white text-lg font-medium rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:bg-purple-500 mb-4"
          onClick={register}
        >
          Register
        </button>
        
        <button 
          className="w-full px-8 py-4 bg-pink-500 text-white text-lg font-medium rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:bg-pink-400 mb-6"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        
        <div className="flex flex-col items-center space-y-4 text-gray-300">
          <div>
            Already have an account?{" "}
            <span 
              className="text-purple-300 hover:text-purple-200 cursor-pointer transition duration-300"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </div>
          
          <Link
            to="/"
            className="mt-4 text-gray-400 hover:text-gray-200 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;