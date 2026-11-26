import React from "react";

import { Link, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";

const App = () => {

  return (
    <>
      <div>
        <Link to="/" style={{ marginRight: 100 }}>
          Home
        </Link>

        <Link to="/contact" style={{ marginRight: 100 }}>
          Contact
        </Link>

        <Link to="/about" style={{ marginRight: 100 }}>
          About
        </Link>

        <Link to="/login" style={{ marginRight: 100 }}>
          Login
        </Link>

        <Link to="/register" style={{ marginRight: 100 }}>
          Register
        </Link>
      </div>

      <hr />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<About />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

        </Routes>
      </div>

      <hr />

      <Footer />

    </>
  );
};

export default App;