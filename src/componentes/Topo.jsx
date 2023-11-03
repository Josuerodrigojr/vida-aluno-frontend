import React from 'react'
import { NavLink } from 'react-router-dom';

let linkCorrente = {
    color: "#027399",
  };

function Topo (){
    return (
    <>
    <h1 className='titulo' > Vida do Aluno</h1>
    <section className="container flex-start">
       
            <div>
            <NavLink className="texto-sem-sublinhado" exact activeStyle={linkCorrente} to="/">
        Página inicial
      </NavLink>
            </div>
            <div>
            <NavLink className="texto-sem-sublinhado" exact activeStyle={linkCorrente} to="/sobre">
        Sobre
      </NavLink>
            </div>
            <div>
            <NavLink className="texto-sem-sublinhado" exact activeStyle={linkCorrente} to="/equipe">
        Equipe
      </NavLink>
            </div>
            <div>
            <NavLink className="texto-sem-sublinhado" exact activeStyle={linkCorrente} to="/contato">
        Entre em contato
      </NavLink>
            </div>
            <div>
            <NavLink className="texto-sem-sublinhado" exact activeStyle={linkCorrente} to="/login">
        Login
      </NavLink>
            </div>

    
    </section>


</>
     
    )
}

export default Topo;