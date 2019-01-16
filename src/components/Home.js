import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import loader from '../images/loader.gif'






class Home extends Component {

    render() {
        return (

<Fragment >

<div className="h-100">

    <div id="loader"><img src={loader} alt="loader" /> </div>


    <div id="loadContainer">

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
        {/* <!-- search Section !--> */}
        <section className="slideshow w-100 d-inline-block m-0 p-0">
            <div className="row m-0 p-0"><img className="d-block img-fluid w-100" src="../images/bg.jpg" alt="bg"  />
                <div className="search py-5 px-4">
                    <p className="lead text-center">Lorem ipsum dolor sit amet,
                        dicta posidonium ea has, sea aeque facete constituam ut.</p>
                    <div className="col-12">
                        <input className="input-group p-3" placeholder="Write Your Keywords" alt="altImage" />
                    </div>
                    <div className="row m-0 py-3">
                        <div className="col-md-4">
                            <select className="p-3">
                                <option>Education type ....</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <select className="p-3">
                                <option>Choose location ....</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <select className="p-3">
                                <option>Choose School ....</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn">Search</button>
                    </div>
                </div>
            </div>
        </section>
        <div className="clearfix"></div>
    </div>
</div>

{/* <!-- Latest paper Section !--> */}
        <div className="backimg w-100 d-inline-block" id="about">
            <section className="about w90">
                <h1 className="text-center p-4">Latest Papers </h1>
                <div className="row m-0 align-items-center">
                    <div className="col-md-12 text-center align-items-center">
                        <ul className="list-inline text-center align-self-center align-items-center list-items paper-list">
                            <li className="list-inline-item m-0 p-3 list-items-active font-weight-bold" id="generalEducation">
                                General Education
                            </li>
                            <li className="list-inline-item m-0 p-3 font-weight-bold " id="universityEducation">University
                                Education
                            </li>
                            <li className="list-inline-item m-0 p-3 font-weight-bold" id="vocationalEducation">Vocational
                                Education
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="paperTabs">
                    <div className="row m-0 generalEducation slider-nav">
                        <div className="text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div className="text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div className="text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div className="text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div className="text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div className="text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div className="text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div className="text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 universityEducation">
                        <div className="col-md-4 text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div className="col-md-4 text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div className="col-md-4 text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div className="col-md-4 text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div className="col-md-4 text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div className="col-md-4 text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 vocationalEducation">
                        <div className="col-md-4 text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div className="col-md-4 text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div className="col-md-4 text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div className="col-md-4 text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div className="col-md-4 text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div className="col-md-4 text-left mt-4">
                            <div className="row h-100 m-0 paper">
                                <div className="col-12">
                                    <h3 className="text-center py-2">Heading</h3>
                                    <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="col-12 align-self-center">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/author-sign.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/calendar-tool-for-time-organization.png" alt="altImage" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li className="list-group-item d-flex"><span className="badge"><img src="images/documents-button.png" alt="altImage" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 align-self-end mt-4 p-0"><a className="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#testtest">More
                                        Details </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className="clearfix"></div>
        {/* <!-- Plans Section !--> */}
        <div className="backimg w-100 d-inline-block" id="cmc">
            <section className="cmc-project w90">
                <h1 className="text-center p-4">Our Plans</h1>
                <div className="row m-0 align-items-center">
                    <div className="col-md-12 text-center align-items-center">
                        <ul className="list-inline text-center align-self-center align-items-center list-items plan-list">
                            <li className="list-inline-item m-0 p-3 list-items-active font-weight-bold" id="planType">Public
                                Education
                            </li>
                            <li className="list-inline-item m-0 p-3 font-weight-bold" id="accSetting">University &
                                Technical
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="py-2 text-center" id="planTabs">
                    <div className="container planType">
                        <div className="row my-4">
                            <div className="col-md-4">
                                <div className="card m-1 card-plan">
                                    <div className="card-block my-3 p-5">
                                        <h1><b>Plan 1</b></h1>
                                        <br />>
                                        <p><b>5</b> Number of Memos</p>
                                        <hr />>
                                        <p><b>5</b> Number of Documents</p>
                                        <hr />
                                        <p><b>3</b> Month Subscription</p>
                                        <hr />
                                        <p><b>40</b> SAR</p>
                                        <hr />
                                    </div>
                                    <div className="card-block w-100 p-0"><a href="#test" className="btn btn-secondary w-100 font-weight-bold">Buy
                                            Now</a></div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card m-1 card-plan active-plan">
                                    <div className="card-block my-3 p-5">
                                        <h1><b>Plan 2</b></h1>
                                        <br />
                                        <p><b>5</b> Number of Memos</p>
                                        <hr />
                                        <p><b>5</b> Number of Documents</p>
                                        <hr />
                                        <p><b>3</b> Month Subscription</p>
                                        <hr />
                                        <p><b>40</b> SAR</p>
                                        <hr />
                                    </div>
                                    <div className="card-block w-100 p-0"><a href="#test" data-toggle="modal" data-target=".bd-example-modal-lg"
                                            className="btn btn-secondary w-100 font-weight-bold">Buy
                                            Now</a></div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card m-1 card-plan">
                                    <div className="card-block my-3 p-5">
                                        <h1><b>Plan 3</b></h1>
                                        <br />
                                        <p><b>5</b> Number of Memos</p>
                                        <hr />
                                        <p><b>5</b> Number of Documents</p>
                                        <hr />
                                        <p><b>3</b> Month Subscription</p>
                                        <hr />
                                        <p><b>40</b> SAR</p>
                                        <hr />
                                    </div>
                                    <div className="card-block w-100 p-0"><a href="#test" data-toggle="modal" data-target=".bd-example-modal-lg"
                                            className="btn btn-secondary w-100 font-weight-bold">Buy
                                            Now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container accSetting">
                        <div className="row my-4">
                            <div className="col-md-4">
                                <div className="card m-1 card-plan">
                                    <div className="card-block my-3 p-5">
                                        <h1><b>Plan 1</b></h1>
                                        <br />
                                        <p><b>5</b> Number of Memos</p>
                                        <hr />
                                        <p><b>5</b> Number of Documents</p>
                                        <hr />
                                        <p><b>3</b> Month Subscription</p>
                                        <hr />
                                        <p><b>40</b> SAR</p>
                                        <hr />
                                    </div>
                                    <div className="card-block w-100 p-0"><a href="#test" data-toggle="modal" data-target=".bd-example-modal-lg"
                                            className="btn btn-secondary w-100 font-weight-bold">Buy
                                            Now</a></div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card m-1 card-plan active-plan">
                                    <div className="card-block my-3 p-5">
                                        <h1><b>Plan 2</b></h1>
                                        <br />
                                        <p><b>5</b> Number of Memos</p>
                                        <hr />
                                        <p><b>5</b> Number of Documents</p>
                                        <hr />
                                        <p><b>3</b> Month Subscription</p>
                                        <hr />
                                        <p><b>40</b> SAR</p>
                                        <hr />
                                    </div>
                                    <div className="card-block w-100 p-0"><a href="#test" data-toggle="modal" data-target=".bd-example-modal-lg"
                                            className="btn btn-secondary w-100 font-weight-bold">Buy
                                            Now</a></div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card m-1 card-plan">
                                    <div className="card-block my-3 p-5">
                                        <h1><b>Plan 3</b></h1>
                                        <br />
                                        <p><b>5</b> Number of Memos</p>
                                        <hr />
                                        <p><b>5</b> Number of Documents</p>
                                        <hr />
                                        <p><b>3</b> Month Subscription</p>
                                        <hr />
                                        <p><b>40</b> SAR</p>
                                        <hr />
                                    </div>
                                    <div className="card-block w-100 p-0"><a href="#test" data-toggle="modal" data-target=".bd-example-modal-lg"
                                            className="btn btn-secondary w-100 font-weight-bold">Buy
                                            Now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className="clearfix"></div>

        {/* <!-- Contact Section !--> */}
        <div className="backimg w-100 d-inline-block mt-3" id="contact">
            <section className="contact">
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center text-capitalize">Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w90">
                    <div className="row">
                        <div className="col-md-6 px-3">
                            <form className="text-center">
                                <div className="form-group">
                                    <input type="text" className="form-control p-3 contact-input" id="InputName"
                                        placeholder="Your Name.." />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control p-3 contact-input" id="InputEmail1"
                                        placeholder="Enter E-mail.." />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control p-3 contact-input" id="Textarea" rows="7" placeholder="Your Message.."></textarea>
                                </div>
                                <button type="submit" className="btn m-auto text-center">Send</button>
                            </form>
                        </div>
                        <div className="col-md-6 px-3">
                            <div className="location-map">
                                <p className="lead  contact-information">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,
                                    sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo
                                    consequat.</p>
                            </div>
                            <div className="p-3">
                                <p className="lead contact-information"><img alt="alt" src="images/envelope.png" /> info@Dafour.net</p>
                                <p className="lead contact-information"><img alt="alt" src="images/placeholder.png" /> Lorem ipsum
                                    dolor
                                    sit amet</p>
                                <p className="lead contact-information"><img alt="alt" src="images/smartphone.png" /> +96
                                    (1234567891) +96
                                    (1234567891)</p>
                            </div>
                        </div>
                        <div className="col-md-12 text-center align-items-center">
                            <ul className="list-inline text-center align-self-center align-items-center">
                                <li className="list-inline-item m-0 p-3"><img alt="alt" src="images/facebook.png" /></li>
                                <li className="list-inline-item m-0 p-3"><img alt="alt" src="images/twitter.png" /></li>
                                <li className="list-inline-item m-0 p-3"><img alt="alt" src="images/instagram.png" /></li>
                                <li className="list-inline-item m-0 p-3"><img alt="alt" src="images/linkedin.png" /></li>
                                <li className="list-inline-item m-0 p-3"><img alt="alt" src="images/youtube.png" /></li>
                            </ul>
                            <p className="lead text-center contact-information p-0 mb-5">All copyrights reserved © Dafour
                                2018</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className="clearfix"></div>
    


    <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content text-center">
                <div className="modal-header text-center font-weight-bold mb-2">
                    <a href="#test"className="backto">back</a><strong className="text-center w-100"> خيارات الدفع</strong>
                </div>
                <div className="row text-center py-3 m-0 choosepayment">
                    <div className="col">
                        <a href="#test" id="sadadtransfer">
                            <img alt="alt" className="default-img" src="images/sadad-grey.png" style="width: 100px; height: auto;" />
                            <img alt="alt" className="hover-img" src="images/sadad-blue.png" style="width: 100px; height: auto;" />
                            <p className="font-weight-bold py-2">حساب سداد</p>
                        </a>
                    </div>
                    <div className="col">
                        <a href="#test" id="paypal">
                            <img alt="alt" className="default-img" src="images/paypal-grey.png" />
                            <img alt="alt" className="hover-img" src="images/paypal-blue.png" />
                            <p className="font-weight-bold py-2">PayPal</p>
                        </a>
                    </div>
                    <div className="col">
                        <a href="#test" id="creditcard">
                            <img alt="alt" className="default-img" src="images/credit-card-grey.png" />
                            <img alt="alt" className="hover-img" src="images/credit-card-blue.png" />
                            <p className="font-weight-bold py-2">البطاقة الائتمانية</p>
                        </a>
                    </div>
                    <div className="col">
                        <a href="#test" id="banktransfer">
                            <img alt="alt" className="default-img" src="images/bank-grey.png" />
                            <img alt="alt" className="hover-img" src="images/bank-blue.png" />
                            <p className="font-weight-bold py-2">التحويل البنكى</p>
                        </a>
                    </div>

                </div>
                <div className="row text-center py-3 m-0 creditcard paymentStep2">
                    <div className="col">
                        <form>
                            <div className="row">
                                    <h3 className="text-center w-100 font-weight-bold">البطاقة الائتمانية</h3>
                                <div className="col-12 my-1">
                                    <input className="p-2 w-100" type="text" placeholder="....رقم البطاقة" />
                                </div>
                                <div className="col-8 my-1">
                                    <input className="p-2 w-100" type="text" placeholder="....تاريخ الإنتهاء" />
                                </div>
                                <div className="col-4 my-1">
                                    <input className="p-2 w-100" type="text" placeholder="الكود"/>
                                </div>
                                <div className="col-12 my-1">
                                    <button className="btn btn-md px-3">إضافة</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="row text-center py-3 m-0 sadadtransfer paymentStep2">
                    <div className="col">
                        <form>
                            <div className="row">
                                <h3 className="text-center w-100 font-weight-bold">حساب سداد</h3>
                                <div className="col-12 my-1">
                                    <input className="p-2 w-100" type="text" placeholder="....رقم البطاقة"/>
                                </div>

                                <div className="col-12 my-1">
                                    <button className="btn btn-md px-3">دفع</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="row text-center py-3 m-0 banktransfer paymentStep2">
                    <div className="col-12">
                        <form className="bankTransferForm">
                            <div className="row">
                                <h3 className="text-center w-100 font-weight-bold">التحويل البنكى</h3>
                                <div className="col-12 my-1">
                                    <input className="p-2 w-100" type="text" placeholder="الاسم..." />
                                </div>
                                <div className="col-12 my-1">
                                    <input className="p-2 w-100" type="text" placeholder="....رقم الحساب"/>
                                </div>
                                <div className="col-12 my-1">
                                    <button className="btn btn-md px-3">اظهار ارقام الحسابات</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 py-2 bankAccounts">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>اسم البنك</th>
                                    <th>رقم الحساب</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>بنك البلاد</td>
                                    <td>0101010101010</td>
                                </tr>
                                <tr>
                                    <td>بنك البلاد</td>
                                    <td>0101010101010</td>
                                </tr>
                                <tr>
                                    <td>بنك البلاد</td>
                                    <td>0101010101010</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
<div className="modal-footer text-center d-block">
        <ul className="nav justify-content-center">
  <li className="nav-item">
    <img alt="alt" className="img-thumbnail" src="images/discover.png"/>
  </li>
  <li className="nav-item">
   <img alt="alt" className="img-thumbnail" src="images/visa.png"/>
  </li>
  <li className="nav-item">
   <img alt="alt" className="img-thumbnail" src="images/master-card.png"/>
  </li>

</ul>
      </div>
            </div>
        </div>
    </div>




</Fragment>
);
}

}

export default Home;
