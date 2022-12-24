import React, {
  useEffect,
  useState,
} from "react";
import {LoggedInNavbar} from "../../components/Navbar";

const Reports = () => {
  return (
    <>
      <LoggedInNavbar activePage="reports"/>
      <h1>Reports</h1>
    </>
  )
}

export default Reports