import { useEffect } from "react";
import "./App.css";
import { init } from "./js/main";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Footer from "./layout/Footer";
import Appointment from "./pages/Appointment";
import Patient from "./pages/Patient";
import Doctor from "./pages/Doctor";
import Caretaker from "./pages/Caretaker";
import MedicalStore from "./pages/MedicalStore";
import Lab from "./pages/Lab";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
import Logout from "./auth/Logout";
import Login from './auth/Login';
import Register from './auth/Register';

function App() {
  useEffect(() => {
    // Call a function from the imported script
    init();

  }, []);
  return (
    <div>
      <Link
        id="scrollBtn"
        href="/"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </Link>

      <div id="preloader"></div>

      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/caretaker" element={<Caretaker />} />
        <Route path="/medicalstore" element={<MedicalStore />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
