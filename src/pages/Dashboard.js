import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PatientDataTable from "../components/PatientDataTable";
import RecentBlogs from "../components/RecentBlogs";
import axios from "axios";
import PendingAppointments from "../components/PendingAppointments";

const Dashboard = () => {
  const [users, setUser] = useState([]);
  const [appointments, setAppointment] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    user();
    appointment();
    doctor();

  }, []);


  const user =() =>{
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/api/user/",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.data));
        setUser(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const appointment = () =>{
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/api/appointment/appointments",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.data));
        setAppointment(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const doctor = () =>{
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:4000/api/doctor`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.data));
        setDoctors(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        {/* <!-- End Page Title --> */}

        <section className="section dashboard">
          <div className="row">
            {/* <!-- Left side columns --> */}
            <div className="col-lg-8">
              <div className="row">
                {/* <!-- Sales Card --> */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card sales-card">
                    <div className="filter">
                      <a className="icon" href="/" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li>
                          <a className="dropdown-item" href="/">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        Doctors <span>| This Week</span>
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-people"></i>
                        </div>
                        <div className="ps-3">
                          <h6>{doctors.length}</h6>
                          <span className="text-success small pt-1 fw-bold">
                            12%
                          </span>
                          <span className="text-muted small pt-2 ps-1">
                            increase
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Sales Card --> */}

                {/* <!-- Revenue Card --> */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card revenue-card">
                    <div className="filter">
                      <a className="icon" href="/" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li>
                          <a className="dropdown-item" href="/">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        Appointments <span>| This week</span>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-chevron-bar-contract"></i>
                        </div>
                        <div className="ps-3">
                          <h6>{appointments.length}</h6>
                          <span className="text-success small pt-1 fw-bold">
                            8%
                          </span>
                          <span className="text-muted small pt-2 ps-1">
                            increase
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Revenue Card --> */}

                {/* <!-- Customers Card --> */}
                <div className="col-xxl-4 col-xl-12">
                  <div className="card info-card customers-card">
                    <div className="filter">
                      <a className="icon" href="/" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li>
                          <a className="dropdown-item" href="/">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        Patients <span>| This week</span>
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-people"></i>
                        </div>

                        <div className="ps-3">
                          <h6>{users.length}</h6>
                          <span className="text-danger small pt-1 fw-bold">
                            12%
                          </span>
                          <span className="text-muted small pt-2 ps-1">
                            decrease
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Customers Card --> */}

                {/* <!-- Reports --> */}

                {/* <!-- End Reports --> */}

                {/* <!-- Recent Sales --> */}
                <div className="col-12">
                  <div className="card recent-sales overflow-auto">
                    <div className="filter">
                      <a className="icon" href="/" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li>
                          <a className="dropdown-item" href="/">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        Pending Appointments <span>| Today</span>
                      </h5>
                      <PendingAppointments/>
                    </div>
                  </div>
                </div>
                {/* <!-- End Recent Sales --> */}

                {/* <!-- Top Selling --> */}
                <div className="col-12">
                  <div className="card top-selling overflow-auto">
                    <div className="filter">
                      <a className="icon" href="/" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li>
                          <a className="dropdown-item" href="/">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="card-body pb-0">
                      <h5 className="card-title">
                        Recent Appointments <span>| Today</span>
                      </h5>
                      <PatientDataTable />
                    </div>
                  </div>
                </div>
                {/* <!-- End Top Selling --> */}
              </div>
            </div>
            {/* <!-- End Left side columns --> */}

            {/* <!-- Right side columns --> */}
            <div className="col-lg-4">
              {/* <!-- Recent Activity --> */}
              <div className="card">
                <div className="filter">
                  <a className="icon" href="/" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <a className="dropdown-item" href="/">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="card-body">
                  <h5 className="card-title">
                    Recent Activity <span>| Today</span>
                  </h5>

                  <div className="activity">
                    <div className="activity-item d-flex">
                      <div className="activite-label">32 min</div>
                      <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                      <div className="activity-content">
                        Quia quae rerum
                        <a href="/" className="fw-bold text-dark">
                          explicabo officiis
                        </a>
                        beatae
                      </div>
                    </div>
                    {/* <!-- End activity item--> */}

                    <div className="activity-item d-flex">
                      <div className="activite-label">56 min</div>
                      <i className="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                      <div className="activity-content">
                        Voluptatem blanditiis blanditiis eveniet
                      </div>
                    </div>
                    {/* <!-- End activity item--> */}

                    <div className="activity-item d-flex">
                      <div className="activite-label">2 hrs</div>
                      <i className="bi bi-circle-fill activity-badge text-primary align-self-start"></i>
                      <div className="activity-content">
                        Voluptates corrupti molestias voluptatem
                      </div>
                    </div>
                    {/* <!-- End activity item--> */}

                    <div className="activity-item d-flex">
                      <div className="activite-label">1 day</div>
                      <i className="bi bi-circle-fill activity-badge text-info align-self-start"></i>
                      <div className="activity-content">
                        Tempore autem saepe
                        <a href="/" className="fw-bold text-dark">
                          occaecati voluptatem
                        </a>
                        tempore
                      </div>
                    </div>
                    {/* <!-- End activity item--> */}

                    <div className="activity-item d-flex">
                      <div className="activite-label">2 days</div>
                      <i className="bi bi-circle-fill activity-badge text-warning align-self-start"></i>
                      <div className="activity-content">
                        Est sit eum reiciendis exercitationem
                      </div>
                    </div>
                    {/* <!-- End activity item--> */}

                    <div className="activity-item d-flex">
                      <div className="activite-label">4 weeks</div>
                      <i className="bi bi-circle-fill activity-badge text-muted align-self-start"></i>
                      <div className="activity-content">
                        Dicta dolorem harum nulla eius. Ut quidem quidem sit
                        quas
                      </div>
                    </div>
                    {/* <!-- End activity item--> */}
                  </div>
                </div>
              </div>
              {/* <!-- End Recent Activity --> */}

              {/* <!-- Budget Report --> */}

              {/* <!-- End Budget Report --> */}

              {/* <!-- Website Traffic --> */}

              {/* <!-- End Website Traffic --> */}

              {/* <!-- News & Updates Traffic --> */}
              <div className="card">
                <div className="filter">
                  <a className="icon" href="/" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <a className="dropdown-item" href="/">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>

                <RecentBlogs />
              </div>
              {/* <!-- End News & Updates --> */}
            </div>
            {/* <!-- End Right side columns --> */}
          </div>
        </section>
      </main>
      {/* <!-- End #main --> */}
    </div>
  );
};

export default Dashboard;
