import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

import { useState } from "react";

import "./App.css";

function App() {


  return (
    <div className="main-div">
      <Header />
      <div>
      <Outlet />
      </div>
    </div>

  );
}

export default App;
