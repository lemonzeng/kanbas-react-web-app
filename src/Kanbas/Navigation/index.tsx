import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaBook } from "react-icons/fa6";
import{ LiaBookSolid  } from "react-icons/lia";
import {IoCalendarOutline, IoMailOutline} from "react-icons/io5";

export default function KanbasNavigation() {
  return (
    <div id="wd-courses-navigation" className="list-group rounded-0" style={{ backgroundColor: "black", height: "100vh" }}>
  <a id="wd-neu-link" target="_blank" 
    href="https://www.northeastern.edu/"
    className="list-group-item border-0" style={{ backgroundColor: "black", color: "white" }}>
    <img src="/images/NEU.png" width="75px" /> 
  </a>
  <a id="wd-account-link" href="#/Kanbas/Account"
    className="list-group-item text-center border-0" style={{ backgroundColor: "black", color: "white" }}>
    <FaRegCircleUser className="fs-1" style={{ color: "white" }} /> <br />
    Account
  </a>
  <a id="wd-dashboard-link" href="#/Kanbas/Dashboard"
    className="list-group-item text-center border-0" style={{ backgroundColor: "white", color: "red" }}>
    <AiOutlineDashboard className="fs-1" style={{ color: "red" }} /><br />
    Dashboard
  </a>
  <a id="wd-course-link" href="#/Kanbas/Courses" className="list-group-item text-center border-0" style={{ backgroundColor: "black", color: "white" }}>
    <LiaBookSolid className="fs-1" style={{ color: "red" }} /><br />
    Courses
  </a>
  <a id="wd-calendar-link" href="#/Kanbas/Calendar" className="list-group-item text-center border-0" style={{ backgroundColor: "black", color: "white" }}>
    <IoCalendarOutline className="fs-1" style={{ color: "red" }} /> <br />
    Calendar
  </a>
  <a id="wd-inbox-link" href="#/Kanbas/Inbox" className="list-group-item text-center border-0" style={{ backgroundColor: "black", color: "white" }}>
    <FaRegCircleUser className="fs-1" style={{ color: "red" }} /> <br />
    Inbox
  </a>
  <a id="wd-labs-link" href="#/Labs" className="list-group-item text-center border-0" style={{ backgroundColor: "black", color: "white" }}>
    <IoMailOutline className="fs-1" style={{ color: "red" }} /> <br />
    Labs
  </a>
</div>

  );
}
