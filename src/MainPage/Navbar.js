import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {
    Nav, NavbarContainer, NavLogo,
    MobileIcon, NavMenu, NavItem,
    NavLinks
} from './NavbarElements'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import { IconContext } from 'react-icons/lib'
import { Button } from './NavbarElements'
import './Navbar.css'
export function Navbar(props) {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)


    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }
    useEffect(() => {
        showButton()
    }, [])
    window.addEventListener('resize', showButton)
    const handleClick = () => setClick(!click)
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav expand='lg'>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <h4 style={{ fontWeight: 'bold' }}>
                                Robo<span style={{ color: 'gold' }}>Market</span>
                                <img src='/img/qorbobo2.png' alt='new year'
                                    className='img-fluid'
                                    style={{
                                        width: '60px', position: 'absolute', top: '2px',
                                        left: '8.5%', transform: 'rotateZ(6deg)'
                                    }} /></h4>
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>

                            <NavItem>
                                <NavLinks to='/' className='link-gold' >
                                    <i className='fas fa-home' style={{ margin: '0 5px' }}></i> Bosh Sahifa
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <div className="dropdown" style={{ paddingTop: '10px' }}>
                                    <Dropdown className="dropdown-title">
                                        <Link to='/maxsulotlar' className='dropdown-link' style={{ borderBottom: 'none' }}>
                                            <Dropdown.Toggle
                                                variant="secondary btn-sm"
                                                id="dropdown-basic">
                                                Maxsulotlar
                              </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Link to='/robotlar' style={{
                                                    color: 'black', textDecoration: 'none'
                                                }}>Robotlar</Link><br></br>
                                                <Link to='/arduino' style={{
                                                    color: 'black', textDecoration: 'none',
                                                    background: 'dark'
                                                }} > Arduino</Link><br></br>
                                                <Link to='/sensorlar' style={{ color: 'black', textDecoration: 'none' }}>Sensorlar</Link><br></br>
                                                <Link to='/matorlar' style={{ color: 'black', textDecoration: 'none' }}>Matorlar</Link><br></br>
                                                <Link to='/kutubxona' style={{ color: 'black', textDecoration: 'none' }}>Kutubxona</Link>
                                            </Dropdown.Menu>
                                        </Link>
                                    </Dropdown>
                                </div>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/cart' className='link-gold'>
                                    <i className='fas fa-cart-plus' style={{ margin: '0 5px' }}></i>   Savatcha
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/login' className='link-gold'><i className='fas fa-user' style={{ margin: '0 5px' }}></i>Ro'yxatdan o'tish</NavLinks>
                            </NavItem>

                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>

    )
}

