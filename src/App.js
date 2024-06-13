import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderFooterWrapper from "./components/HeaderFooterWrapper";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HeaderFooterWrapper>
                <Home />
              </HeaderFooterWrapper>
            }
          />
          <Route
            path="/courses"
            element={
              <HeaderFooterWrapper>
                <Courses />
              </HeaderFooterWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <HeaderFooterWrapper>
                <Contact />
              </HeaderFooterWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <HeaderFooterWrapper>
                <About />
              </HeaderFooterWrapper>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
