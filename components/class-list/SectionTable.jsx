import React from "react";
import {Table} from "flowbite-react";

export const SectionTable = ({sections}) => {
  const tableHeaders = ["Section", "Adviser", "Strand", "Room Assignment", "Action"];
  return (
    <Table>
      <Table.Head>
        {tableHeaders.map((header, index) => (
          <Table.HeadCell key={index}>{header}</Table.HeadCell>
        ))}
      </Table.Head>
      <Table.Body>
        {sections.map((item, index) => (
          <Table.Row key={index}>
            <Table.Cell>{item.section}</Table.Cell>
            <Table.Cell>{item.adviser}</Table.Cell>
            <Table.Cell>{item.strand}</Table.Cell>
            <Table.Cell>{item.roomAssignment}</Table.Cell>
            <Table.Cell>Open Record</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}