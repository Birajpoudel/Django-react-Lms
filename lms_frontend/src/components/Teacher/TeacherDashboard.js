
import React,{useEffect} from "react";



import TeacherSidebar from "./TeacherSidebar";

function TeacherDashboard(){
    useEffect(()=>{
        document.title='LMS| Teacher Dashboard'

    });
    return(
        <div className=" container  mt-4 ">
            <div className="row">
                <aside className="col-md-3 ">
                        <TeacherSidebar/>
                
                
                </aside>
                <div className="col-md-9 mt-2">
                   
                  
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeaKEkwA_FKfTmUJdJEaTStOakbOSX8nYhLA&usqp=CAU" height="300px" width="700px" alt="teaching" />
                </div>
            </div>
		</div> 
    );
}
export default TeacherDashboard;