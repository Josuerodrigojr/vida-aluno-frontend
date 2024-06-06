import React, { useState } from 'react';
import './LoginProfessor.css'
import api from '../service/api';
import { useNavigate } from 'react-router-dom';



function LoginProfessor (){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [professor, setProfessor] = useState('');


    const dados = {email, senha}
    const navigate = useNavigate();
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSenhaChange = (e) => {
      setSenha(e.target.value);
    };

    
  
    
      

      

        const login = async (e) =>{
          e.preventDefault();
          
          try{
            const response = await api.post(`/professores/login`, dados);
            
            if(response.status === 200){
              console.log(email)
              setProfessor(email)
              console.log(professor)
              localStorage.setItem('chaveDado', email);
              }
    
          

            setMensagem('Login bem sucedido!');
          navigate('/teste2');
        
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
  
        
        
        

     
  

    return(
        <div className="login-form">
        <form>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Senha:
            <input type="senha" value={senha} onChange={handleSenhaChange} />
          </label>
          <button type="submit" onClick={login} className="bg-green-500 text-#ffffff font-bold py-2 px-4 rounded">Entrar</button>
          <div>{`SELECT * FROM professores WHERE email = '${email}' AND senha='${senha}'`}</div>
          <div>{mensagem}</div>
        </form>
      </div>        

    )
}

export default LoginProfessor