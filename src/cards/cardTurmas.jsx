import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import React from 'react';

const CardTurmas = (props) => {
  return (
    <CCard style={{ width: '18rem' }} className="m-4 mt-4 mx-4 border-2 border-green">
  <CCardImage orientation="top" src={'/sala.jpg'} />
  <CCardBody>
    <CCardTitle className="text-lg font-bold text-center">Turma:</CCardTitle>
    <CCardText className="text-lg font-bold text-center">
    {props.turmas}
    </CCardText>
    <CButton onClick={props.clicar} className="bg-green-500 rounded-full px-4 py-2 text-white mx-auto ml-5">
      Acessar turma
    </CButton>
  </CCardBody>
</CCard>
  );
};

export default CardTurmas;
