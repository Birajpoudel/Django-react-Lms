import React from "react";
import {Link } from "react-router-dom";


function TeacherSidebar(){
    return(
        <div className="card mt-2 mb-2 text-start">
            <h5 className="card-header"> <Link to="/teacher-dashboard">Teacher Dashboard</Link></h5>
            <div className="list-group list-group-flush">
                <Link to="/teacher-my-course" className="list-group-item list-group-item-action">My Courses</Link>
                <Link to="/teacher-add-course" className="list-group-item list-group-item-action">Add Course</Link>
                <Link to="#" className="list-group-item list-group-item-action">My Users</Link>
                <Link to="#" className="list-group-item list-group-item-action">Teacher Profile settings</Link>
                <Link to="#" className="list-group-item list-group-item-action">Teacher Change Password</Link>
                <Link to="/teacher-logout" className="list-group-item list-group-item-action text-danger">Logout</Link>
            </div>
        </div>
    );

}
export default TeacherSidebar;