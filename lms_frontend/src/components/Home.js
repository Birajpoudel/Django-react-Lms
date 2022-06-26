import React from "react";
import { useEffect } from "react";

import {Link} from 'react-router-dom';
import AllCourses from "./AllCourses";
function Home() {
  useEffect(()=> {
    document.title='LMS|Home Page'
  });
  return (
    <div className="container mt-4">
      {/* Latest courses */}
      <h3 className="pb-1 text-start mt-4">Latest Courses<Link to="/all-courses" className="float-end"> See all</Link></h3>
      <div className="row mb-4">
        <div className="col-md-3">
        
          <div className="card " >
          <Link to="/detail/1"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>

              <Link to="/detail/1" className="btn btn-primary">Detail</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
        
          <div className="card " >
            <Link to="#"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>

              <Link to="#" className="btn btn-primary">Detail</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
        
          <div className="card " >
            <Link to="#"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>

              <Link to="#" className="btn btn-primary">Detail</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
        
          <div className="card " >
            <Link to="#"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>

              <Link to="#" className="btn btn-primary">Detail</Link>
            </div>
          </div>
        </div>

        
      </div>
       {/*  End Latest courses */}


      {/* popular courses */}
      <h3 className="pb-1 text-start mb-2 mt-5">Popular Courses<Link to="#" className="float-end"> See all</Link></h3>
      <div className="row mb-4">
        <div className="col-md-3">
        
          <div className="card " >
            <Link to="#"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>

              <Link to="#" className="btn btn-primary">Detail</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
        
          <div className="card " >
            <Link to="#"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>

              <Link to="#" className="btn btn-primary">Detail</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
        
          <div className="card " >
            <Link to="#"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>

              <Link to="#" className="btn btn-primary">Detail</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
        
          <div className="card " >
            <Link to="#"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>

              <Link to="#" className="btn btn-primary">Detail</Link>
            </div>
          </div>
        </div>

        
      </div>
      {/*  End popular courses */}

      
      {/* Featured Teachers */}
      <h3 className="pb-1 text-start mb-2 mt-5">Featured Teachers<Link to="#" className="float-end"> See all</Link></h3>
      <div className="row mb-4">
        <div className="col-md-3">
        
          <div className="card " >
            <Link to="#"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title">Teachers Name</h5>

              <Link to="#" className="btn btn-primary">Detail</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
        
          <div className="card " >
            <Link to="#"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title" >Teacher Name</h5>

              <Link to="#" className="btn btn-primary">Detail</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
        
          <div className="card " >
            <Link to="#"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title">Teacher Name</h5>

              <Link to="#" className="btn btn-primary">Detail</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
        
          <div className="card " >
            <Link to="#"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title">Teacher Name</h5>

              <Link to="#" className="btn btn-primary">Detail</Link>
            </div>
          </div>
        </div>

        
      </div>
      {/*  End Featured Teachers */}

       {/* Student Testimonials */}
       <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner bg-dark text-white py-5">
    <div class="carousel-item active">
    <figure class="text-center">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
    </div>
    <div class="carousel-item">
    <figure class="text-center">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element Biraj.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
    </div>
    <div class="carousel-item">
    <figure class="text-center">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element Poudel.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      {/*  Student Testimonials Teachers */}
   </div>

   
   );
}

export default Home;
