import React from 'react';
import Dashboard from './Dashboard';
import KanbasNavigation from './Navigation';
import Courses from './Courses';
import { Navigate, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import './styles.css';

export default function Kanbas() {
  return (
    <Provider store={store}>
      <div id="wd-kanbas" className="h-100">
        <div className="d-flex h-100">
          <div className="d-none d-md-block">
            <KanbasNavigation />
          </div>
          <div className="flex-fill flex-fill p-3 p-md-4 p-lg-5">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses/:cid/*" element={<Courses />} />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}
