import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import loader from '../images/loader.gif'






class Home extends Component {

    render() {
        return (

<Fragment >

<div class="h-100" onload="loaderFunc()">

    <div id="loader"><img src={loader} alt="loader"/></div>


    <div id="loadContainer">

        

        <header className="header align-items-center m-0 p-0 position-absolute w-100" id="header">
            <div className="w90">
                <nav className="navbar navbar-expand-md navbar-light"><a className="navbar-brand logo text-center" href="#test">
                        <img src="images/logo.png" alt="logo"/> </a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-start" id="">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link lang" href="#test"><img src="images/Language.png" alt="language" />
                                    Arabic</a></li>
                            <li className="nav-item btn-login"><a className="nav-link px-2" href="#test">Sign In/Up</a></li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="">
                        <ul className="navbar-nav navigation">
                            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
                            <li className="nav-item"><a className="nav-link" href="#cmc">Privacy</a></li>
                            <li className="nav-item"><a className="nav-link" href="#services">Support</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact us</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

        <div className="clearfix"></div>
    </div>
</div>




</Fragment>
);
}

}

export default Home;
