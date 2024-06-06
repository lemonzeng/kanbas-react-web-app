import React from "react";

export default function Dashboard() {
  const courses = [
    {
      id: "course1",
      title: "Course 1: Introduction to React",
      description: "Learn the basics of React.",
      image: "/images/course1.png",
    },
    {
      id: "course2",
      title: "Course 2: Advanced React",
      description: "Dive deeper into React.",
      image: "/images/course2.jpg",
    },
    {
      id: "course3",
      title: "Course 3: React and Redux",
      description: "Manage state with Redux.",
      image: "/images/course3.png",
    },
    {
      id: "course4",
      title: "Course 4: React Native",
      description: "Build mobile apps with React Native.",
      image: "/images/course4.jpg",
    },
    {
      id: "course5",
      title: "Course 5: Full Stack Development",
      description: "Learn full stack development with React and Node.js.",
      image: "/images/course5.jpg",
    },
    {
      id: "course6",
      title: "Course 6: Testing React Applications",
      description: "Learn to test your React applications.",
      image: "/images/course6.jpg",
    },
    {
      id: "course7",
      title: "Course 7: React Performance Optimization",
      description: "Optimize the performance of your React apps.",
      image: "/images/course7.jpg",
    },
  ];

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {courses.map(course => (
          <div key={course.id} className="wd-dashboard-course col" style={{ width: "270px"}}>
            <div className="card">
              <img src={course.image} className="card-img-top" alt={course.title} width={200} />
              <div className="card-body">
                <a 
                  className="wd-dashboard-course-link"
                  href={`#/Kanbas/Courses/${course.id}/Home`}
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  {course.title}
                </a>
                <p className="card-text wd-dashboard-course-title">
                  {course.description}
                </p>
                <a href={`#/Kanbas/Courses/${course.id}/Home`} className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
