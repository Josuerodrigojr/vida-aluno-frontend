import {  CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import React from 'react';
   
  function CardAluno(props) {
    return (
        <CCard style={{ width: '18rem'}} className="m-4 mt-4 mx-4 border-2 border-green">
      <CCardImage orientation="top" src={props.img} style={{ height: '300px' }}/>
      <CCardBody className="p-4">
        <CCardTitle className="text-lg font-bold text-center">{props.materia}</CCardTitle>
        <CCardText>
          Média da I unidade: {props.media1}
          </CCardText>
          <CCardText>
          Média da II unidade: {props.media2} 
          </CCardText>
          <CCardText>
          Média da III unidade: {props.media3} 
          </CCardText>
          <CCardText>
          Média da IV unidade: {props.media4}  
          
          </CCardText>
          <CCardText>
          Comportamento: {props.comportamento}
          </CCardText>
          <CCardText>
          Observações: {props.observacao}
          </CCardText>
        
      </CCardBody>
    </CCard>
    );
  }
  export default CardAluno