import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import AcademicsPage from './pages/AcademicsPage';
import ContactPage from './pages/ContactPage';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <Router>
      <MainLayout>
        
        <div className="mt-20">
          <Navbar />
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Analytics />
        </div>
      </MainLayout>
    </Router>
  );
};

export default App;
