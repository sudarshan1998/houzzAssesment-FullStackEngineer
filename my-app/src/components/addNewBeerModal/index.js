import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "./index.css"
import image from "../../images/houzz.png"

function AddNewBeer() {
  const [enteredName, setEnteredName] = useState("")
  const [enteredGenre, setEnteredGenre] = useState("")
  const [enteredDescription, setEnteredDescription] = useState("")

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredGenreIsValid, setEnteredGenreIsValid] = useState(false)
  const [enteredDescriptionIsValid, setEnteredDescriptionIsValid] = useState(false)

  const inputNameHandler = event => {
    setEnteredName(event.target.value)
  }

  const inputGenreHandler = event => {
    setEnteredGenre(event.target.value)
  }
  const inputDescriptionHandler = event => {
    setEnteredDescription(event.target.value)
  }

  const formSubmitHandler = event => {
    event.preventDefault()
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false)
      return
    }
    if (enteredGenre.trim() === "") {
      setEnteredGenreIsValid(false)
      return
    }
    if (enteredDescription.trim() === "") {
      setEnteredDescriptionIsValid(false)
      return
    }
    setEnteredNameIsValid(true)
    setEnteredGenreIsValid(true)
    setEnteredDescriptionIsValid(true)
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
                onChange={inputNameHandler}
                type="text"
                placeholder="Beer name*"
                value={enteredName}
                autoFocus
              />
              {!enteredNameIsValid && <p className='error-text'>Beer name must not be empty.</p>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Genre</Form.Label>
              <Form.Control
                onChange={inputGenreHandler}
                type="text"
                placeholder="Genre*"
                value={enteredGenre}
              />
              {!enteredGenreIsValid && <p className="error-text">Beer genre must not be empty.</p>}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
            <Form.Label>Description*</Form.Label>
              <Form.Control 
                onChange={inputDescriptionHandler}
                as="textarea" 
                value={enteredDescription}
                rows={3} 
              />
              {!enteredDescriptionIsValid && <p className="error-text">Beer description must not be empty.</p>}
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
