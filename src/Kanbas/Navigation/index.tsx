import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser} from "react-icons/fa6";
import { FaInbox } from "react-icons/fa6";
import{ LiaBookSolid  } from "react-icons/lia";
import {IoCalendarOutline, IoMailOutline} from "react-icons/io5";
import { LiaCogSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

export default function KanbasNavigation() {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => 
    isActive ? "list-group-item text-center border-0 bg-white text-danger" : "list-group-item text-center border-0 bg-black text-white";
  
  return (
    <div id="wd-courses-navigation" className="list-group rounded-0" style={{ backgroundColor: "black", height: "100vh" }}>
     <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item border-0 bg-black">
        <img src="/images/NEU.png" width="75px" />
      </a>
      <NavLink id="wd-account-link" to="Account"
        className="list-group-item text-center border-0 bg-black text-white">
        <FaRegCircleUser className="fs-1 text-white" /><br />
        Account
      </NavLink>
      <NavLink id="wd-dashboard-link" to="Dashboard"
        className={getNavLinkClass}>
        <AiOutlineDashboard className="fs-1 text-danger"/><br />
        Dashboard
      </NavLink>
      <NavLink id="wd-course-link" to="Courses" 
        className={getNavLinkClass}>
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses
      </NavLink>
      <NavLink id="wd-cNavLinklendar-link" to="Calendar" className={getNavLinkClass}>
        <IoCalendarOutline className="fs-1 text-danger"/> <br />
        Calendar
      </NavLink>
      <NavLink id="wd-inbox-link" to="Inbox" className={getNavLinkClass}>
        <FaInbox className="fs-1 text-danger" /> <br />
        Inbox
      </NavLink>
      <NavLink id="wd-labs-link" to="../Labs" className={getNavLinkClass}>
        <LiaCogSolid className="fs-1 text-danger" /> <br />
        Labs
      </NavLink>
    </div>

  );
}
