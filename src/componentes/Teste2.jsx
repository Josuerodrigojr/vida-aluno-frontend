import React, { useState, useEffect } from 'react';
import api from '../service/api';
import CardTurmas from '../cards/cardTurmas';
import { CButton} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

const MeuComponente = () => {
  const [turmas, setTurmas] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = await localStorage.getItem('chaveDado');
        console.log(email);
        const response = await api.post(`/professores/turmas`, { email });
        setTurmas(response.data);
        console.log(turmas);
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchData();
  }, []); // O array de dependências vazio garante que useEffect só seja executado uma vez, sem depender de variáveis específicas.
const direcionarTurma = async (turma)=>{
  console.log(turma)
  navigate(`/caderneta/turma/${turma}`)
  


}
  return (
    <div className="flex flex-wrap">
      {turmas.map((item, index)=>(
        <CardTurmas

        key={index}  // Certifique-se de adicionar uma chave única para cada item no loop
        turmas={item}
        clicar={() => direcionarTurma(item)}  // Passe uma função para clicar
        
        />
        
      ))}


    </div>
  );
};

export default MeuComponente;
