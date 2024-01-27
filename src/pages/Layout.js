import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Layout = () => {
    return (
        <>
        <Navbar expand="lg" bg="dark" variant="dark"> 
          <Container>
            <Navbar.Brand className="logo" href="/">EventEagleTickets</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler-icon" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="NavLinks">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/events">Events</Nav.Link>
                <Nav.Link href="/transactions">Transactions</Nav.Link>


              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet />
        <footer className="footer">
                <Container>
                    <Row>
                        <Col md={4} className="footer-col">
                            <h4>Navigation</h4>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/products">Products</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/event">Events</a></li>

                                <li><a href="/transactions">Transactions</a></li>
                                

                            </ul>
                        </Col>
                        <Col md={4} className="footer-col">
                            <h4>About Us</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
                        </Col>
                        <Col md={4} className="footer-col">
                            <h4>Follow Us</h4>
                            <div className="social-links">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="footer-bottom text-center">
                            <p>© 2023 LeoTickets. All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
      </>
    );
  };
export default Layout
