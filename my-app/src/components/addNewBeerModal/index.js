import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "./index.css"
import image from "../../images/houzz.png"

function AddNewBeer() {
  const [beerInfo, setBeerInfo] = useState({
    name: "", genre: "", description: ""
  })


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let name, value
  const inputHandler = event => {
    name = event.target.name
    value = event.target.value
    setBeerInfo({...beerInfo, [name]: value})
  }

  const formSubmitHandler = event => {
    event.preventDefault()
    localStorage()
  }

  const localStorage = () => {
    let beerArray = []
    const localItems = JSON.parse(window.localStorage.getItem("beer"))
    const ingredients = {
      malt: "malt ingredient",
      hop: "hop ingredient",
      yeast: "yeast ingredient"
    }
    beerInfo.tagline = "Hanoi Beer"
    beerInfo.image_url = "https://images.punkapi.com/v2/2.png"
    beerInfo.ingredients = ingredients
    if(localItems) {
      localItems.map(item => {
        return beerArray.push(item)
      })
    }
    beerArray.push(beerInfo)
    console.log(beerArray)
    window.localStorage.setItem("beer", JSON.stringify(beerArray))
  }

  return (
    <>
      <Button variant="primary addNewBeer" onClick={handleShow}>
        Add a new beer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new beer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="beerImage" src={image}/>
          <Form onSubmit={formSubmitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Beer name</Form.Label>
              <Form.Control
                onChange={inputHandler}
                type="text"
                name="name"
                placeholder="Beer name*"
                value={beerInfo.name}
                autoFocus
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Genre</Form.Label>
              <Form.Control
                onChange={inputHandler}
                type="text"
                name="genre"
                placeholder="Genre*"
                value={beerInfo.genre}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
            <Form.Label>Description*</Form.Label>
              <Form.Control 
                onChange={inputHandler}
                as="textarea" 
                name="description"
                value={beerInfo.description}
                rows={3} 
              />
            </Form.Group>
            <Button variant="primary" className='saveButton' type = "submit" onClick={handleClose}>
              Save
            </Button>
            <Button variant="danger" className='cancelButton' onClick={handleClose}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddNewBeer
