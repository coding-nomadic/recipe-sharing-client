import React from 'react'

function header() {

    const navClick = () => {
        console.log("hii")
    }

    return (
    <div style={{ }}>

    <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-white p-4">
      <h5 class="text-light h4">Collapsed content</h5>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav class="navbar navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" onClick={() => navClick()}></span>
    </button>


</nav>



</div>


    </div>
  )
}

export default header