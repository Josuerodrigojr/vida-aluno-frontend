import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PaginaInicial from "./componentes/PaginaInicial";

import Sobre from './componentes/Sobre'
import Topo from "./componentes/Topo";
import Equipe from "./componentes/Equipe";
import LoginProfessor from "./componentes/LoginProfessor"
import Login from "./componentes/Login"


function Rotas (){
    return(
        <Router>

    <Topo/>
        <Routes>
        <Route exact path='/' element={<PaginaInicial/>} />
        <Route path='/sobre' element={<Sobre/>} />
        <Route path='/equipe' element={<Equipe/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/loginProfessor' element={<LoginProfessor/>} />
        
        </Routes>
        </Router>
    )
}

export default Rotas