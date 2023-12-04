import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../service/api';
import CardTurmas from '../cards/cardTurma';
import { useNavigate } from 'react-router-dom';

function Turmas (){
const [aluno, setAluno] = useState([])
    const {turma} = useParams()
    const navigate = useNavigate()

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/caderneta/turma?turma=${turma}`)
        console.log(response.data)
            setAluno(response.data)
            console.log(aluno)
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchData();
  }, []);

  const detalhes =(id)=>{
navigate(`/alunos/detalhes/${id}`)
  }


    return(
        <div className="flex flex-wrap">
        {aluno.map((item, index)=>(
          <CardTurmas
  
          key={index}  // Certifique-se de adicionar uma chave única para cada item no loop
          primeiroNome={item.primeironome}
          segundoNome = {item.segundonome}
          email = {item.email}
          turma = {item.turma}
          clicar={() => detalhes(index)}

          />
          
        ))}
  
  
      </div>
    )

}


export default Turmas


