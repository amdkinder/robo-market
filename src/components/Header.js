import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'


export function Header() {
    return (
        <header>
            <Navbar expand='lg' bg="dark" variant='dark' collapseOnSelect>
                <LinkContainer to='/'>
                    <Navbar.Brand className='navbar-brand'>Robo<span>Market</span></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ml-auto'>
                        <Link to='/' className='icons-link'>Bosh Sahifa</Link>
                        <div className="dropdown">
                            <Dropdown className="dropdown-title">
                                <Link to='/maxsulotlar' className='icons-link' style={{ borderBottom: 'none' }}>
                                    <Dropdown.Toggle
                                        variant="secondary btn-sm"
                                        id="dropdown-basic">
                                        Maxsulotlar
              </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Link to='/robotlar' style={{ color: 'black' }}>Robotlar</Link><br></br>
                                        <Link to='/arduino' style={{ color: 'black' }}>Arduino</Link><br></br>
                                        <Link to='/sensorlar' style={{ color: 'black' }}>Sensorlar</Link><br></br>
                                        <Link to='/matorlar' style={{ color: 'black' }}>Matorlar</Link>
                                    </Dropdown.Menu>
                                </Link>
                            </Dropdown>
                        </div>

                        <LinkContainer to='/cart'>
                            <Nav.Link className='icons-link'>
                                <i className="fas fa-cart-plus"></i> Cart
                 </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                            <Nav.Link className='icons-link'><i className='fas fa-user'></i> Sign In</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </header>
    )
}
