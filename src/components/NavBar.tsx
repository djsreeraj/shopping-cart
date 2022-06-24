import { Container, Nav, Navbar as NavBarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <NavBarBS className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>

          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>

          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </NavBarBS>
  );
};

export default NavBar;
