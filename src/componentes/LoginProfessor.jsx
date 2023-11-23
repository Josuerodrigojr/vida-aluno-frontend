import React, { useState } from 'react';
import './LoginProfessor.css'
import api from '../service/api';



function LoginProfessor (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dados = {email, password}
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(dados)
      
      try {
        const response = await api.get(`/professores`);
        // Restante do código após a conclusão da requisição
        console.log(response)
      } catch (error) {
        console.error('Erro na requisição:', error);
        // Trate o erro de alguma forma, se necessário
      }
      
      console.log('Email: ', email);
      console.log('Password: ', password);
    };
  

    return(
        <div className="login-form">
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Senha:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </div>        

    )
}

export default LoginProfessor