import React from 'react'

function header() {

    const navClick = () => {
        console.log("hii")
    }

    return (
    <div style={{ }}>

    <div className="pos-f-t">
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-white p-4">
      <h5 className="text-light h4">Collapsed content</h5>
      <span className="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav className="navbar navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" onClick={() => navClick()}></span>
    </button>
</nav>
</div>
    </div>
  )
}

export default header