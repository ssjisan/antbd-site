import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Style/NavbarForBigScreenStyle.css";

export default function NavbarForBigScreen() {
  const [active, setActive] = useState("1");
  const handleSelect = (eventKey) => setActive(eventKey);
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://i.ibb.co/pz37SNh/logo.png"
            alt="logo"
            className="Logo-Full"
          />
          <img
            src="https://i.ibb.co/PtVZFB1/antbd-Single-Logo.png"
            alt="logo"
            className="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav onSelect={handleSelect} className="ms-auto">
            <Nav.Link
              href="#home"
              eventKey="1"
              className={active === "1" && "NavLink"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#services"
              eventKey="2"
              className={active === "2" && "NavLink"}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#link"
              eventKey="3"
              className={active === "3" && "NavLink"}
            >
              Dhaka Movie
            </Nav.Link>
            <Nav.Link
              href="#about"
              eventKey="4"
              className={active === "4" && "NavLink"}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#packages"
              eventKey="5"
              className={active === "5" && "NavLink"}
            >
              Packages
            </Nav.Link>
            <Nav.Link
              href="#contact"
              eventKey="6"
              className={active === "6" && "NavLink"}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="#link"
              eventKey="7"
              className={active === "7" && "NavLink"}
            >
              Speed test
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
