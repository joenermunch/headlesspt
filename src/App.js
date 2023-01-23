import "./App.scss";
import Projects from "./components/Projects/Projects";
import Hero from "./components/Hero/Hero";
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  const User = () => {
    return <div>This is the user page</div>;
  };

  return (
    <>
      <BrowserRouter>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/user/:id">User</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
