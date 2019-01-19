import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import '../style/App.css';
import '../css/main.css';
import '../css/bootstrap.css';
import '../css/slick.css';
import '../css/slick-theme.css';
import 'bootstrap/dist/js/bootstrap.js';

import Home from './home/Home';
// import About from './en/About';
// import Privacy from './en/Privacy';
import Login from './en/Login';
// import SignUp from './en/SignUp';




class App extends Component {
  render() {
    return (
      
       <BrowserRouter>
         <div>

          <Home/>

          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          {/* <Route path="/about" Component={About} /> */}
          {/* <Route path="/privacy" Component={Privacy} /> */}
          {/* <Route path="/signup" Component={SignUp} /> */}
       
         </div>
       </BrowserRouter>
       
   
    );
  }
}

export default App;
