import axios from "axios";
import DataTable from "react-data-table-component";
import React, { useEffect, useState } from "react";

const PatientDataTable = () => {
  const [appointment, setAppointment] = useState([]);

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
        setAppointment(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const getKeys = () => {
  //   if (appointment.length === 0) return [];

  //   return Object.keys(appointment[0]);
  // };

  return (
    <div>
      <DataTable
        columns={columns}
        data={appointment}
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

export default PatientDataTable;
