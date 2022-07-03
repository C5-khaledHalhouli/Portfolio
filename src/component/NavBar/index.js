import Navbar from 'react-bootstrap/Navbar'
import { Container,Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css"

const NavBar =()=>{
    return <>
     <Navbar bg="dark" variant="dark" id="nav">
    <Container>
    <Navbar.Brand href="/" className='navList'>Khaled</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="skills" className='navList'>Skills</Nav.Link>
      <Nav.Link href="projects" className='navList'>Projects</Nav.Link>
      <Nav.Link href="contact" className='navList'>Contact me</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </>
}

export default NavBar