import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, password] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:3001/login", {
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
    <form className="loginForm">
      <h2> Login </h2>
      <input type="email" id="email" placeholder="Email" autoComplete="on" />
      <input
        type="password"
        id="password"
        placeholder="Password"
        autoComplete="on"
      />
      <button onClick={handleSubmit}> Submit </button>
    </form>
  );
}
