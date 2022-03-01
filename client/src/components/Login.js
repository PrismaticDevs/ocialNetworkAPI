import axios from "axios";
import { useState } from "react";
import { button, textField, Grid, Typography } from "@mui/material";

export default function Login() {
  const [email, password] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" id="email" placeholder="Email" autoComplete="on" />
      <input
        type="password"
        id="password"
        placeholder="Password"
        autoComplete="on"
      />
      <button>Submit</button>
    </form>
  );
}
