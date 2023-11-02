import React, {useEffect, useState} from 'react'

import './app.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
} from 'mdb-react-ui-kit';

function App() {

  const [repositorio, setRepositorio] = useState([])

  useEffect(()=>{
    async function carregaRepositorios(){
      const resposta = await fetch(
        "https://vida-de-aluno.onrender.com/alunos"
      )
      const repositorios = await resposta.json()
      setRepositorio(repositorios)
      console.log(repositorios)
    }
    carregaRepositorios();
  }, [])

  

  
  return (
<>



      {repositorio.map((repositorio)=>(
       <div className="App" key={repositorio.id}>
       <MDBCard>
      
      <MDBCardBody>
        <MDBCardTitle>Aluno: {repositorio.primeironome}  {repositorio.segundonome}</MDBCardTitle>
        <MDBCardText>
          Turma: {repositorio.turma}
        </MDBCardText>

      </MDBCardBody>
    </MDBCard>
     </div>
      ))}

    

    

        
        

    </>
  );
}

export default App;
