import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';

function header() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div style={{marginLeft: "40vw" }}>
        <a className="navbar-brand" style={{fontFamily: "initial", marginRight: "150px",marginLeft: "-300px"}} href="#">Recipe Sharing</a>
          <a className="navbar-brand" style={{fontFamily: "initial"}} href="#">Category</a>
          <a className="navbar-brand" style={{fontFamily: "initial"}}  href="#">Items</a> 
          <a className="navbar-brand" style={{fontFamily: "initial"}}  href="#">Recipe</a>
          <a className="navbar-brand" style={{fontFamily: "initial"}}  href="#">Check</a>
          <Link to="hi">
				<Button id="names" className="btn mb-3" variant="outline-dark"
        style={{fontFamily: "initial", marginLeft: "250px",marginRight: "-300px", marginTop: "10px"}}  >
            Sign In
				</Button>
			</Link>
      </div>
    </nav>

  )
}

export default header