import React, { useState, useEffect } from 'react';
import api from '../service/api';
import { CCard, CCardImage } from '@coreui/react';
import CardAluno from '../cards/cardAluno';

const MeuComponente = () => {
  // Estado para armazenar os dados recuperados do localStorage
  const [dadoSalvo, setDadoSalvo] = useState('');
  const [dados, setDados] = useState(null);



  // Função para recuperar o dado do localStorage durante a montagem do componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dadoArmazenado = await localStorage.getItem('chaveDado');
        console.log(dadoArmazenado)
        if (dadoArmazenado) {
          await setDadoSalvo(dadoArmazenado);
        }
        console.log(dadoArmazenado)
        const response = await fetch(`https://vida-de-aluno.onrender.com/alunos/caderneta?cpf=${dadoArmazenado}`);


        const data = await response.json();
        setDados(data);
        console.log(data)
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchData();


   
    
    

  }, []); 


  if (!dados) {
    return <p>Nenhum dado disponível.</p>;
  }
  

  return (
    <div className="flex flex-wrap">


    {dados.map((item, index)=>(
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

    
  </div>
  );
};

export default MeuComponente;
