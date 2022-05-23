import { Route, Routes, Link } from "react-router-dom";
import React from 'react';
import { Container } from "./Container";
// pages
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import Outbox from "../pages/Outbox";
import Requests from "../pages/Requests";
import Settings from "../pages/Settings";


function RouterView() {
  return (
    <div className="content" >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="outbox" element={<Outbox />} />
            <Route path="requests" element={<Requests />} />
            <Route path="setting" element={<Settings />} />
            <Route path='*' element={<Notfound />} />
        </Routes>
    </div>
  )
}

export default RouterView