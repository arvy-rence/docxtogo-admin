import React from "react";
import {FaFolder, FaFileSignature, FaCheckSquare, FaCalendarDay, FaDatabase} from "react-icons/fa";

export const StatusText = ({status}) => {
  return (
    (status === "On Process") ? (
      <div className="text-blue-700">
        <FaFolder className="inline-block mr-2"/>
        {status}
      </div>
    ) : (status === "For Signature") ? (
      <div className="text-amber-700">
        <FaFileSignature className="inline-block mr-2"/>
        {status}
      </div>
    ) : (status === "For Release") ? (
      <div className="text-green-700">
        <FaCheckSquare className="inline-block mr-2"/>
        {status}
      </div>
    ) : (status === "To Receive") ? (
      <div className="text-indigo-700">
        <FaCalendarDay className="inline-block mr-2"/>
        {status}
      </div>
    ) : (
      <div className="text-cyan-700">
        <FaDatabase className="inline-block mr-2"/>
        {status}
      </div>
    )
  )
}