import React from "react";
// import {Link} from "react-router-dom";

import TeacherSidebar from "./TeacherSidebar";

function TeacherMyCourses(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar/>
                </aside>
        
                <div className="col-md-9 card mt-2 mb-2">
                    <h5 className="card-header">My Courses </h5>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>Php Development</td>
                                
                                <td><button className="btn btn-danger btn-sm active">Delete</button></td>
                            </tbody>
                        </table>
                    </div>

                </div>
             </div>
        </div>
         
   
    );
}
export default TeacherMyCourses;