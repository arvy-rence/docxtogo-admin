import React, {useState} from "react";
import {Button, Table} from "flowbite-react";

export const ClassTable = ({students}) => {
  const tableHeaders = ["#", "LRN", "Name", "Gender", "Track and Strand", "Status", "Action"];

  return (
    <Table striped={true} className="font-work">
      <Table.Head className="bg-primary text-white">
        {tableHeaders.map((header, index) => (
          <Table.HeadCell key={index}>{header}</Table.HeadCell>
        ))}
      </Table.Head>
      <Table.Body className="divide-y">
        {students.map((item, index) => (
          <Table.Row key={index}>
            <Table.Cell className="text-primary font-bold">{index + 1}</Table.Cell>
            <Table.Cell className="text-black">{item.lrn}</Table.Cell>
            <Table.Cell className="text-black">{item.name}</Table.Cell>
            {
              (item.gender === 'M') ? (
                <Table.Cell className="text-black">Male</Table.Cell>
              ) : (
                <Table.Cell className="text-black">Female</Table.Cell>
              )
            }
            <Table.Cell className="text-black">{item.strand}</Table.Cell>
            {
              (item.status === 'F') ? (
                <Table.Cell className="text-green-700">Active</Table.Cell>
              ) : (
                <Table.Cell className="text-red-700">Inactive</Table.Cell>
              )
            }
            <Table.Cell>
              <Button className="h-[2rem] uppercase font-bold">
                Edit Student
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}