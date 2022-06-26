
import React,{useEffect} from "react";



import Sidebar from "./Sidebar";

function Dashboard(){
    useEffect(()=>{
        document.title='LMS| Dashboard'

    });
    return(
        <div className=" container  mt-4 ">
            <div className="row">
                <aside className="col-md-3 ">
                        <Sidebar/>
                
                
                </aside>
                <div className="col-md-9 mt-2">
                   
                  
                   <img src="https://thumbs.dreamstime.com/z/girl-reading-book-school-education-concept-little-student-33877308.jpg" height="300px" width="600px" alt="Student reading books."/>
                </div>
            </div>
		</div> 
    );
}
export default Dashboard;