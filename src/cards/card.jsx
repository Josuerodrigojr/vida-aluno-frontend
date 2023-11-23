import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import React from 'react';

const Card = (props) => {
  return (
    <CCard style={{ width: '18rem' }}>
  <CCardImage orientation="top" src={props.img} />
  <CCardBody>
    <CCardTitle>{props.title}</CCardTitle>
    <CCardText>
      {props.description}
      </CCardText>
    <CButton href={props.url}>{props.button}</CButton>
  </CCardBody>
</CCard>
  );
};

export default Card;
