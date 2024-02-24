
import { Modal,Button} from 'react-bootstrap';
import React, {useState} from 'react';


const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieBox =({titel, poster_path, vote_average, release_date, overview})=>{
    
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
    return(
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
              <img className="card-img-top" src={API_IMG+poster_path}alt='*' />
              <div className="card-body">
                  <button type="button" className="btn btn-warning" onClick={handleShow} >View More</button>
                  <Modal show={show}  onHide={handleClose}>
                      <Modal.Header style={{ backgroundColor: "#032659"  }} closeButton >
                     <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{ backgroundColor: "#032659" ,color:"white" }} >
                      <img className="card-img-top" style={{width:'14rem'}}src={API_IMG+poster_path}alt='*' />
                      <h3>{titel}</h3>
                      <h4>IMDb:<i class="bi bi-star"></i> {vote_average}</h4>
                      <h5>Release Date: {release_date}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{overview}</p>
                      </Modal.Body>
                      <Modal.Footer style={{ backgroundColor: "#032659"  }} >
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                     
                  </Modal>
              </div>
            </div>
        </div>
    )
}

export default MovieBox;