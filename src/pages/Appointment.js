import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  console.log(appointments);

  const columns = [
    {
      name: "Patient Name",
      selector: (row) => row.patient_name,
      sortable: true,
    },
    { name: "Phone Number", selector: (row) => row.phone, sortable: true },
    {
      name: "Appointment Type",
      selector: (row) => row.appointment_type,
      sortable: true,
    },
    {
      name: "Doctor Name",
      selector: (row) => row.DoctorAppointments[0]?.name,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <span>
          <button className="btn btn-success me-1">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </span>
      ),
    },
  ];

  useEffect(() => {
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
        setAppointments(response.data.data);
        setFilteredAppointments(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const result = appointments.filter((appointment) => {
      return appointment.patient_name.toLowerCase().match(search.toLowerCase());
    });
    setFilteredAppointments(result);
  }, [search]);

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Appoointment</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Appointment</li>
            </ol>
          </nav>
        </div>
        <section class="section">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <DataTable
                    columns={columns}
                    data={filteredAppointments}
                    pagination
                    highlightOnHover
                    selectableRows
                    subHeader
                    selectableRowsHighlight
                    subHeaderComponent={
                      <input
                        type="text"
                        placeholder="Search here"
                        className="form-control my-3"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{ width: "35%" }}
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Appointment;
