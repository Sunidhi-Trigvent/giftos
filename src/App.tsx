import React from "react";

import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
import "./assets/css/bootstrap.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
