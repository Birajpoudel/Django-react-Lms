import React from "react";
import {Link } from "react-router-dom";


function Sidebar(){
    return(
        <div className="card mt-2 mb-2 text-start">
            <h5 className="card-header"> <Link to="/user-dashboard">  Dashboard</Link></h5>
            <div className="list-group list-group-flush">
                <Link to="/my-courses" className="list-group-item list-group-item-action">My Courses</Link>
                <Link to="/favorite-courses" className="list-group-item list-group-item-action">Favourite Courses</Link>
                <Link to="/recommended-courses" className="list-group-item list-group-item-action">Recommmended Courses</Link>
                <Link to="/profile-setting" className="list-group-item list-group-item-action">Profile settings</Link>
                <Link to="/change-password" className="list-group-item list-group-item-action">Change Password</Link>
                <Link to="/logout" className="list-group-item list-group-item-action text-danger">Logout</Link>
            </div>
        </div>
    );

}
export default Sidebar;