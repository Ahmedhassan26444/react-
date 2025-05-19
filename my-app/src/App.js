import './App.css';
import Header from "./Componets/header"; 
import Home from "./Componets/home";
import About from "./Componets/about";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Home />
        <About />
      </div>
    </BrowserRouter>
  );
}

export default App;