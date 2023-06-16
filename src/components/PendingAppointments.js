import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const PendingAppointments = () => {
  const [pendingAppointment, setPendingAppointment] = useState([]);
  const [search, setSearch] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);

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
        <span className="badge bg-warning">Pending</span>
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
        setPendingAppointment(response.data.data);
        setFilteredAppointments(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const result = pendingAppointment.filter((appointment) => {
      return appointment.patient_name.toLowerCase().match(search.toLowerCase());
    });
    setFilteredAppointments(result);
  }, [search]);
  return (
    <div>
      <DataTable
        columns={columns}
        data={filteredAppointments}
        pagination
        highlightOnHover
        selectableRows
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search here"
            className="form-control"
            style={{ width: "35%" }}
          />
        }
      />
    </div>
  );
};

export default PendingAppointments;
