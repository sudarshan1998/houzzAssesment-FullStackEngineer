import React from 'react'
import { CCardBody, CCardImage, CRow, CCol, CCardTitle, CCardText, CCard } from '@coreui/react'
import ReactTooltip from "react-tooltip";

const BeerItem = (props) => {
  return (
      <CCard className="mb-3">
        <CRow className="g-0 parent">
          <CCol md={2} className="text-center">
            <ReactTooltip place="top" type="dark" effect="solid"></ReactTooltip>
            <CCardImage src={props.image} style={{width: "auto", maxHeight: "200px", margin: "16px 16px"}} data-tip={"ingredients: " + props.ingredients}/>
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