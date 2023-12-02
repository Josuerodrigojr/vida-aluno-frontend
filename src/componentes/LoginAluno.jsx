import './LoginProfessor.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../service/api';



function LoginAluno (){

    const [aluno, setAluno] = useState('');
    const [cpf, setCpf] = useState('');
    const [mensagem, setMensagem] = useState('');

    const dados = {cpf}
    const navigate = useNavigate()


    const handleCpfChange = (e) => {
        setCpf(e.target.value);
      }

      const login = async (e) =>{


        e.preventDefault();
        
        try{
          const response = await api.post(`/alunos/login`, dados);

          if(response.status === 200){
          console.log(cpf)
          setAluno(cpf)
          console.log(aluno)
          localStorage.setItem('chaveDado', cpf);
          }


  

          setMensagem('Login bem sucedido!');
          
          
        navigate('/teste');
       
      
      } 
        catch(error){
          // Capturar e lidar com a exceção
  console.error('Erro na requisição:', error.response.data.mensagem);

  if (error.response && error.response.data && error.response.data.mensagem) {
    setMensagem(`${error.response.data.mensagem}`);
  } else {
    setMensagem('Erro desconhecido ao fazer a requisição.');
  }
        }
      }
    return (
        <div className="login-form">
        <form>
          <label>
            Cpf:
            <input type="cpf" value={cpf} onChange={handleCpfChange} />
          </label>

          <button type="submit" onClick={login} className="bg-green-500 text-#ffffff font-bold py-2 px-4 rounded">Entrar</button>
          <div>{mensagem}</div>
          </form>
          
      </div> 
      
    )
}

export default LoginAluno