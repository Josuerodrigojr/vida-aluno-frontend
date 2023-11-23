import Card from '../cards/card'
import React from 'react'
import './Login.css'


function Login (){
    const cardsData = [
      {
        title: 'Área do professor',
        description: 'Descrição do Card 1',
        imageUrl: 'professor.jpg',
        button: 'Login',
        url: '/loginProfessor',
        img: './professor.jpg'
      },
      {
        title: 'Área do aluno',
        description: 'Descrição do Card 2',
        imageUrl: 'imagem2.jpg',
        button: 'Login',
        url: '/loginAluno',
        img: './aluno.jpg' 
      }
    ];
  
    return (
      <div className="app">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            button= {card.button}
            url={card.url}
            img={card.img}
          />
        ))}
      </div>
    );
  };

export default Login