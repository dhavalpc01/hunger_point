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
import Home from "./pages/home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my_order" element={<MyOrders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/OrderDetail" element={<OrderDetail />} />
        <Route path="/MyAddresses" element={<MyAddresses />} />
        <Route path="/AddressDetails" element={<AddressDetails />} />
      </Routes>
    </>
  );
}

export default App;
