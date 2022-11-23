import React from 'react'
import { CCardBody, CCardImage, CRow, CCol, CCardTitle, CCardText, CCard } from '@coreui/react'

const BeerItem = (props) => {
  console.log(props.name)
  return (

      <CCard className="mb-3">
        <CRow className="g-0">
          <CCol md={2} className="text-center">
            <CCardImage src={props.image} style={{width: "auto", maxHeight: "200px", margin: "16px 16px"}}/>
          </CCol>
          <CCol md={10}>
            <CCardBody>
              <CCardTitle>{props.name}</CCardTitle>
              <CCardText>{props.tagline}</CCardText>
              <CCardText>{props.description}</CCardText>
            </CCardBody>
          </CCol>
        </CRow>
      </CCard>
  )
}

export default BeerItem