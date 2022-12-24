import React, {
  useEffect,
  useState,
} from "react";
import {LoggedInNavbar} from "../../components/Navbar";
import InfoCard from "../../components/dashboard/InfoCard";
import {FaFolder, FaFileSignature, FaCheckSquare, FaCalendarDay} from "react-icons/fa";
import {Table} from "flowbite-react";
import {TableRow} from "../../components/dashboard/TableRow";

const Dashboard = (props) => {
  const tableHeaders = ["Agent Name", "Transaction Type", "Status", "Date"];

  return (
    <>
      <LoggedInNavbar activePage="dashboard"/>
      <div className="flex justify-center items-center">
        <InfoCard value={('000' + props.onProcess).slice(-4)}
                  color="blue"
                  icon={<FaFolder/>}
                  title={"On Process"}/>
        <InfoCard value={('000' + props.forSignature).slice(-4)}
                  color="amber"
                  icon={<FaFileSignature/>}
                  title={"For Signature"}/>
        <InfoCard value={('000' + props.forRelease).slice(-4)}
                  color="green"
                  icon={<FaCheckSquare/>}
                  title={"For Release"}/>
        <InfoCard value={('000' + props.toReceive).slice(-4)}
                  color="indigo"
                  icon={<FaCalendarDay/>}
                  title={"To Receive"}/>
      </div>
      <div className="mx-[15%] pt-[1rem] pb-[3rem]">
        <Table className="font-work">
          <Table.Head className="bg-primary text-white">
            {tableHeaders.map((header, index) => (
              <Table.HeadCell key={index}>{header}</Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body className="divide-y">
            <TableRow agentName="John Doe" actionType="New Request Transaction" status="On Process" date="2021-01-01"/>
            <TableRow agentName="John Doe" actionType="Request Transaction Update" status="For Signature" date="2021-01-01"/>
            <TableRow agentName="John Doe" actionType="Request Transaction Update" status="To Receive" date="2021-01-01"/>
            <TableRow agentName="John Doe" actionType="Request Transaction Update" status="For Release" date="2021-01-01"/>
            <TableRow agentName="John Doe" actionType="Admin Transaction" status="Admin" date="2021-01-01"/>
            <TableRow agentName="John Doe" actionType="New Request Transaction" status="On Process" date="2021-01-01"/>
            <TableRow agentName="John Doe" actionType="Request Transaction Update" status="For Signature" date="2021-01-01"/>
            <TableRow agentName="John Doe" actionType="Request Transaction Update" status="For Release" date="2021-01-01"/>
            <TableRow agentName="John Doe" actionType="Admin Transaction" status="Admin" date="2021-01-01"/>
            <TableRow agentName="John Doe" actionType="Admin Transaction" status="Admin" date="2021-01-01"/>
            <TableRow agentName="John Doe" actionType="New Request Transaction" status="On Process" date="2021-01-01"/>
            <TableRow agentName="John Doe" actionType="Request Transaction Update" status="For Signature" date="2021-01-01"/>
            <TableRow agentName="John Doe" actionType="Admin Transaction" status="Admin" date="2021-01-01"/>
            <TableRow agentName="John Doe" actionType="Request Transaction Update" status="For Release" date="2021-01-01"/>
            <TableRow agentName="John Doe" actionType="Admin Transaction" status="Admin" date="2021-01-01"/>

          </Table.Body>
        </Table>
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