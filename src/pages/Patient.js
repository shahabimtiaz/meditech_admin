import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const Patient = () => {
  const [patients, setPatients] = useState([]);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    { name: "Email", selector: (row) => row.email, sortable: true },
    {
      name: "Password",
      selector: (row) => row.password,
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
      url: "http://localhost:4000/api/user/",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.data));
        setPatients(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Patient</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Patient</li>
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
                    data={patients}
                    pagination
                    highlightOnHover
                    selectableRows
                    subHeader
                    subHeaderComponent={
                      <input
                        type="text"
                        placeholder="Search here"
                        className="form-control my-3"
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

export default Patient;
