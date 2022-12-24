import React, {
  useEffect,
  useState,
} from "react";
import {LoggedInNavbar} from "../../components/Navbar";

const Requests = () => {
  return (
    <>
      <LoggedInNavbar activePage="requests"/>
      <h1>Requests</h1>
    </>
  )
}

export default Requests