import React from "react";
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <div className="container border-top mt-5">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 mb-3">
        
        <ul className="nav ">
          <li className="nav-item"><Link to="/" className="nav-link ">Home</Link></li>
          <li className="nav-item "><Link to="#" className="nav-link ">Features</Link></li>
          <li className="nav-item "><Link to="#" className="nav-link ">Pricing</Link></li>
          <li className="nav-item "><Link to="#" className="nav-link ">FAQs</Link></li>
          <li className="nav-item "><Link to="/about" className="nav-link ">About</Link></li>
        </ul>
      </div>

     

      

      <div className="col-md-5 offset-md-1 mb-3 float-end">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2022 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><Link className="link-dark" to="#"><svg className="bi" width="24" height="24"><use to="#twitter"></use></svg></Link></li>
        <li className="ms-3"><Link className="link-dark" to="#"><svg className="bi" width="24" height="24"><use to="#instagram"></use></svg></Link></li>
        <li className="ms-3"><Link className="link-dark" to="#"><svg className="bi" width="24" height="24"><use to="#facebook"></use></svg></Link></li>
      </ul>
    </div>
  </footer>
</div>
    );
  }
  
export default Footer;
  