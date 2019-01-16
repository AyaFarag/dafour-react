import React, { Component } from 'react';
import '../style/App.css';
import '../css/bootstrap.css';
import '../css/main.css';
import '../css/slick.css';
import '../css/slick-theme.css';
import '../css/jquery.mobile.datepicker.css';
import '../css/jquery.mobile.datepicker.css';

// import 'https://fonts.googleapis.com/css?family=Roboto:400,500,700';
// import 'https://fonts.googleapis.com/css?family=Tajawal';
import Home from './Home';




class App extends Component {
  render() {
    return (
      
       <React.Fragment>
         
         
          <p>
            APP Component

          </p>
          <Home/>
          
       </React.Fragment>
       
   
    );
  }
}

export default App;
