import Homepage from "./components/Homepage/Homepage";
import UserPanel from "./components/User/User";
import LoginPanel from "./components/Login/Login";
import RegisterPanel from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/user" element={<UserPanel />} />
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<RegisterPanel />} />
    </Routes>
  );
}

export default App;
