import React, { useContext } from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { FaUserCheck } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="info" sticky='top' variant="info" className='mb-5 py-0 shadow bg-info'>
            <Container>
                <Navbar.Brand><Link to='/' className='text-decoration-none fs-2 fw-bold logo-ico'>News<span className='text-danger'>Seeker</span></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">All News</Nav.Link>
                        {/* <Link to='/'>All News</Link> */}
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>


                    <Nav className='d-flex align-items-center fw-semibold'>
                        {
                            user?.uid ?
                                <div>
                                    <span>{user?.displayName}</span>
                                    <Link onClick={handleSignOut} className='text-decoration-none text-black ms-4' to='/login'>Log Out</Link>
                                </div>
                                :
                                <div className=''>
                                    <Link className='text-decoration-none text-black me-4' to='/login'>Login</Link>
                                    <Link className='text-decoration-none text-black' to='/register'>Register</Link>
                                </div>

                        }
                        <Link to='/profile' className='d-flex align-items-center fw-semibold text-dark'>
                            {user?.photoURL ?
                                <>
                                    <img style={{ height: '35px', width: '35px', objectFit: 'cover' }} className='cover rounded-circle mx-3' src={user?.photoURL} alt="" />
                                </>
                                :
                                <FaUserCheck className=' fs-4 ms-3' />
                            }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;