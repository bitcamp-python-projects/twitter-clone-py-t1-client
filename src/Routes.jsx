// src/Routes.jsx
import React from "react"
import { BrowserRouter as Router, Route, Routes as ReactRouterRoutes } from "react-router-dom"
import App from "./App"
import { Signup, Login } from "./Signup"

function Routes() {
  return (
    <Router>
      <ReactRouterRoutes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </ReactRouterRoutes>
    </Router>
  );
}

export default Routes;
