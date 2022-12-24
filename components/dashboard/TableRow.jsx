import React from "react";
import {Table} from "flowbite-react";
import {StatusText} from "./StatusText";

export const TableRow = ({id, agentName, actionType, status, date}) => {

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-primary font-bold">
        {agentName}
      </Table.Cell>
      <Table.Cell className="text-black">
        {actionType}
      </Table.Cell>
      <Table.Cell>
        <StatusText status={status}/>
      </Table.Cell>
      <Table.Cell className="text-black">
        {date}
      </Table.Cell>
    </Table.Row>
  )
}