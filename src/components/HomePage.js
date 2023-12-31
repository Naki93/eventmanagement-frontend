import React from 'react';
import splash from "../images/transparent.png"
import { Link } from 'react-router-dom';
import './HomePage.css';


//Homepage component displaying company name and login / signin buttons
const HomePage = () => {
  return (
    <div className="home-page">
      {/* Navigation Bar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
        
          <a className="navbar-brand logo" href="#">Eventify</a>
          <span className="">Your Go-To Event Platform</span>
          <div className="login-signup">
            <Link to="/login" className="btn btn-primary ">Login</Link>
            <Link to="/register" className="btn btn-warning ">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      
      <div className="about ">
        <div className="about-content">
          {/* Left Side */}
          <div className="text-content">
            <div className="left-side">
              <h1>Eventify is your go-to platform for managing and discovering upcoming events.</h1>
              <p className ="para">Whether you're a conference center looking to showcase your events or an attendee eager to explore exciting gatherings, Eventify has you covered.</p>
              <p className ="tag">
                <strong>Effortless Event Registration Seamless Event Management Enhanced Event Visibility</strong>
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
    
  );
};

export default HomePage;


