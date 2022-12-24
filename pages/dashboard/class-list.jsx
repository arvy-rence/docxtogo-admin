import React, {
  useEffect,
  useState,
} from "react";
import {LoggedInNavbar} from "../../components/Navbar";

const ClassList = () => {
  return (
    <>
      <LoggedInNavbar activePage="class-list"/>
      <h1>Class List</h1>
    </>
  )
}

export default ClassList