import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
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
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home#exotic">Exotic Places</Nav.Link>
                        <Nav.Link as={Link} to="home#agency">Agency</Nav.Link>
                        <Nav.Link as={Link} to="/service">Our Service</Nav.Link>
                        <Nav.Link as={Link} to="/users/add">My Order</Nav.Link>
                        <Nav.Link as={Link} to="/order">Manage All Orders</Nav.Link>
                        {
                            user?.email ?

                                <Button onClick={logOut} variant="light">logout</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }


                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>


                </Container>
            </Navbar>
        </>
    );
};

export default Header;