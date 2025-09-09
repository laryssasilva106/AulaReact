import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home";
import Exemplo1 from "./Paginas/Exemplo1";
import Exemplo2 from "./Paginas/Exemplo2";
import "./App.css";
import Exercicio1 from "./Paginas/Exercicio1";









export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exemplo1" element={<Exemplo1 />} />
                <Route path="/exemplo2" element={<Exemplo2 />} />
                <Route path="/exercicio1" element={<Exercicio1 />} />
            </Routes>
        </BrowserRouter>
    
    );
}
