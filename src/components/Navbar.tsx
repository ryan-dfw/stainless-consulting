import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar: React.FC = () => {
    return (
        <div className="navbarcontainer">
            <Navbar expand="lg" bg="dark" variant="dark" className="py-1 fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        Stainless Consulting
                    </Link>
                    <Navbar.Toggle aria-controls="navmenu" />
                    <Navbar.Collapse id="navmenu">
                        <Nav className="ms-auto">
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default CustomNavbar;
