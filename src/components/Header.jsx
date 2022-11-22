import { Nav, Navbar, Container } from 'solid-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img alt="" src={import.meta.env.VITE_VENDOR_LOGO_URL} width="50" height="50"/>
          <span style="padding:0px 10px;">{import.meta.env.VITE_VENDOR_TITLE}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" class="justify-content-end">
          <Nav>
            <Nav.Link href="/addService">Add service</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;