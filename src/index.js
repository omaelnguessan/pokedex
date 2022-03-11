import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
