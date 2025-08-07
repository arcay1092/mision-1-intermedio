import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Technicians from "./pages/Technicians";
import Repairs from "./pages/Repairs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technicians" element={<Technicians />} />
        <Route path="/repairs" element={<Repairs />} />
      </Routes>
    </Router>
  );
}

export default App;
