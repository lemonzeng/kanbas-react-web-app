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
      <div id="wd-dashboard-courses">
        {courses.map(course => (
          <div key={course.id} className="wd-dashboard-course">
            <img src={course.image} width={200} alt={course.title} />
            <div>
              <a className="wd-dashboard-course-link" href={`#/Kanbas/Courses/${course.id}/Home`}>
                {course.title}
              </a>
              <p className="wd-dashboard-course-title">{course.description}</p>
              <a href={`#/Kanbas/Courses/${course.id}/Home`}> Go </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
