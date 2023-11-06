import React, { useEffect } from 'react';

function efeito(){


    useEffect(() => {
        function handleScroll() {
          const alturaDaJanela = window.innerHeight;
          const elementos = document.querySelectorAll('.imagem-aparece');
    
          elementos.forEach((elemento) => {
            const posicaoElemento = elemento.getBoundingClientRect();
    
            if (posicaoElemento.top <= alturaDaJanela && posicaoElemento.bottom >= 0) {
              elemento.classList.add('apareceu');
            }
          });
    
    
        }
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Para garantir que as imagens já visíveis no carregamento sejam tratadas
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
}