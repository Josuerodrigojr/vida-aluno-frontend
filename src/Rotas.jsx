import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PaginaInicial from "./componentes/PaginaInicial";

import Sobre from './componentes/Sobre'
import Topo from "./componentes/Topo";
import Equipe from "./componentes/Equipe";



function Rotas (){
    return(
        <Router>

    <Topo/>
        <Routes>
        <Route exact path='/' element={<PaginaInicial/>} />
        <Route path='/sobre' element={<Sobre/>} />
        <Route path='/equipe' element={<Equipe/>} />
        </Routes>
        </Router>
    )
}

export default Rotas