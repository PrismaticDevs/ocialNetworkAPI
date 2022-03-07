import { useState } from "react";
import axios from "../axios";
let registerMsg;
let invalid;
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3001/users/", {
          username,
          email,
          password,
        })
        .then((response) => {
          registerMsg = response.data;
          if (
            registerMsg === "Not a valid email address" ||
            registerMsg === "Password must be at least 8 characters" ||
            registerMsg.includes("already has an account")
          ) {
            invalid = true;
          } else {
            invalid = false;
          }
          setTimeout(() => {
            window.location.href = "/account";
          }, 2000);
        })
        .catch((e) => {
          console.log(e);
        });
      setEmail("");
      setPassword("");
      setUsername("");
    } catch (error) {
      console.log(error, 26);
    }
  };

  return (
    <section>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        <h3
          className="registerMsg"
          style={invalid ? { color: "red" } : { color: "green" }}
        >
          {registerMsg}
        </h3>
        <label>Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          required
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          autoComplete="off"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input type="submit" />
      </form>
      <h3>
        Already have an account? <a href="/login">Login here</a>
      </h3>
    </section>
  );
};

export default Register;
