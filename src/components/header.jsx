import React from 'react'

function header() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div style={{marginLeft: "40vw" }}>


        <a className="navbar-brand" style={{fontFamily: "initial", marginRight: "150px",marginLeft: "-300px"}} href="#">Recipe Sharing</a>

          <a className="navbar-brand" style={{fontFamily: "initial"}} href="#">Category</a>
          <a className="navbar-brand" style={{fontFamily: "initial"}}  href="#">Items</a> 
          <a className="navbar-brand" style={{fontFamily: "initial"}}  href="#">Recipe</a>
          <a className="navbar-brand" style={{fontFamily: "initial"}}  href="#">Check</a>



          <a className="navbar-brand" style={{fontFamily: "initial", marginLeft: "150px",marginRight: "-300px"}}  href="#">Sign In</a>


      </div>
    </nav>


  )
}

export default header