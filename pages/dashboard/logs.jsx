import React, {
  useEffect,
  useState,
} from "react";
import {LoggedInNavbar} from "../../components/Navbar";

const Logs = () => {
  return (
    <>
      <LoggedInNavbar activePage="logs"/>
      <h1>Logs</h1>
    </>
  )
}

export default Logs