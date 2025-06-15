import React, {Component} from "react";
import { Container, Navbar, NavbarCollapse, Nav } from "react-bootstrap";
import logo from './logo.jpg'
import {Routes, Route, Link, BrowserRouter} from "react-router-dom"
import Home from '../Pages/Home' 
import Cafe from '../Pages/Cafe'
import About from '../Pages/About'
import Place from '../Pages/Place'
export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
            
        <Navbar.Brand >
                <img 
                src={logo}
                height={50}
                width={50}
                className="d-inline-block align-top"
                alt="Logo"
                />
</Navbar.Brand>

<Navbar.Toggle aria-controls="responsiv-navbar-nav"/>
<NavbarCollapse id="responsiv-navbar-nav"> 
<Nav className="mr-auto">
    <Nav.Link href="/home">Главная</Nav.Link>
    <Nav.Link href="/place">Интересные места</Nav.Link>
    <Nav.Link href="/cafe">Кафе и прочее</Nav.Link>
    <Nav.Link href="/about">О нас</Nav.Link>
</Nav>

</NavbarCollapse>           
 </Container>
         </Navbar>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/home" element={<Home/>} />
                    <Route exact path="/place" element={<Place/>} />
                    <Route exact path="/cafe" element={<Cafe/>} />
                    <Route exact path="/about" element={<About/>} />
                    </Routes>
            </BrowserRouter>
            </>
        )
    }
}

