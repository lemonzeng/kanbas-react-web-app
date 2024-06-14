import "./index.css";
import { NavLink } from "react-router-dom";
export default function CoursesNavigation() {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => 
    isActive ? "list-group-item active border-0" : "list-group-item text-danger border border-0";

  return (
    <div id="wd-courses-navigation"  className="list-group fs-5 rounded-0 ">
      <NavLink id="wd-course-home-link" to="../Courses/1234/Home"
        className={getNavLinkClass}>Home</NavLink>
      <NavLink id="wd-course-modules-link" to="../Courses/1234/Modules"
        className={getNavLinkClass}>Modules</NavLink>
      <NavLink id="wd-course-piazza-link" to="../Courses/1234/Piazza"
        className={getNavLinkClass}>Piazza</NavLink>
      <NavLink id="wd-course-zoom-link" to="../Courses/1234/Zoom"
        className={getNavLinkClass}>Zoom</NavLink>
      <NavLink id="wd-course-quizzes-link" to="../Courses/1234/Assignments"
        className={getNavLinkClass}>Assignments</NavLink>
      <NavLink id="wd-course-assignments-link" to="../Courses/1234/Quizzes"
        className={getNavLinkClass}>Quizzes</NavLink>
      <NavLink id="wd-course-grades-link" to="../Courses/1234/Grades"
        className={getNavLinkClass}>Grades</NavLink>
    </div>
  );
}