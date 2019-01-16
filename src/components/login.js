import React, { Component } from 'react';




class index extends Component {

    render() {
        return (

<div class="h-100" onload="loaderFunc()">
<div id="loader"><img src="images/loader.gif"/></div>
<div id="loadContainer">
<main class="login">
<!-- Header Section !-->
<header class="header align-items-center m-0 p-0 position-absolute w-100" id="header">
  <div class="w90">
    <nav class="navbar navbar-expand-md navbar-light"> <a class="navbar-brand logo text-center" href="#"> <img src="images/logo.png"> </a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
      <div class="collapse navbar-collapse justify-content-start" id="">
        <ul class="navbar-nav">
          <li class="nav-item"> <a class="nav-link lang" href="#"><img src="images/Language.png"/> Arabic</a> </li>
          <li class="nav-item btn-login"> <a class="nav-link px-2" href="#">Sign In/Up</a> </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse justify-content-end" id="">
        <ul class="navbar-nav navigation">
          <li class="nav-item"> <a class="nav-link" href="#">Home</a> </li>
          <li class="nav-item"> <a class="nav-link" href="#about">About Us</a> </li>
          <li class="nav-item"> <a class="nav-link" href="#cmc">Privacy</a> </li>
          <li class="nav-item"> <a class="nav-link" href="#services">Support</a> </li>
          <li class="nav-item"> <a class="nav-link" href="#contact">Contact us</a> </li>
        </ul>
      </div>
    </nav>
  </div>
</header>
<div class="clearfix"></div>
<!-- search Section !-->
<section class="slideshow w-100 d-inline-block m-0 p-0">
  <div class="row m-0 p-0"> <img class="d-block img-fluid w-100 position-absolute" src="images/bg.jpg">
    <div class="search py-5 px-4">
    <div class="col-md-12 text-center align-items-center">
            <ul class="list-inline text-center align-self-center align-items-center plan-list list-items">
              <li class="list-inline-item m-0 p-3 list-items-active font-weight-bold" id="planType">Student Sign In</li>
              <li class="list-inline-item m-0 p-3 font-weight-bold" id="accSetting">Professional Sign In</li>
            </ul>
          </div>
          <div id="planTabs">
           <div class="row planType">
     <p class="lead text-center w-100">Sign In To Student Account.</p>
      <div class="col-12">
        <input class="input-group p-3" placeholder="Username Or Email">
      </div>
      <div class="col-12 mt-3">
        <input class="input-group p-3" type="password" placeholder="Password">
      </div>
      <div class="col-12 mt-3">
        <p class="text-left d-inline float-left">You Dont Have An Account ? <a href="register.html"><small>Create New Account</small></a></p>
        <p class="text-right d-inline float-right"><a href="register.html"><small>Forget Your Password</small></a></p>
        <div class="clearfix"></div>
      </div>
      <div class="col-12 mt-3">
        <button class="btn">Login</button>
      </div>
	  </div>
	  <div class="row accSetting">
     <p class="lead text-center w-100">Sign In To Professional Account.</p>
      <div class="col-12">
        <input class="input-group p-3" placeholder="Username Or Email">
      </div>
      <div class="col-12 mt-3">
        <input class="input-group p-3" type="password" placeholder="Password">
      </div>
      <div class="col-12 mt-3">
        <p class="text-left d-inline float-left">You Dont Have An Account ? <a href="register.html"><small>Create New Account</small></a></p>
        <p class="text-right d-inline float-right"><a href="register.html"><small>Forget Your Password</small></a></p>
        <div class="clearfix"></div>
      </div>
      <div class="col-12 mt-3">
        <button class="btn">Login</button>
      </div>
	  </div>
	  </div>
    </div>
  </div>
</section>
<div class="clearfix"></div>
</main></div>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script> 
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> 
<script type="text/javascript" src="js/function.js"></script>
</div>

);
}

}

export default login;
