import { useState } from "react";
import axios from "../axios";
let loginMsg;
let invalid;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3001/users/login", {
          email,
          password,
        })
        .then((response) => {
          loginMsg = response.data;
          if (loginMsg === "Invalid login credentials") {
            invalid = true;
          } else {
            invalid = false;
            setTimeout(() => {
              window.location.href = "/account";
            }, 2000);
          }
        })
        .catch((e) => {
          console.log(e);
        });
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error, 26);
    }
  };

  return (
    <section>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2> Login </h2>
        <h3
          className="loginMsg"
          style={invalid ? { color: "red" } : { color: "green" }}
        >
          {loginMsg}
        </h3>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          autoComplete="on"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          autoComplete="on"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input type="submit" />
      </form>
      <h3>
        Need an account? <a href="/register">Register here</a>
      </h3>
    </section>
  );
};

export default Login;
