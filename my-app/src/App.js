import './App.css';
import Header from "./Componets/header"; 
import Home from "./Componets/home";
import About from "./Componets/about";
import Contact from "./Componets/contact"; 
import Footer from "./Componets/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;