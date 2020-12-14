import React from 'react'
import logo from "../../brandlogo.png";
import styled from "styled-components";
import {NavLink, Link} from "react-router-dom";

const Navbar = () => {
    return (
        <NavbarContainer>
        
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"><img src={logo} alt= "logo design"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            {/* review replacing a tag with Navlink and href with to */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/speakers">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/events">Lease Specials</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">Buy/Sell Your Car</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">Contact Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">Sign Up</NavLink>
                    </li>
                
                
                
                </ul>
              
            </div>
         </nav>
        </NavbarContainer>
    );
}

export default Navbar;
// Styled Components Styles
const NavbarContainer = styled.div`
nav {
    background: var(--dark-grey) !important;
}
img {
    width: 4.5rem;
}
.nav-link {
    color:white !important;
    &:hover{
        background: var(--aqua-blue) !important;
    }
    
.active{ 
    background: var(--light-grey) !important;
}
}
`