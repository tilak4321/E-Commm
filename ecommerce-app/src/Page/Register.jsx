import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../index.css"

function Register() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();

    if (firstname.trim() === "") {
      alert("Please enter your first name");
      return;
    }

    if (lastname.trim() === "") {
      alert("Please enter your last name");
      return;
    }

    if (email.trim() === "") {
      alert("Please enter your email");
      return;
    }

    if (password.length < 8) {
      alert("Please enter at least 8 characters for password");
      return;
    }

    if (password !== confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Registration successful");
  };

  return (
    <div className="container">

      <div className="logo">
        <img src={logo} alt="E-Commerce Logo" />

        <p>
          <p>An e-commerce product description is a concise marketing paragraph that hooks shoppers by explaining what a product is, how it solves their problem, and why it is worth buying. It replaces the physical in-store experience by using vivid, sensory language to handle customer objections and drive immediate sales. High-quality paragraphs weave important search engine keywords naturally into the text so shoppers can easily discover the product online. Ultimately, a great description focuses heavily on the direct benefits to the consumer rather than just listing technical dimensions and raw materials.</p>
        </p>
      </div>

      <div className="form">

        <h3>Welcome To E-Commerce</h3>

        <form onSubmit={handleRegister}>

          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            value={firstname}
            onChange={(event) => setFirstName(event.target.value)}
          />

          <br /><br />

          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={lastname}
            onChange={(event) => setLastName(event.target.value)}
          />
               <br /><br />
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
             <br /><br />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
             <br /><br />

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
      </div>

    </div>
  );
}

export default Register;