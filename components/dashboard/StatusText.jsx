import React from "react";
import {FaFolder, FaFileSignature, FaCheckSquare, FaCalendarDay, FaDatabase, FaTimesCircle, FaPrint} from "react-icons/fa";

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
      <div className="text-cyan-700">
        <FaPrint className="inline-block mr-2"/>
        {status}
      </div>
    ) : (status === "To Receive") ? (
      <div className="text-indigo-700">
        <FaCalendarDay className="inline-block mr-2"/>
        {status}
      </div>
    ) : (status === "Claimed") ? (
      <div className="text-green-700">
        <FaCheckSquare className="inline-block mr-2"/>
        {status}
      </div>
    ) : (status === "Unclaimed") ? (
      <div className="text-red-700">
        <FaTimesCircle className="inline-block mr-2"/>
        {status}
      </div>
    ) : (
      <div className="text-emerald-700">
        <FaDatabase className="inline-block mr-2"/>
        {status}
      </div>
    )
  )
}