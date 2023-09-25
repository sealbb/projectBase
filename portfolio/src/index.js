import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Activity from "./pages/Activity";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Add the ScrollToTop component */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="experience" element={<Experience />} />
          <Route path="activity" element={<Activity />} />
          {/* <Route path="home" element={<Home />} /> */}
          {/* <Route path="profile/:id" element={<Profile />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
