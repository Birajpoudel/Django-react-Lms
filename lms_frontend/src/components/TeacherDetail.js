import React from "react"
import {Link} from "react-router-dom";
function TeacherDetail(){
    return(
        <div className=" container mt-5  mb-3" >
        <div className="container-fluid row ">
          <div className="col-4 ">
            <img src="/logo512.png" className="img-thumbnail" alt="..."/>
          </div>
          <div className="col-8 text-start ">
            
              <h3 >Biraj Poudel</h3>
              <p  className="text-justify">This is a wider card with supporting text below as a natural lead-in to additional content.What a
                   terrible scene I saw that day! Huge flames of fire were coming out of each floor, and black and thi
                   ck smoke spread all around. Four fire engines were engaged and the firemen in their uniform were
                    playing the hose on various parts of the building. Then the tall ladders of the fire engine were
                     stretched upwards. </p>
             
                  <p className="fw-bold">Skills: <Link to="/" >Php</Link>,<Link to="/" >React js</Link>,<Link to="/" >React Native</Link></p>
                  <p className="fw-bold">Recent Courses: <Link to="/" >Python & Django</Link></p>

                  <p className="fw-bold">Rating:4.5/5</p>
          </div>
        </div>
        <div className="container-fluid text-start">
        <div className="card mt-4" >
            <div className="card-header fw-bold">
               Course List
            </div>
           <div className="list-group list-group-flush ">
            <Link to="/detail/1" class="list-group-item list-group-item action">Php Course1</Link>
            <Link to="/detail/1"class="list-group-item list-group-item action">Php Course2</Link>
            <Link to="/detail/1" class="list-group-item list-group-item action">Python Course1</Link>
            <Link to="/detail/1" class="list-group-item list-group-item action">Python Course2</Link>
            <Link to="/detail/1" class="list-group-item list-group-item action">Java Course1</Link>
            <Link to="/detail/1"class="list-group-item list-group-item action">Java Course2</Link>
            

           </div>
        </div>

        </div>
        
           
              
          
      </div>
    );
}
export default TeacherDetail;