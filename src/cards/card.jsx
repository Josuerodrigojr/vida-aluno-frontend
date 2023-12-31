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
      <CCardText>

      </CCardText>
    <CButton href={props.url} className="bg-green-500 text-#ffffff font-bold py-1 px-4 rounded">{props.button}</CButton>
  </CCardBody>
</CCard>
  );
};

export default Card;
