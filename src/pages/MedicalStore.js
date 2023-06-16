import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom'

const MedicalStore = () => {
  const [medicalstores, setMedicalStores] = useState([]);

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
    { name: "Phone Number", selector: (row) => row.phone, sortable: true },

    { name: "City", selector: (row) => row.address, sortable: true },
    { name: "Certificates", selector: (row) => row.certificate, sortable: true },
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
      url: `http://localhost:4000/api/medicalstore`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.data));
        setMedicalStores(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])
  
  return (
    <div>
         <main id="main" className="main">
        <div className="pagetitle">
          <h1>Medical Store</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Medical Store</li>
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
                    data={medicalstores}
                    pagination
                    highlightOnHover
                    selectableRows
                    subHeader
                    subHeaderComponent={
                      <input
                        type="text"
                        placeholder="Search..."
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
  )
}

export default MedicalStore