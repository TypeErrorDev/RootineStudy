import { Routes, Route } from "react-router-dom";
import LandingPageTest from "./components/LandingPageTest";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPageTest />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/app" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
