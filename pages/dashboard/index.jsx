import React, {
  useEffect,
  useState,
} from "react";
import {LoggedInNavbar} from "../../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <LoggedInNavbar activePage="dashboard"/>
      <h1>Dashboard</h1>
    </>
  )
}

export default Dashboard