import React from 'react'

function header() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div style={{marginLeft: "40vw" }}>
        <a className="navbar-brand" style={{fontFamily: "initial",color: "red"}} href="#">Category</a>
        <a className="navbar-brand" style={{fontFamily: "initial",color: "blueviolet"}}  href="#">Items</a> 
        <a className="navbar-brand" style={{fontFamily: "initial",color: "greenyellow"}}  href="#">Recipe</a>
        <a className="navbar-brand" style={{fontFamily: "initial",color: "saddlebrown"}}  href="#">Check</a>
      </div>
</nav>



  )
}

export default header