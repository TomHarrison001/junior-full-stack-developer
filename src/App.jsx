import Homepage from "./components/Homepage/Homepage";
import UserPanel from "./components/User/User";
import LoginPanel from "./components/Login/Login";
import RegisterPanel from "./components/Register/Register";
import { Routes, Route } from "react-router";
import Header from './components/Header/Header';

function App() {
  return (
    <Routes>
      <Route path="/" element={<><Header/><Homepage /></>} />
      <Route path="/user" element={<><Header/><UserPanel /></>} />
      <Route path="/login" element={<><Header/><LoginPanel /></>} />
      <Route path="/register" element={<><Header/><RegisterPanel /></>} />
    </Routes>
  );
}

export default App;
