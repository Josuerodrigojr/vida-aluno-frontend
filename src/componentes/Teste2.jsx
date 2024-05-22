import Card from '../cards/card'
import React from 'react'
import './Login.css'

const MeuComponente = () => {
  const cardsData = [
    {
      title: 'Turma A',
      description: 'Setimo ano A',
      imageUrl: 'turmaA.jpg',
      button: 'Detalhes',
      url: '/loginturmaA',
      img: './turmaA.jpg'
    },
    {
      title: 'Turma B',
      description: 'Setimo ano B',
      imageUrl: 'turmaB.jpg',
      button: 'Detalhes',
      url: '/loginturmaB',
      img: './turmaB.jpg' 
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

export default MeuComponente;
