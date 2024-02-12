import { Container, Nav, Navbar } from 'react-bootstrap';

import './NavBar.css'

function ColorSchemesExample() {
  return (
    <>
      <Navbar
        bg='dark'
        variant='dark'
        expand='sm'
      >
        <Container>
          <Navbar.Brand className='brand' href="https://soavanyanjara.github.io/react-pages/"> {"</Soava>"} </Navbar.Brand>
          <Navbar.Toggle className="justify-content-center" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link href="#home">A propos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#projets">Compétences</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >

    </>
  );
}

export default ColorSchemesExample;