import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Simple Tasker</Navbar.Brand>
        {/* <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav> */}
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
