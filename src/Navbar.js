import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
export default function Navbar1() {
  return (
    <div id="navi1">
    <Navbar expand="md">
      <Navbar.Brand style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", fontSize: 40, color: "#F6F6E3"}} href="#home">Pieni Olutkauppa</Navbar.Brand>
      <Navbar.Toggle style={{color: "#F6F6E3"}} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse style={{color: "#F6F6E3", fontSize: 32}} id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link style={{ fontFamily: "Arial, Helvetica, sans-serif", color: "#F6F6E3"}} href="#home">Meistä</Nav.Link>
          <Nav.Link style={{ fontFamily: "Arial, Helvetica, sans-serif", color: "#F6F6E3"}} href="#link">Yhteystiedot</Nav.Link>
          <NavDropdown style={{ fontFamily: "Arial, Helvetica, sans-serif" }} title="Tuotekategoriat" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">LAGERIT JA PILSNERIT</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">IPAT, APAT JA NEIPAT</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">SOURIT JA GOSET</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">STOUTIT JA PORTTERIT</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">ALKOHOLITTOMAT</NavDropdown.Item>
            <NavDropdown.Divider />
            
          </NavDropdown>
          <Nav.Link style={{ fontFamily: "Arial, Helvetica, sans-serif", color: "#F6F6E3", fontSize: 32 }} href="#home">Ostoskori</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
