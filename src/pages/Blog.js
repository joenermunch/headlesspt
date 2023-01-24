import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/blog/being-a-brazilian-developer-working-for-the-usa-a-privilege-and-a-reminder-of-the-importance-of-education">
            Blog
          </Link>
        </div>
      </nav>
    </>
  );
}
