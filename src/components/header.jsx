import React from 'react'

function header() {

    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div style={{marginLeft: "40vw" }}>
        <a class="navbar-brand" style={{fontFamily: "initial",color: "red"}} href="#">Category</a>
        <a class="navbar-brand" style={{fontFamily: "initial",color: "blueviolet"}}  href="#">Items</a> 
        <a class="navbar-brand" style={{fontFamily: "initial",color: "greenyellow"}}  href="#">Recipe</a>
        <a class="navbar-brand" style={{fontFamily: "initial",color: "saddlebrown"}}  href="#">Check</a>
      </div>
</nav>



  )
}

export default header