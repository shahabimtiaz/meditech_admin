import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      {/* 
   <!-- ======= Sidebar ======= --> */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          {/* <!-- End Dashboard Nav --> */}

          {/* <li className="nav-heading">Pages</li> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/appointment">
            <i class="bi bi-chevron-bar-contract"></i>
              <span>Appointments</span>
            </NavLink>
          </li>
          {/* <!-- End Profile Page Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/patient">
            <i class="bi bi-people"></i>
              <span>Patients</span>
            </NavLink>
          </li>
          {/* 
      // <!-- End F.A.Q Page Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/doctor">
            <i class="bi bi-people"></i>
              <span>Doctors</span>
            </NavLink>
          </li>
          {/* <!-- End Contact Page Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/caretaker">
            <i class="bi bi-people"></i>
              <span>Caretakers</span>
            </NavLink>
          </li>
          {/* <!-- End Register Page Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/medicalstore">
            <i class="bi bi-prescription2"></i>
              <span>Medical Stores</span>
            </NavLink>
          </li>
          {/* <!-- End Login Page Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/lab">
            <i class="bi bi-virus"></i>
              <span>Labs</span>
            </NavLink>
          </li>
          {/* <!-- End Error 404 Page Nav --> */}

          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/blog">
            <i class="bi bi-file-earmark-text"></i>
              <span>Blog</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/profile">
            <i class="bi bi-person"></i>
              <span>Profile</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/logout">
            <i class="bi bi-box-arrow-right"></i>
              <span>Logout</span>
            </NavLink>
          </li>
          {/* <!-- End Blank Page Nav --> */}
        </ul>
      </aside>
      {/* <!-- End Sidebar--> */}
    </div>
  )
}

export default Sidebar