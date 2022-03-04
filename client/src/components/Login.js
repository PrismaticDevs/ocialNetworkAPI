import { useState } from "react";
import axios from "../axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("/users/login", {
          email,
          password,
        })
        .then((response) => {
          console.log(response.data);
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
    </section>
  );
};

export default Login;
