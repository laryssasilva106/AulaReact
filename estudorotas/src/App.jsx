import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import MinasGerais from "./Paginas/MinasGerais";
import RiodeJaneiro from "./Paginas/RiodeJaneiro";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import Parana from "./Paginas/Parana";
import Acre from "./Paginas/Acre";
import Amapá from "./Paginas/Amapá";
import Amazonas from "./Paginas/Amazonas";
import Bahia from "./Paginas/Bahia";
import Ceará from "./Paginas/Ceará";
import Goías from "./Paginas/  Goías";
import Maranhão from "./Paginas/Maranhão";
import MatoGrosso from "./Paginas/Mato Grosso";
import  MatoGrossodoSul from "./Paginas/Mato Grosso do Sul";
import Paraíba from "./Paginas/Paraíba";
import Alagoas from "./Paginas/Alagoas";
import Pernabuco from "./Paginas/Pernabuco";
import Piauí from "./Paginas/Piauí";
import Parana from "./Paginas/Rio Grande do Norte";
import Rondônia from "./Paginas/Rondônia";
import Roraima from "./Paginas/Roirama";
import SantaCatarina from "./Paginas/Santa Catarina";
import Sergipe from "./Paginas/Sergipe";
import  Tocantins from "./Paginas/Tocantins";






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
        <Route path="/PR" element={<Acre/>}/>
        <Route path="/PR" element={<Amapá/>}/>
        <Route path="/PR" element={<Amazonas/>}/>
        <Route path="/PR" element={<Bahia/>}/>
        <Route path="/PR" element={<Crará/>}/>
        <Route path="/PR" element={<Goías/>}/>
        <Route path="/PR" element={<Maranhão/>}/> 
        <Route path="/PR" element={<MatoGrosso/>}/> 
        <Route path="/PR" element={<MatoGrossodoSul/>}/> 
        <Route path="/PR" element={<Paraíba/>}/> 
        <Route path="/PR" element={<Alagoas/>}/> 
        <Route path="/PR" element={<Pernabuco/>}/> 
        <Route path="/PR" element={<Piauí/>}/> 
        <Route path="/PR" element={<RioGrndedoNorte/>}/> 
        <Route path="/PR" element={<Ronônia/>}/> 
        <Route path="/PR" element={<Roraima/>}/> 
        <Route path="/PR" element={<SantaCatrina/>}/> 
        <Route path="/PR" element={<Sergipe/>}/> 
        <Route path="/PR" element={<Tocantins/>}/> 
       
       
       
       
       
       
       
       
       
       
       
       
    
       

       </Routes>

       </BrowserRouter>
    );
}