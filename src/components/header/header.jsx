import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./header.scss";
import RCServiceComponent from "../../context/RCService";

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
  const [SignUpOpen, setSignUpOpen] = React.useState(false);
  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => setSignUpOpen(false);

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [fullName, setFullName] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const RCService = React.useContext(RCServiceComponent);

  const signIn = async() => {
    let result;
    try
    {
      result = await RCService.postAuthenticate(userName, password)
    } catch (e)
    {
      console.log('e', e)
    }
    console.log("result 111 is", result)
  }

  const signUp = async() => {
    let result2;
    try
    {
      result2 = await RCService.SignUp(userName, password, email, fullName, mobileNumber)
    } catch (e)
    {
      console.log('e', e)
    }
    console.log("result 22222 is", result2)
  }

  const toggleSignUp = () => {
    handleSignUpOpen();
    handleClose();
  }

  const toggleSignIn = () => {
    handleSignUpClose();
    handleOpen();
  }

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
                <input type="text" name="username" onChange={(e) => setUserName(e.target.value)}/>
              </label>
              <br/>
              <br/>   
              <label>
                Password:
              <br/>
                <input type="text" name="password"  onChange={(e) => setPassword(e.target.value)} />
              </label>
              <br/>
              <i style={{color: "blue", fontSize: "13px", float: "right"}}
              onClick={
                toggleSignUp
              }>
                Sign Up
              </i>
              <br/>   
              <br/>
              <Button type="submit"
              id="names" className="btn mb-3" variant="outline-dark"
              style={{float: "right"}}
              onClick={signIn}>
              Submit
              </Button>
            </form>
            </Box>
          </Modal>
          <Modal
            open={SignUpOpen}
            onClose={handleSignUpClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Sign Up
              </Typography>
              <br/>
              <form>
              <label>
                User Name:
              <br/>
                <input type="text" name="username" onChange={(e) => setUserName(e.target.value)}/>
              </label>
              <br/>
              <br/>   
              <label>
                Password:
              <br/>
                <input type="text" name="password"  onChange={(e) => setPassword(e.target.value)} />
              </label>
              <br/>
              <label>
                Email:
              <br/>
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
              </label>
              <br/>
              <br/>   
              <label>
                Full Name:
              <br/>
                <input type="text" name="fullName"  onChange={(e) => setFullName(e.target.value)} />
              </label>
              <br/>
              <label>
                Mobile number:
              <br/>
                <input type="text" name="mobile"  onChange={(e) => setMobileNumber(e.target.value)} />
              </label>
              <br/>
              
              <i style={{color: "blue", fontSize: "13px", float: "right"}}
              onClick={toggleSignIn}> 
                Sign In
              </i>
              <br/>   
              <br/>
              <Button type="submit"
              id="names" className="btn mb-3" variant="outline-dark"
              style={{float: "right"}}
              onClick={signUp}>
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