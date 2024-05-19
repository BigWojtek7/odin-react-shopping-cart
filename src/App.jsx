import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

import fetchProducts from "./components/FetchProducts/fetchProducts";
import { useEffect } from "react";
import { useState } from "react";

import "./App.css";

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchProducts().then((result) =>{
      setProducts(result)
    })
    return () => {
      setProducts([])
    }
  },[])

  return (
    <div className="main-div">
      <Header />
      <div>
      <Outlet context={products}/>
      </div>
    </div>

  );
}

export default App;
