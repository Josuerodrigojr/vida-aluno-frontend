import {  CCard, CCardBody, CCardImage, CCardText, CCardTitle, CButton} from '@coreui/react';
import React from 'react';
   
  function CardTurma(props) {
    return (
        <CCard style={{ width: '18rem'}} className="m-4 mt-4 mx-4 border-2 border-green">
      <CCardImage orientation="top" src={props.img} style={{ height: '300px' }}/>
      <CCardBody className="p-4">
        <CCardTitle className="text-lg font-bold text-center">Nome: {props.primeiroNome}  {props.segundoNome}</CCardTitle>
        <CCardText>
          Email: {props.email}
          </CCardText>
          <CCardText>
          Turma: {props.turma} 
          </CCardText>

          <div className="flex justify-between">
      <CButton onClick={props.clicar} className="bg-green-500 rounded-full px-4 py-2 text-white">
        Detalhes
      </CButton>
      <CButton className="bg-green-500 rounded-full px-4 py-2 text-white">
        Editar
      </CButton>
    </div>

        
        
      </CCardBody>
    </CCard>
    );
  }
  export default CardTurma