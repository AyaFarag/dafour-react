import React, { Component } from 'react';
import Header from '../home/Header';




class Login extends Component {

    render() {
        return (
  <div>
          <Header />

    {/*  search Section*/}
    <section className="slideshow w-100 d-inline-block m-0 p-0">
      <div className="row m-0 p-0"> <img className="d-block img-fluid w-100 position-absolute" src="images/bg.jpg" alt="bg"/>
        <div className="search py-5 px-4">
        <div className="col-md-12 text-center align-items-center">
                <ul className="list-inline text-center align-self-center align-items-center plan-list list-items">
                  <li className="list-inline-item m-0 p-3 list-items-active font-weight-bold" id="planType">Student Sign In</li>
                  <li className="list-inline-item m-0 p-3 font-weight-bold" id="accSetting">Professional Sign In</li>
                </ul>
              </div>
              <div id="planTabs">
              <div className="row planType">
        <p className="lead text-center w-100">Sign In To Student Account.</p>
          <div className="col-12">
            <input className="input-group p-3" placeholder="Username Or Email" />
          </div>
          <div className="col-12 mt-3">
            <input className="input-group p-3" type="password" placeholder="Password" />
          </div>
          <div className="col-12 mt-3">
            <p className="text-left d-inline float-left">You Dont Have An Account ? <a href="register.html"><small>Create New Account</small></a></p>
            <p className="text-right d-inline float-right"><a href="register.html"><small>Forget Your Password</small></a></p>
            <div className="clearfix"></div>
          </div>
          <div className="col-12 mt-3">
            <button className="btn">Login</button>
          </div>
        </div>
        <div className="row accSetting">
        <p className="lead text-center w-100">Sign In To Professional Account.</p>
          <div className="col-12">
            <input className="input-group p-3" placeholder="Username Or Email" />
          </div>
          <div className="col-12 mt-3">
            <input className="input-group p-3" type="password" placeholder="Password" />
          </div>
          <div className="col-12 mt-3">
            <p className="text-left d-inline float-left">You Dont Have An Account ? <a href="register.html"><small>Create New Account</small></a></p>
            <p className="text-right d-inline float-right"><a href="register.html"><small>Forget Your Password</small></a></p>
            <div className="clearfix"></div>
          </div>
          <div className="col-12 mt-3">
            <button className="btn">Login</button>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>
    <div className="clearfix"></div>
 
    </div>


);
}

}

export default Login;
