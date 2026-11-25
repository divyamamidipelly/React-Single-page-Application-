import React, { useState, useRef } from "react";

function StudentRegistration() {

  const [student, setStudent] = useState({
    roll: "",
    firstName: "",
    lastName: "",
    fatherName: "",
    day: "",
    month: "",
    year: "",
    mobile: "",
    email: "",
    password: "",
    gender: "",
    department: [],
    course: "",
    city: "",
    address: ""
  });

  const photoRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent({
      ...student,
      [name]: value
    });
  };

  const handleDepartment = (e) => {
    const { value, checked } = e.target;

    setStudent((prev) => ({
      ...prev,
      department: checked
        ? [...prev.department, value]
        : prev.department.filter((d) => d !== value)
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const photo = photoRef.current.files[0];

    alert(
      "Student Registered Successfully!\n\n" +
      "Roll No: " + student.roll + "\n" +
      "Name: " + student.firstName + " " + student.lastName + "\n" +
      "Father Name: " + student.fatherName + "\n" +
      "DOB: " + student.day + "-" + student.month + "-" + student.year + "\n" +
      "Mobile: +91 " + student.mobile + "\n" +
      "Email: " + student.email + "\n" +
      "Gender: " + student.gender + "\n" +
      "Department: " + student.department.join(", ") + "\n" +
      "Course: " + student.course + "\n" +
      "Photo: " + (photo ? photo.name : "Not selected") + "\n" +
      "City: " + student.city + "\n" +
      "Address: " + student.address
    );
  };

  return (

    <div style={{
      width: "700px",
      margin: "30px auto",
      padding: "20px",
      backgroundColor: "pink",
      border: "2px solid black"
    }}>

      <h1 style={{ textAlign: "center" }}>
        Student Registration Form
      </h1>

      <form onSubmit={handleRegister}>

        <div style={{ margin: "15px" }}>
          Roll no. :
          <input type="text" name="roll"
            value={student.roll} onChange={handleChange}
            required style={{ marginLeft: "90px", width: "350px" }} />
        </div>

        <div style={{ margin: "15px" }}>
          Student name :
          <input type="text" name="firstName"
            placeholder="First Name" value={student.firstName}
            onChange={handleChange} required />

          -
          <input type="text" name="lastName"
            placeholder="Last Name" value={student.lastName}
            onChange={handleChange} required />
        </div>

        <div style={{ margin: "15px" }}>
          Father's name :
          <input type="text" name="fatherName"
            value={student.fatherName} onChange={handleChange}
            required style={{ marginLeft: "40px", width: "350px" }} />
        </div>

        <div style={{ margin: "15px" }}>
          Date of birth :
          <input type="number" name="day" placeholder="Day"
            value={student.day} onChange={handleChange}
            min="1" max="31" required style={{ marginLeft: "50px", width: "65px" }} />

          -
          <input type="number" name="month" placeholder="Month"
            value={student.month} onChange={handleChange}
            min="1" max="12" required style={{ width: "75px" }} />

          -
          <input type="number" name="year" placeholder="Year"
            value={student.year} onChange={handleChange}
            required style={{ width: "75px" }} />

          (DD-MM-YYYY)
        </div>

        <div style={{ margin: "15px" }}>
          Mobile no. :
          +91 -
          <input type="tel" name="mobile"
            placeholder="Enter Mobile Number"
            value={student.mobile} onChange={handleChange}
            pattern="[0-9]{10}" maxLength="10" required
            style={{ marginLeft: "10px", width: "320px" }} />
        </div>

        <div style={{ margin: "15px" }}>
          Email id :
          <input type="email" name="email"
            value={student.email} onChange={handleChange}
            required style={{ marginLeft: "75px", width: "350px" }} />
        </div>

        <div style={{ margin: "15px" }}>
          Password :
          <input type="password" name="password"
            value={student.password} onChange={handleChange}
            required style={{ marginLeft: "65px", width: "350px" }} />
        </div>

        <div style={{ margin: "15px" }}>
          Gender :
          <span style={{ marginLeft: "90px" }}>
            <input type="radio" name="gender" value="Male"
              checked={student.gender === "Male"}
              onChange={handleChange} required />
            Male

            <input type="radio" name="gender" value="Female"
              checked={student.gender === "Female"}
              onChange={handleChange} />
            Female
          </span>
        </div>

        <div style={{ margin: "15px" }}>
          Department :
          <span style={{ marginLeft: "45px" }}>
            {["CSE", "IT", "ECE", "Civil", "Mech"].map((d) => (
              <label key={d} style={{ marginRight: "8px" }}>
                <input type="checkbox"
                  value={d}
                  checked={student.department.includes(d)}
                  onChange={handleDepartment} />
                {d}
              </label>
            ))}
          </span>
        </div>

        <div style={{ margin: "15px" }}>
          Course :
          <select name="course" value={student.course}
            onChange={handleChange}
            required style={{ marginLeft: "90px", width: "370px" }}>
            <option value="">Select Current Course's</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
            <option value="Degree">Degree</option>
          </select>
        </div>

        <div style={{ margin: "15px" }}>
          Student photo :
          <input type="file" accept="image/*"
            ref={photoRef} required
            style={{ marginLeft: "35px" }} />
        </div>

        <div style={{ margin: "15px" }}>
          City :
          <input type="text" name="city"
            value={student.city} onChange={handleChange}
            required style={{ marginLeft: "115px", width: "350px" }} />
        </div>

        <div style={{ margin: "15px" }}>
          Address :
          <textarea name="address"
            value={student.address} onChange={handleChange}
            required style={{
              marginLeft: "85px",
              width: "350px",
              height: "70px"
            }} />
        </div>

        <hr />

        <div style={{ textAlign: "center" }}>
          <button type="submit">
            Register
          </button>
        </div>

      </form>

    </div>
  );
}

export default StudentRegistration;