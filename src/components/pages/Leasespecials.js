

import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
// Import images
import accord from '../../images/accord.jpg';
// import civic from './../civic.jpg';
// import hyundai from './../hyundai.jpg';
// import jetta from './../jetta.jpg';
// import equinox from './../equinox.jpg';
// import trax from './../trax.jpg';
import {Button} from './Button';


 const Leasespecials = () => {
    return (
        <div className="container">
            <div className="row mx-auto justify-content-center">
                <div className="card col-md-6 p-2">
                    <img src={accord} alt="..." className="card-img-top mx-auto" />
                    <div className="card-body">
                        <h3 className="card-title text-center pb-2">
                        Hyundai Elantra
                        </h3>
                        <p>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <Link to="/">
                        <Button className="btn btn-primary text-uppercase">View Offer</Button>

                        </Link>
                    </div>

                </div>
                
            </div>

            
        </div>
    )
}
export default Leasespecials;
