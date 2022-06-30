import Navbar from 'react-bootstrap/Navbar'
import { Container,Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css"
const NavBar =()=>{
    return <>
     <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Khaled</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="skills">Skills</Nav.Link>
      <Nav.Link href="projects">Project</Nav.Link>
      <Nav.Link href="contact">Contact me</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </>
}

export default NavBar