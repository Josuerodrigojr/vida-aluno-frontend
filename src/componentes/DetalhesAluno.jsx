import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../service/api";
import CardAluno from "../cards/cardAluno";

function DetalhesAluno (){
    const [aluno, setAluno] = useState([])
const {id} = useParams()

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/alunos/comportamento?id=${id}&materia=Matemática`)
        console.log(response.data)
            setAluno(response.data)
            console.log(aluno)
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchData();
  }, []);

return(  <div className="flex flex-wrap">
{aluno.map((item, index)=>(
      <CardAluno
      key={index} 
      materia = {item.materia}
      media1 = {item.media1}
      media2 = {item.media2}
      media3 = {item.media3}
      media4 = {item.media4}
      comportamento = {item.comportamento}
      observacao = {item.observacao}
      img={`${item.materia}.jpg`}

      />
    ))}


</div>)
}


export default DetalhesAluno