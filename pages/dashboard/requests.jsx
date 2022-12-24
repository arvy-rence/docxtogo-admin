import React, {
  useEffect,
  useState,
} from "react";
import {LoggedInNavbar} from "../../components/Navbar";
import {Table} from "flowbite-react";
import RequestTableRow from "../../components/requests/TableRow";

const Requests = () => {
  const tableHeaders = ["Time Log", "Name", "Section/Strand", "Contact Number", "Document", "Purpose", "Date Requested", "Status", "Action"]
  const tableData = [
    {
      "timeLog": "4/4/2022",
      "name": "Boigie",
      "strand": "University of Health and Science",
      "contact": "09072818517",
      "document": "Bytecard",
      "purpose": "Proin risus.",
      "dateRequested": "2/18/2022",
      "status": "Claimed"
    }, {
      "timeLog": "9/25/2022",
      "name": "Clare",
      "strand": "Universitas Negeri Padang",
      "contact": "09619236545",
      "document": "Greenlam",
      "purpose": "Vestibulum quam sapien",
      "dateRequested": "10/12/2022",
      "status": "To Receive"
    }, {
      "timeLog": "12/24/2022",
      "name": "Fowler",
      "strand": "Fachhochschule Köln",
      "contact": "09295614213",
      "document": "Bitwolf",
      "purpose": "Nullam porttitor lacus at turpis.",
      "dateRequested": "3/10/2022",
      "status": "For Release"
    }, {
      "timeLog": "10/19/2022",
      "name": "Richmond",
      "strand": "Universitas Pelita Harapan",
      "contact": "09810497529",
      "document": "Bitchip",
      "purpose": "Integer pede justo, lacinia eget",
      "dateRequested": "2/26/2022",
      "status": "Unclaimed"
    }, {
      "timeLog": "5/25/2022",
      "name": "Alexio",
      "strand": "Pusan Women's University",
      "contact": "09712983238",
      "document": "Ventosanzap",
      "purpose": "Integer ac leo. Pellentesque ultrices mattis odio",
      "dateRequested": "4/29/2022",
      "status": "To Receive"
    }, {
      "timeLog": "5/7/2022",
      "name": "Norene",
      "strand": "Cheljabinsk University of Agricultural Engineering",
      "contact": "09444664777",
      "document": "Daltfresh",
      "purpose": "Integer aliquet, massa id lobortis convallis",
      "dateRequested": "2/24/2022",
      "status": "On Process"
    }, {
      "timeLog": "5/18/2022",
      "name": "Alejandra",
      "strand": "Wenzhou Medical College",
      "contact": "09228803650",
      "document": "Stim",
      "purpose": "Suspendisse accumsan",
      "dateRequested": "12/18/2022",
      "status": "For Release"
    }, {
      "timeLog": "2/2/2022",
      "name": "Zachary",
      "strand": "University Canada West",
      "contact": "09005703287",
      "document": "Keylex",
      "purpose": "Pellentesque at nulla.",
      "dateRequested": "7/20/2022",
      "status": "On Process"
    }, {
      "timeLog": "4/22/2022",
      "name": "Blisse",
      "strand": "Instituto Superior Bissaya Barreto",
      "contact": "09318433337",
      "document": "Rank",
      "purpose": "In hac habitasse platea dictumst.",
      "dateRequested": "11/11/2022",
      "status": "For Signature"
    }, {
      "timeLog": "3/2/2022",
      "name": "Adan",
      "strand": "Universitas 17 Agustus 1945 Jakarta",
      "contact": "09891944564",
      "document": "Alpha",
      "purpose": "Duis consequat",
      "dateRequested": "7/7/2022",
      "status": "For Signature"
    }]

  return (
    <>
      <LoggedInNavbar activePage="requests"/>
      <div className="mx-[2%] pt-[2rem] pb-[3rem]">
        <Table striped={true}
               className="font-work overflow-y-scroll">
          <Table.Head className="bg-primary text-white">
            {tableHeaders.map((header, index) => (
              <Table.HeadCell key={index}>{header}</Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body className="divide-y">
            {tableData.map((data, index) => (
              <RequestTableRow key={index} data={data}/>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}

export default Requests