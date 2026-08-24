import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Page/Login";
import Register from "./Page/Register";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;