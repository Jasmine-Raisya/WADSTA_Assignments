import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TodoWrapper } from "./components/TodoWrapper"; 
import LandingPage from "./components/LandingPage";
import ProfilePage from "./components/ProfilePage";
import "./App.css";  

const App = () => {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/todo" element={<TodoWrapper />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
