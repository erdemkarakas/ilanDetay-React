/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../../style.scss";
import "./navbar.scss";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../ui/logo';
import UserTopIcon from '../../ui/userTopIcon';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { AiOutlineSearch } from 'react-icons/ai';


function NavbarComponent() {

  return (


    <Navbar collapseOnSelect expand="lg" >
      <Container className="align-content-center" fluid>
        <Navbar.Brand className="mb-2" href="#home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto align-items-md-center text-nowrap">
            <InputGroup className="input-nav ms-2" size="xl" >
              <InputGroup.Text id="search-ip"><AiOutlineSearch color="grey" /></InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Karşıyaka, İzmir"
                className="me-4"
                aria-label="Search"
              />
            </InputGroup>
            <Nav.Link className="nav-sec" href="#features">Kiracılar İçin</Nav.Link>
            <NavDropdown className="nav-sec" title="Ev Sahipleri İçin" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ev Sahipleri İçin KiramKolay</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ev Sahibine Alanı
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">İlan Verme</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-sec" href="#link">Kiralama Rehberi</Nav.Link>
            <Nav.Link className="nav-sec me-5" href="#link">Bildir Kazan</Nav.Link>

          </Nav>
          <Nav className="align-items-md-center text-nowrap">
            <Nav.Link className="nav-sec" href="#help">Yardım</Nav.Link>
            <Nav.Link eventKey={2} href="#profile">
              <UserTopIcon className="" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavbarComponent