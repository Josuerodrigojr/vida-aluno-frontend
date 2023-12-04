import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../service/api";

function DetalhesAluno (){
    const [aluno, setAluno] = useState([])
const {id} = useParams()

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/alunos/comportamento?id=${id}`)
        console.log(response.data)
            setAluno(response.data)
            console.log(aluno)
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchData();
  }, []);

return(<h1>
    {id}

</h1>)
}


export default DetalhesAluno