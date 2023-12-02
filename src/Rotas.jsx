import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PaginaInicial from "./componentes/PaginaInicial";

import Sobre from './componentes/Sobre'
import Topo from "./componentes/Topo";
import Equipe from "./componentes/Equipe";
import LoginProfessor from "./componentes/LoginProfessor"
import Login from "./componentes/Login"
import MeuComponente from "./componentes/Teste";
import MeuComponente2 from "./componentes/Teste2";
import LoginAluno from "./componentes/LoginAluno";
import PaginaAluno from "./componentes/PaginaAluno";


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
        <Route path='/loginAluno' element={<LoginAluno/>} />
        <Route path='/comportamentoAluno' element={<PaginaAluno/>} />
        <Route path='/teste2' element={<MeuComponente2/>} />
        <Route path='/teste' element={<MeuComponente/>} />
        
        </Routes>
        </Router>
    )
}

export default Rotas