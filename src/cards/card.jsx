import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import React from 'react';

const Card = (props) => {
  return (
    <CCard style={{ width: '18rem' }}>
  <CCardImage orientation="top" src={'./cantina.jpg'} />
  <CCardBody>
    <CCardTitle>{props.title}</CCardTitle>
    <CCardText>
      Professor de Matemática
      </CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
  );
};

export default Card;
