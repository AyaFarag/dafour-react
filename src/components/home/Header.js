import React, { Component } from 'react';


export default class Header extends Component {
  render() {



    return (
      <div>
{/* <!-- Header Section !--> */}

    <header className="header align-items-center m-0 p-0 position-absolute w-100" id="header">
        <div className="w90">
            <nav className="navbar navbar-expand-md navbar-light"><a className="navbar-brand logo text-center" href="#testtest">
                    <img  src="../images/logo.png" alt="logo"/> </a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-start" id="">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link lang" href="#testtest"><img src="../images/Language.png" alt="language"  />
                                Arabic</a></li>
                        <li className="nav-item btn-login"><a className="nav-link px-2" href="#testtest">Sign In/Up</a></li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="">
                    <ul className="navbar-nav navigation">
                        <li className="nav-item"><a className="nav-link" href="#testtest">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#testabout">About Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="#testcmc">Privacy</a></li>
                        <li className="nav-item"><a className="nav-link" href="#testservices">Support</a></li>
                        <li className="nav-item"><a className="nav-link" href="#testcontact">Contact us</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>

    <div className="clearfix"></div>

</div>

    )
  }
}
