import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const initialFormData = {
    name: "",
    phoneNumber: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    previousExperience: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const doctorsList = [
    { name: "Dr. Vijeth", city: "Bengaluru" },
    { name: "Dr. Ganesh", city: "Bengaluru" },
    { name: "Dr. Annappa", city: "Bengaluru" },
    { name: "Dr. Lee", city: "Chenai" },
    { name: "Dr. Lura", city: "Chenai" },
    { name: "Dr. Madu", city: "Chenai" },
    { name: "Dr. Moony", city: "Mangaluru" },
    { name: "Dr. Manohar", city: "Mangaluru" },
    { name: "Dr. Annappa", city: "Mangaluru" },
    { name: "Dr. Radha", city: "Mumbai" },
    { name: "Dr. Veena", city: "Mumbai" },
    { name: "Dr. Mahesh", city: "Mumbai" },
    { name: "Dr. Lee", city: "Mumbai" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = () => {
    setFormData(initialFormData);
  };

  const showDoctors = () => {
    const filteredDoctors = doctorsList.filter(
      (doctor) => doctor.city.toLowerCase() === formData.city.toLowerCase()
    );

    return (
      <div id="doctorList">
        <h2 className="best"> Best Available Doctors in {formData.city}:</h2>
        <ul>
          {filteredDoctors.map((doctor, index) => (
            <li key={index}>{doctor.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div id="booknow" className="booking-form-container">
      <h1 className="booking_heading">Booking Form</h1>

      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <br />
      <label>Phone Number:</label>
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
      />
      <br />

      <label>Age:</label>
      <input
        type="text"
        name="age"
        value={formData.age}
        onChange={handleInputChange}
      />
      <br />
      <label>City:</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
      />
      <br />
      <label>Company:</label>
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleInputChange}
      />
      <br />

      <label>Chief Complaints:</label>
      <textarea
        name="chiefComplaints"
        value={formData.chiefComplaints}
        onChange={handleInputChange}
      ></textarea>
      <br />

      {formData.age >= 40 && (
        <div>
          <label>
            Any previous experience with physiotherapy:
            <input
              type="text"
              name="previousExperience"
              value={formData.previousExperience}
              onChange={handleInputChange}
            />
          </label>
          <br />
        </div>
      )}

      {showDoctors()}

      <button className="submitBtn" onClick={handleFormSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Form;
