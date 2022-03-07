import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Account from "./components/Account";

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/account" element={<Account />}></Route>
        </Routes>
      </header>
    </main>
  );
}

export default App;
