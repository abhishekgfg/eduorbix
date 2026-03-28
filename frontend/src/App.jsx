  import React from 'react';
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Layout from "./components/Layout";

  // Pages
  import Home from './pages/Homepage';
  import Studyindia from './pages/studyindia';
  import Studyabroad from './pages/Studyabroad';
  import StudyUK from './studyabroad/StudyUK';
  import AboutUs from './pages/AboutUs';
  import Course from './pages/Course';
  import University from './pages/University';
  import ApplicationForm from './components/ApplicationForm';
  import Services from './pages/Services';
  import Scholar from './pages/Scholar';
  import BlogPage from './blog/BlogPage';
  import BlogDetailsPage from './blog/BlogDetailsPage.jsx';
  import ContactPage from './pages/ContactPage.jsx';
  import PartnerSection from './pages/PartnerSection.jsx';
  import Agent from './pages/Agent.jsx';
import ProgramDetails from './studyindia/ProgramDetails.jsx';

  function App() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/study-in-india" element={<Studyindia />} />
            <Route path="/study-abroad" element={<Studyabroad />} />
            <Route path="/study/uk" element={<StudyUK />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/universities" element={<University />} />
            <Route path="/application-form" element={<ApplicationForm />} />
            <Route path="/services" element={<Services />} />
            <Route path="/scholarships" element={<Scholar />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetailsPage />} />
            <Route path='/partner' element={<PartnerSection />} />
            <Route path='/for-agents' element={<Agent />} />
            <Route path="/program/engineering" element={<ProgramDetails />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    );
  }

  export default App;