import {Modal , Button , FormControl  } from 'react-bootstrap'
import React , {useState} from 'react'
import './add.css'
function Add({getMoviesListData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [newMovie, setNewMovie] = useState({
    title:"",
    releaseYear:"",
    description :"",
    posterUrl:"",
    rating:0
  })
  const handleChange=(e)=>{
    setNewMovie({...newMovie , [e.target.name]:e.target.value})
  }
  const handleSubmit=()=>{
  getMoviesListData(newMovie)

    handleClose()
  }
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        + New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="ModHead">
          <Modal.Title>Add Your Favourite Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className="formControl"> 
        <FormControl 
      type="text"
      placeholder="Enter New title..." 
      name="title"
      onChange={handleChange}
       />
      <FormControl 
      as = "textarea"
      type="text"
      placeholder="Enter Description..." 
      name="description"
      onChange={handleChange}

       />
      <FormControl 
      type="text"
      placeholder="Enter posterUrl..." 
      name="posterUrl"
      onChange={handleChange}

       />
      <FormControl 
      type="text"
      placeholder="Enter Rating..." 
      name="rating"
      onChange={handleChange}

       />
       </Modal.Body>
        <Modal.Footer className="ModHead">
          <Button variant="success" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick= {handleSubmit} >
            Save New Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default  Add;