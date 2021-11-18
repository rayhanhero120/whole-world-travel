import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">WORLD TOUR AGENCY</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/home#exotic">Exotic Places</Nav.Link>
                            <Nav.Link as={Link} to="home#agency">Agency</Nav.Link>
                            <Nav.Link as={Link} to="/service">Our Service</Nav.Link>

                        </Nav>

                        <Nav>
                            {user?.email ?
                                <Navbar.Collapse className="justify-content-end">

                                    <Navbar.Text>
                                        Signed in as: <a href="#user">{user.displayName}</a>
                                    </Navbar.Text>
                                    <Nav>
                                        <NavDropdown
                                            id="nav-dropdown-dark-example"
                                            title="User"
                                            menuVariant="light"
                                        >
                                            <NavDropdown.Item as={Link} to={`/users/add/${user.email}`}>My Orders</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/order">Manage All Orders</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/addPackage">Add A New Package</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <Button onClick={logOut} variant="warning">Logout</Button>
                                </Navbar.Collapse>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;