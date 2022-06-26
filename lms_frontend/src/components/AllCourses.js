import React from "react";
import { Link } from "react-router-dom";
function AllCourses() {
  return (
    <div className="container mt-4">
      {/* Latest Course */}
      <h3 className="pb-1 text-start mt-4">Latest Courses</h3>
      <div className="row mb-4">
        <div className="col-md-3 mb-3 mb-3">
          <div className="card ">
            <Link to="/detail/1">
              <img src="logo512.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>

              <Link to="/detail/1" className="btn btn-primary">
                Detail
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card ">
            <Link to="#">
              <img src="logo512.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>

              <Link to="#" className="btn btn-primary">
                Detail
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card ">
            <Link to="#">
              <img src="logo512.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>

              <Link to="#" className="btn btn-primary">
                Detail
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card ">
            <Link to="#">
              <img src="logo512.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>

              <Link to="#" className="btn btn-primary">
                Detail
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card ">
            <Link to="#">
              <img src="logo512.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>

              <Link to="#" className="btn btn-primary">
                Detail
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card ">
            <Link to="#">
              <img src="logo512.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>

              <Link to="#" className="btn btn-primary">
                Detail
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card ">
            <Link to="#">
              <img src="logo512.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>

              <Link to="#" className="btn btn-primary">
                Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End latest course */}
      {/* pagination */}

      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      {/* End */}
    </div>
  );
}
export default AllCourses;
