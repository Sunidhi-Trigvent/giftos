import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
import "./assets/css/bootstrap.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";

// Bootstrap 5 - No need for custom bootstrap.js or jQuery
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/js/bootstrap";

import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
