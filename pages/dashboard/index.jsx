import React from "react";
import {LoggedInNavbar} from "../../components/Navbar";
import InfoCard from "../../components/dashboard/InfoCard";
import {FaFolder, FaFileSignature, FaCalendarDay, FaPrint} from "react-icons/fa";
import {Table} from "flowbite-react";
import {TableRow} from "../../components/dashboard/TableRow";

/**
 * Dashboard page for the admin/employee of the system
 * @param count Object containing the count of each type of document requests
 * @see InfoCard
 * @see TableRow
 * @returns {JSX.Element}
 * @constructor
 */
const Dashboard = ({count}) => {
  const tableHeaders = ["Agent Name", "Transaction Type", "Status", "Date"];

  return (
    <>
      <LoggedInNavbar activePage="dashboard"/>
      <div className="flex justify-center items-center">
        <InfoCard value={('000' + count.onProcess).slice(-4)}
                  color="blue"
                  icon={<FaFolder/>}
                  title={"On Process"}/>
        <InfoCard value={('000' + count.forSignature).slice(-4)}
                  color="amber"
                  icon={<FaFileSignature/>}
                  title={"For Signature"}/>
        <InfoCard value={('000' + count.forRelease).slice(-4)}
                  color="cyan"
                  icon={<FaPrint/>}
                  title={"For Release"}/>
        <InfoCard value={('000' + count.toReceive).slice(-4)}
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
      count: {
        onProcess: 1,
        forSignature: 2,
        forRelease: 5,
        toReceive: 2,
      }
    }
  };
}

export default Dashboard