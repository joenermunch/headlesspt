import "./App.scss";
import Projects from "./components/Projects/Projects";
import Hero from "./components/Hero/Hero";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost/BlogPost";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "animate.css/animate.min.css";

function App() {
  const User = () => {
    return <div>This is the user page</div>;
  };

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <nav>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/blog">Blog</Link>
            </div>
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/contact">Contact</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" exact element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
