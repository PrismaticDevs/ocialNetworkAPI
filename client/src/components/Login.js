import axios from "axios";
import { useState, useRef } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userRef = useRef();
  const data = {
    email: email,
    password: password,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    axios
      .post("https://localhost:3001/users/login", data)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(data);
        console.log(e);
      });
  };
  return (
    <section>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2> Login </h2>
        <input
          type="email"
          id="email"
          value={email}
          ref={userRef}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          autoComplete="on"
          required
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoComplete="on"
          required
        />
        <input type="submit" />
      </form>
    </section>
  );
};

export default Login;
