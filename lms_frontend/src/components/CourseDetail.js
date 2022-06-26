import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function CourseDetail() {
  // let {course_id} = useParams();
  return (
    <div className=" container mt-5  mb-3">
      <div className="container-fluid row ">
        <div className="col-4 ">
          <img src="/logo512.png" className="img-thumbnail" alt="..." />
        </div>
        <div className="col-8 text-start ">
          <h3>Course Title</h3>
          <p className="text-justify">
            This is a wider card with supporting text below as a natural lead-in
            to additional content.What a terrible scene I saw that day! Huge
            flames of fire were coming out of each floor, and black and thi ck
            smoke spread all around. Four fire engines were engaged and the
            firemen in their uniform were playing the hose on various parts of
            the building. Then the tall ladders of the fire engine were
            stretched upwards.{" "}
          </p>

          <p className="fw-bold">
            Course By: <Link to="/teacher-detail/1">Teacher 1</Link>
          </p>
          <p className="fw-bold">Duration: 3 hours 30 mins</p>
          <p className="fw-bold">Total Enrolled: 4560 students</p>
          <p className="fw-bold">Rating:4.5/5</p>
        </div>
      </div>
      {/* course videos */}
      <div className="container-fluid">
        <div className="card mt-4 text-left">
          <div className="card-header fw-bold">Course videos</div>
          <ul className="list-group text-start">
            <li className="list-group-item ">
              Introduction
              <button
                className="btn btn-sm btn-danger float-end"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="bi-youtube"></i>
              </button>
              <span className=" float-end me-5">1 Hours 30 mins</span>
              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Modal title</h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div class="embed-responsive embed-responsive-16by9">
                        <iframe
                          class="embed-responsive-item"
                          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                          height="250"
                          width="465"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="list-group-item ">
              Introduction
              <button className="btn btn-sm btn-danger float-end">
                <i className="bi-youtube"></i>
              </button>
              <span className=" float-end me-5">1 Hours 30 mins</span>
            </li>

            <li className="list-group-item ">
              Introduction
              <button className="btn btn-sm btn-danger float-end">
                <i className="bi-youtube"></i>
              </button>
              <span className=" float-end me-5">1 Hours 30 mins</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-fluid">
        <h3 className="pb-1 text-start mt-4">Related Courses</h3>
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card ">
              <Link to="/detail/1">
                <img src="/logo512.png" className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Course Name</h5>

                <Link to="/detail/1" className="btn btn-primary">
                  Detail
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card ">
              <Link to="#">
                <img src="/logo512.png" className="card-img-top" alt="..." />
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
      </div>
    </div>
  );
}
export default CourseDetail;
