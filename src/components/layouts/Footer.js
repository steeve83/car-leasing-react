import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
       <FooterContainer>
            <div className="container-fluid">
                <div className="row pt-5">
                {/* colum */}
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <ul className="list-inline mx-auto justify-content-center">
                                <Link><li>Lorem ipsum</li></Link>
                                <Link><li>Lorem ipsum</li></Link>
                                <Link><li>Lorem ipsum</li></Link>                                                                                             
                            </ul>                                 
                        </ul>
                    </div>
                     {/* colum */}
                     <div className="col-sm-3 col-xs-12 d-flex">
                     <ul className="list-inline mx-auto justify-content-center">
                            <ul className="list-inline mx-auto justify-content-center">
                                <Link><li>Lorem ipsum</li></Link>
                                <Link><li>Lorem ipsum</li></Link>
                                <Link><li>Lorem ipsum</li></Link>                                                                                             
                            </ul>                                 
                    </ul>
                    </div>
                     {/* colum */}
                     <div className="col-sm-3 col-xs-12 d-flex">
                     <ul className="list-inline mx-auto justify-content-center">
                            <ul className="list-inline mx-auto justify-content-center">
                                <Link><li>Lorem ipsum</li></Link>
                                <Link><li>Lorem ipsum</li></Link>
                                <Link><li>Lorem ipsum</li></Link>                                                                                             
                            </ul>                                 
                    </ul>
                    </div>
                     {/* colum */}
                     <div className="col-sm-3 col-xs-12 d-flex">
                     <ul className="list-inline mx-auto justify-content-center">
                            <ul className="list-inline mx-auto justify-content-center">
                                <Link><li>Lorem ipsum</li></Link>
                                <Link><li>Lorem ipsum</li></Link>
                                <Link><li>Lorem ipsum</li></Link>                                                                                             
                            </ul>                                 
                    </ul>
                    </div>
                </div>
            </div>    
        </FooterContainer>
    );

    };

export default Footer;
//Styled Components Style
const FooterContainer = styled.footer`
background: var(--dark-grey);
color: var(--light-grey) !important;

`