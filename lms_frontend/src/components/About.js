import React,{useEffect} from "react";
function About(){
    useEffect(()=>{
        document.title='LMS| About Us'
    });
    return(
        <h3>This is about us page</h3>
    );
}
export default About;