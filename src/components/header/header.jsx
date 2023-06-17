import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./header.scss";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        style={{fontFamily: "initial", marginLeft: "250px",marginRight: "-300px", marginTop: "10px"}} 
        onClick={handleOpen}> 
            Sign In
				</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Sign In
              </Typography>
              <br/>
              <form>
              <label>
                User Name:
              <br/>
                <input type="text" name="username" />
              </label>
              <br/>
              <br/>   
              <label>
                Password:
              <br/>
                <input type="text" name="password" />
              </label>
              <br/>
              <br/>   
              <Button type="submit"
              id="names" className="btn mb-3" variant="outline-dark"
              style={{float: "right"}}
              >
              Submit
              </Button>
            </form>
            </Box>
          </Modal>
			</Link>
      </div>
    </nav>
  )
}

export default Header;