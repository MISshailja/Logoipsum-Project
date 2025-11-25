import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./utils/allRoutes";

import "./App.css";

const App = () => {
  
  const routing = useRoutes(routes);
  return routing;
};

export default App
