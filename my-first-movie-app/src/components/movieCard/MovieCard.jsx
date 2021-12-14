import React from 'react'
import {Card , Button} from "react-bootstrap"

function MovieCard({ movie }) {
    return (
        
        <div >
        <Card  className="MovCard" style={{ width: '20rem', height :'45rem'  }}>
        <Card.Img variant="top"   src={movie.posterUrl} height = "400" />
        <Card.Body>
        <Card.Title style={{color:"gold"}}>{movie.title}</Card.Title>
        <Card.Text> {movie.releaseYear}
        </Card.Text>
        <Card.Text> {movie.description}
        </Card.Text>
        <h2>{"⚝".repeat(movie.rating)}</h2>
        </Card.Body>
        <Card.Footer>        
        <Button variant="warning">Watch Online </Button>
        </Card.Footer>
        </Card>
        </div>
        
    )
}

export default MovieCard ;