import React from "react";
import {Button, Table} from "flowbite-react";

export const SectionTable = ({sections}) => {
  const tableHeaders = ["Section", "Adviser", "Strand", "Room Assignment", "Action"];
  return (
    <Table striped={true}>
      <Table.Head className="bg-primary text-white">
        {tableHeaders.map((header, index) => (
          <Table.HeadCell key={index}>{header}</Table.HeadCell>
        ))}
      </Table.Head>
      <Table.Body className="divide-y">
        {sections.map((item, index) => (
          <Table.Row key={index}>
            <Table.Cell className="text-primary font-bold">{item.section}</Table.Cell>
            <Table.Cell className="text-black">{item.adviser}</Table.Cell>
            <Table.Cell className="text-black">{item.strand}</Table.Cell>
            <Table.Cell className="text-black">{item.roomAssignment}</Table.Cell>
            <Table.Cell>
              <Button className="h-[2rem] uppercase font-bold" href={`/dashboard/class-list/${item.section}`}>
                Open Record
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}