import React from 'react'
import { NavLink, Link } from 'react-router-dom';


let linkCorrente = {
    color: "#027399",
  };

function Topo (){
    return (

    <div>
    <h1 className='titulo' > Estrela do saber</h1>
    <section className="container flex-start">
       
            <div>
            <NavLink className="texto-sem-sublinhado" exact activeStyle={linkCorrente} to="/">
        Página inicial
      </NavLink>
            </div>
            <div>
            <Link className="texto-sem-sublinhado" exact activeStyle={linkCorrente} to="/sobre">
        Sobre
      </Link>
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


</div>

     
    )
}

export default Topo;