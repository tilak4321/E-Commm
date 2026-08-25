
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      toast.warning("Please enter valid  email");
      return;
    }

    if (password.trim() === "") {
      toast.warning("Please enter password");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    toast.success("Login successful");
  };

  return (
    <div className="login">

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        Email:

        <input
          type="email"
          placeholder="Enter The Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <br /><br />

        Password:

        <input
          type="password"
          placeholder="Enter The Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

      <p>
        Don't have an account?{" "}
        <Link to="/register">
          Register
        </Link>

      </p>
      <a href="#">ForgotPassword</a>

      <ToastContainer/>

    </div>
  );
}

export default Login;