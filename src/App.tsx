import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import MyOrders from "./pages/myOrders";
import OrderDetail from "./pages/myOrders/orderDetail";
import MyAddresses from "./pages/myAddresses";
import AddressDetails from "./pages/myAddresses/addressDetails";
import Profile from "./pages/profile";

function App() {
  return (
    <Routes>
      {/* <Header /> */}
      {/* <Route path="/" element={<MyOrders />} /> */}
      <Route path="/" element={<Profile  />} />
    </Routes>
  );
}

export default App;
