import React from 'react'
import Topo from '../src/componentes/Topo'
import PaginaInicial from '../src/componentes/PaginaInicial'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {

  
  

  
  return (
<>

    <Router>
     <Topo/>
     <PaginaInicial/>
    </Router>

    
    <h1>Teste</h1>

    

        
        

    </>
  );
}

export default App;
