import React, {useEffect} from "react";
import './PaginaInicial.css'


function PaginaInicial ()

{

    

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

    return(<div>
        <top>
    <h1>BEM-VINDO</h1>
    <h1> AO ESTRELA </h1>
    <h1>DO SABER</h1>
    <h2>Uma comunidade em crescimento</h2>
    <img src="./jogoDeBasquete.jpg" alt="Alunos jogando basquete"/>
    <h2>Inicio das aulas</h2>
    </top>
    <main>
        <div className="coluna imagem-aparece">
        <img className="salaDeAula" src="./salaDeAula.jpg" alt="Alunos na sala de aula"/>
        <div className="texto-sobre-imagem ">Inicio das aulas: 12 de fevereiro de 2024</div>
        </div>
        <div className="coluna imagem-aparece">
        <img className="cantina" src="./cantina.jpg" alt="Uma sala de aula"/>
        <div className="texto-sobre-imagem2 ">Recepção: 09 de fevereiro de 2024</div>
        </div>
    </main>
    <h2>Escola</h2>
        <p>A Escola Primária e Secundária Sol Nascente é uma pequena e acolhedora instituição fictícia em Ville Esperança, dedicada ao ensino do Fundamental I e II. Com uma equipe apaixonada de educadores, currículo diversificado e foco no desenvolvimento pessoal, a escola é um farol de aprendizado e formação de cidadãos éticos em nossa comunidade fictícia.</p>

    <span>
        

        <div className="coluna imagem-aparece">
        <img className="imagem-main" src="./laboratorioInformatica.jpg" alt="Laboratorio de Informática"/>
        <h3>Laboratório de Informática </h3>
        <p>
        Em nossa escola, oferecemos um laboratório de informática de última geração. Equipado com computadores modernos e acesso à internet de alta velocidade, nosso laboratório é um espaço onde os alunos exploram o mundo da tecnologia. Eles aprendem a utilizar softwares educativos, aprimoram suas habilidades de pesquisa e desenvolvem projetos criativos. Nossos instrutores especializados garantem que os alunos estejam bem preparados para enfrentar os desafios digitais do século 21, capacitando-os a serem cidadãos informados e bem-sucedidos em um mundo cada vez mais digital.
        </p>
       
        </div>
        <div className="coluna imagem-aparece">
        <img className="imagem-main" src="./quadra.jpg" alt="Bola em um campo de futebol"/>
        <h3>Quadra Ampla para Jogos </h3>
        <p>Nossa escola se orgulha de oferecer uma quadra esportiva ampla e versátil, que vai muito além das atividades físicas. Aqui, os alunos participam de jogos esportivos que promovem o trabalho em equipe, a conduta esportiva e a saúde física. Além disso, a quadra se transforma em um espaço para projetos multidisciplinares, onde os estudantes exploram a geometria por meio de marcadores de quadra, aprendem sobre física por meio de esportes e colaboram em projetos que unem educação física, matemática e ciências. Nossa quadra é o local onde aprendizado e diversão se encontram.</p>
       
        </div>
        <div className="coluna imagem-aparece">
        <img className="imagem-main" src="./projeto.jpg" alt="Projeto multidisplinar"/>
        <h3>Projeto Multiciplinares </h3>
        <p>Na Escola, acreditamos na importância de projetos multidisciplinares que estimulam a criatividade e a colaboração dos alunos. Nossa equipe de educadores trabalha em conjunto para criar projetos que integram várias disciplinas, permitindo que os alunos explorem tópicos de maneira holística. Da criação de modelos de cidades que unem geografia e arte à exploração da história através de peças teatrais, nossos projetos multidisciplinares capacitam nossos alunos a aplicar o conhecimento de forma prática, incentivando a curiosidade e a aprendizagem contínua. Essa abordagem enriquece suas experiências educacionais, preparando-os para enfrentar desafios complexos em um mundo diversificado.</p>
       
        </div>
    </span>
    <footer>
    <div className="coluna">
        
       <h2>Nosso endereço</h2>
       <p>Rua das Crianças Felizes, 123 Ville Esperança, Cidade Imaginária</p>
        </div>
        <div className="coluna imagem-aparece">
        <img src="./secretaria.jpg" alt="Secretária"/>
       
        </div>

    </footer>
    </div>)

}

export default PaginaInicial