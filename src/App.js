import LoginPanel from "./components/Login/Login";
import RegisterPanel from "./components/Register/Register";
import UserPanel from "./components/User/User";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserPanel />} />
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<RegisterPanel />} />
    </Routes>
  );
}

export default App;
