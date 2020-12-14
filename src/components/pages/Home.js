import React from "react";
import styled from "styled-components"; //allow you style the components like css
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const Home = () => {
    return (
        <>
        <MainContainer  className="home-main-container">
            <Navbar />
            <div className="container">
            <h1 className="display-5 text-uppercase py-5 text-center">
                Welcome to Cheap Car Leasing!
            </h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            <div className="form-box">

                    <h3 className="display-6 text-uppercase text-center py-3">
                        Please sign in to view specials
                    </h3>
                    <form>
                        <div className="form-row mr-auto">
                            <div className="col-md-6 mb-4">
                                <input type="text" className="form-control" placeholder="First Name"/>
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" className="form-control" placeholder="Last Name"/>
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" className="form-control" placeholder="Phone Number"/>
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" className="form-control" placeholder="Email"/>
                            </div>
                            <button className="btn btn-dark text-uppercase">Login</button>
                        </div>
                    </form>
            </div>
            
            </div>
        </MainContainer>
        <Footer />
    </>
    );
}

export default Home;
// Styled Components Style Please review styled components
const MainContainer = styled.div`
h1 {
    color: var(--offwhite);
}
p{
    color: var(--aqua-blue);
}
h3 {
    color: var(--dark-grey);
}
.form-box{
    padding: 6rem 0;
}
form {
    padding: 5rem;
    margin: 0 auto;
} 
button {
    width: 100%;
    &:hover{
        background: var(--aqua-blue);
        border-color: var(--light-grey);
    }
    &:focus {
        background: var(--aqua-blue);
        border-color: var(--light-grey);
    }
}
input {
    background: var(--dark-grey);

}

`;
