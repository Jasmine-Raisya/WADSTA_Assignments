import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import ProfilePage from "./components/ProfilePage";
import { TodoWrapper } from "./components/ToDoWrapper";

import "./App.css";

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="app">
      <Router>
        <Routes>
          {/* If the user is NOT logged in, go to Login. Otherwise, go to LandingPage */}
          <Route path="/" element={user ? <LandingPage /> : <Navigate to="/login" />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
          <Route path="/reset" element={user ? <Navigate to="/" /> : <Reset />} />

          {/* These pages should only be accessible after login */}
          <Route path="/todo" element={user ? <TodoWrapper /> : <Navigate to="/login" />} />
          <Route path="/profile" element={user ? <ProfilePage /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
