import React from "react";
import {Link} from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg  bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">Learn Online</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Courses</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Teacher
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="nav-item">
                  <Link className="nav-link" to="/teacher-login">Login</Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link" to="/teacher-register">Register</Link>
                </li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/teacher-dashboard">Dashboard</Link></li>
                  <li><Link className="dropdown-item" to="/teacher-logout">Logout</Link></li>
                </ul> 
              </li>
              
                
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About Us</Link>
               </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 User/Student
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="nav-item">
                  <Link className="nav-link" to="/user-login">Login</Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link" to="/user-register">Register</Link>
                </li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/user-dashboard">Dashboard</Link></li>
                  <li><Link className="dropdown-item" to="/user-logout">Logout</Link></li>
                </ul> 
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    );
  }
  
export default Header;
  