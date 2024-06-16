import { Link } from "react-router-dom";
import * as db from "../Database";
import { MdHeight } from "react-icons/md";
import "./index.css";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5" style={{ margin: '15px -15px' }}>
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{  width: '270px', padding: '15px' }}>
              <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none  h-100" >
                <div className="card rounded-3 overflow-hidden">
                  <img src={course.imageUrl} alt={`Image for ${course.name}`} className="card-img-top" style={{ height: '160px', objectFit: 'cover' }}/>
                  <div className="card-body">
                    <span className="wd-dashboard-course-link"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold", maxHeight: "3em", overflow: "hidden"  }} >
                      {course.name}
                    </span>
                    <p className="wd-dashboard-course-title card-text text-muted" style={{ maxHeight: 53, overflow: "hidden" }}>
                      {course.description}
                    </p>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
