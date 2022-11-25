import AddNewBeer from "../addNewBeerModal/index.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BeerItem from "../beerItem"
import "./index.css"
import { CRow, CCol } from '@coreui/react';


let beer = {}
const getMyBeer = () => {
  beer = JSON.parse(window.localStorage.getItem("beer"))
  console.log(beer)
}

function MyBeers() {
  getMyBeer()
  if(!beer){
    return (
      <><AddNewBeer/>
        <Container className="addBeerContainer" style={{height: "500px", width: "700px", marginTop: "20px"}}>
          <Row>
              <Col className="containerText" style={{marginTop: "30%"}}>{"Nothing to see yet\n"}<a href = "#">Click here</a> {"to add your first beer"}</Col>
            </Row>
          </Container>
        </>
    );
  } else {
    return (
    <>
    <AddNewBeer/>
    <CRow>{
      beer.map(beer => {
        return <CCol lg={6} md={12}><BeerItem name={beer.name} tagline={beer.tagline} description={beer.description} image={beer.image_url} ingredients={Object.keys(beer.ingredients).join(", ")}/></CCol>
      })
    }
  </CRow>
  </>
    )
  }
}
  
export default MyBeers;
