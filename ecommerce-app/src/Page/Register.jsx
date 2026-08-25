import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";

function Register() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();

    if (firstname.trim() === "") {
      toast.warning("Please enter your first name");
      return;
    }

    if (lastname.trim() === "") {
      toast.warning("Please enter your last name");
      return;
    }

    if (dob === "") {
      toast.warning("Please enter your date of birth");
      return;
    }

    if (phone.trim() === "") {
      toast.warning("Please enter your phone number");
      return;
    }

   if (phone.length !== 10 || isNaN(Number(phone))) {
  toast.error("Phone number must contain exactly 10 digits");
  return;
}
    if (email.trim() === "") {
      toast.warning("Please enter your email");
      return;
    }

    if (password.length < 8) {
      toast.error("Please enter at least 8 characters for password");
      return;
    }

    if (password !== confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }

    toast.success("Registration successful");
  };

  return (
    <div className="container">

      <div className="logo">
        <img src={logo} alt="E-Commerce Logo" />

        <p>
          An e-commerce product description is a concise marketing paragraph
          that hooks shoppers by explaining what a product is, how it solves
          their problem, and why it is worth buying.
        </p>
      </div>

      <div className="form">

        <h3>Welcome To E-Commerce</h3>

        <form onSubmit={handleRegister}>

          {/* First Name */}
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            value={firstname}
            onChange={(event) => setFirstName(event.target.value)}
          />

          <br /><br />

          {/* Last Name */}
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={lastname}
            onChange={(event) => setLastName(event.target.value)}
          />

          <br /><br />

          {/* DOB */}
          <label>Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
          />

          <br /><br />

          {/* Phone */}
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter 10 digit phone number"
            value={phone}
            maxLength="10"
            onChange={(event) => {
              const value = event.target.value;

              // Allow only numbers
              if (/^[0-9]*$/.test(value)) {
                setPhone(value);
              }
            }}
          />

          <br /><br />

          {/* Email */}
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <br /><br />

          {/* Password */}
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <br /><br />

          {/* Confirm Password */}
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmpassword}
            onChange={(event) =>
              setConfirmPassword(event.target.value)
            }
          />

          <br /><br />

          <button type="submit">
            Register
          </button>

          <br /><br />

          <p>
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>

        </form>

        {/* Toast container */}
        <ToastContainer />

      </div>

    </div>
  );
}

export default Register;