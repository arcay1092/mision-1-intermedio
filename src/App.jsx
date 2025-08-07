import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Technicians from "./pages/Technicians";
import Repairs from "./pages/Repairs";
import { initializeData } from "./utils/initData";

function App() {
  useEffect(() => {
    initializeData(); // Cargar datos al inicio
  }, []);

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
