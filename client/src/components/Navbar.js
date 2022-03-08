import axios from "axios";
import { useState } from "react";

const Navbar = () => {
  let [token, setToken] = useState({});
  async function loginStatus() {
    await axios
      .get("http://localhost:3001/users/login")
      .then((response) => {
        token = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
    setToken(token);
  }
  loginStatus();
  function logout() {
    axios.get("http://localhost:3001/users/logout").catch((e) => {
      console.log(e);
    });
  }
  if (token) {
    return (
      <nav>
        <ul>
          <li>
            <a href="/account">Account</a>
          </li>
          <li>
            <a className="danger logout" href="/login" onClick={logout}>
              Logout
            </a>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navbar;
