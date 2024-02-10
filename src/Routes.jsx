import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const FAQ = React.lazy(() => import("pages/FAQ"));
const OURSERVICE = React.lazy(() => import("pages/OURSERVICE"));
const ABOUTUS = React.lazy(() => import("pages/ABOUTUS"));
const Contactus = React.lazy(() => import("pages/Contactus"));
const LANDINGPAGE = React.lazy(() => import("pages/LANDINGPAGE"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/landingpage" element={<LANDINGPAGE />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/aboutus" element={<ABOUTUS />} />
          <Route path="/ourservice" element={<OURSERVICE />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
