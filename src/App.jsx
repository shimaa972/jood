import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";


function App() {
  return (
    <div>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        </Routes>

      <Footer />
    </div>
  );
}

export default App;