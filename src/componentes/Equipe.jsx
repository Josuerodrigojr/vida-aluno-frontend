import Card from '../cards/card'
import React from 'react'


function Equipe (){
    const cardsData = [
      {
        title: 'Card 1',
        description: 'Descrição do Card 1',
        imageUrl: 'imagem1.jpg',
      },
      {
        title: 'Card 2',
        description: 'Descrição do Card 2',
        imageUrl: 'imagem2.jpg',
      },
      {
        title: 'Card 3',
        description: 'Descrição do Card 3',
        imageUrl: 'imagem3.jpg',
      },
    ];
  
    return (
      <div className="app">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    );
  };

export default Equipe