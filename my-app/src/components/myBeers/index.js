import AddNewBeer from "../addNewBeerModal/index.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./index.css"

function MyBeers() {
    return (
      <><AddNewBeer/>
        <Container className="addBeerContainer" style={{height: "500px", width: "700px", marginTop: "20px"}}>
          <Row>
              <Col className="containerText" style={{marginTop: "30%"}}>{"Nothing to see yet\n"}<a href = "#">Click here</a> {"to add your first beer"}</Col>
            </Row>
          </Container>
        </>
    );
  }
  
export default MyBeers;