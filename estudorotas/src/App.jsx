import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import MinasGerais from "./Paginas/MinasGerais";
import RiodeJaneiro from "./Paginas/RiodeJaneiro";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import Parana from "./Paginas/Parana";

export default function App()
{
    return (
       <BrowserRouter>
       <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/sp" element={<SaoPaulo/>}/>
        <Route path="/mg" element={<MinasGerais/>}/>
        <Route path="/RJ" element={<RiodeJaneiro/>}/>
        <Route path="/ES" element={<EspiritoSanto/>}/>
        <Route path="/PR" element={<Parana/>}/>

       </Routes>

       </BrowserRouter>
    );
}