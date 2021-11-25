import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import { Navbar} from 'react-bootstrap';
import Logo from "../../plogo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faFileUpload} from '@fortawesome/free-solid-svg-icons';
const Header= () => {
   


    return (
        <nav className="navbar navbar-expand navbar-light bg-white py-2 ">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={Logo} alt="Phone logo"/>
                    <Navbar.Brand  as={Link} to="/" style={{fontWeight: '500', fontSize: '30px', color:'#61a1c8'}}>Phone Zone</Navbar.Brand>
                </Link>
            
                <ul className="navbar-nav align-items-center">
                     
                     <Link to="/" className="nav-link">Home</Link> 
                     <li>
                     <Link to="" className="nav-link"><FontAwesomeIcon className="upload-icon" icon={faFileUpload} /><span className="badge bg-light"></span></Link>
                     </li>
                     <li className="nav-item active">
                         <Link to="/cart" className="nav-link"><FontAwesomeIcon className="cart-icon" icon={faCartArrowDown} /><span className="badge bg-light"></span></Link>
                     </li>
                    
                </ul>

            </div>
        </nav>
    );
};

export default Header;