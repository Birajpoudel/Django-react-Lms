import React from "react";
import {Routes as Switch,Route} from 'react-router-dom';


import Home from './Home';
import About from './About';
import Header from './Header';
import Footer from './footer';
import CourseDetail from "./CourseDetail";
import TeacherDetail from "./TeacherDetail";

// User/Student
import Login from "./User/Login";
import Register from "./User/Register";
import Dashboard from "./User/Dashboard";
import MyCourses from "./User/MyCourses";
import FavoriteCourses from "./User/FavoriteCourses";
import RecommendedCourses from "./User/RecommendedCourses";
import ProfileSettings from "./User/ProfileSettings";
// Teacher
import TeacherLogin from "./Teacher/TeacherLogin";
import TeacherRegister from "./Teacher/TeacherRegister";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import TeacherProfileSettings from "./Teacher/TeacherProfile";
import TeacherMyCourse from "./Teacher/TeacherMyCourse";
import TeacherAddCourse from "./Teacher/TeacherAddCourse";
//List Pages
import AllCourses from "./AllCourses";

function Main() {
  return (
    <div className="App">
      <>
        <Header />

        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:course_id" element={<CourseDetail />} />
          <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail />} />
          <Route path="/all-courses" element={<AllCourses />} />

          {/* User */}
          <Route path="/user-login" element={<Login />} />
          <Route path="/user-register" element={<Register />} />
          <Route path="/user-dashboard" element={<Dashboard />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/favorite-courses" element={<FavoriteCourses />} />
          <Route path="/recommended-courses" element={<RecommendedCourses />} />
          <Route path="/profile-setting" element={<ProfileSettings />} />
          {/* Teacher */}
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/teacher-register" element={<TeacherRegister />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route
            path="/teacher-profile-setting"
            element={<TeacherProfileSettings />}
          />
          <Route path="/teacher-my-course" element={<TeacherMyCourse />} />
          <Route path="/teacher-add-course" element={<TeacherAddCourse />} />
        </Switch>
        <Footer />
      </>
    </div>
  );
}

export default Main;