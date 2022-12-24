import React, {
  useEffect,
  useState,
} from "react";
import {LoggedInNavbar} from "../../components/Navbar";
import InfoCard from "../../components/dashboard/InfoCard";
import {FaFolder, FaFileSignature, FaCheckSquare, FaCalendarDay} from "react-icons/fa";

const Dashboard = (props) => {
  return (
    <>
      <LoggedInNavbar activePage="dashboard"/>
      <div className="flex justify-center items-center">
        <InfoCard value={('000' + props.onProcess).slice(-4)} icon={<FaFolder/>} title={"On Process"}/>
        <InfoCard value={('000' + props.forSignature).slice(-4)} icon={<FaFileSignature/>} title={"For Signature"}/>
        <InfoCard value={('000' + props.forRelease).slice(-4)} icon={<FaCheckSquare/>} title={"For Release"}/>
        <InfoCard value={('000' + props.toReceive).slice(-4)} icon={<FaCalendarDay/>} title={"To Receive"}/>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // TODO replace with API call
  return {
    props: {
      onProcess: 1,
      forSignature: 2,
      forRelease: 5,
      toReceive: 2,
    },
  };
}

export default Dashboard