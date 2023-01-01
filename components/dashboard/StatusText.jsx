import React from "react";
import {FaFolder, FaFileSignature, FaCheckSquare, FaCalendarDay, FaDatabase, FaTimesCircle, FaPrint} from "react-icons/fa";

export const StatusText = ({status}) => {
  return (
    (status === 1) ? (
      <div className="text-blue-700">
        <FaFolder className="inline-block mr-2"/>
        On Process
      </div>
    ) : (status === 2) ? (
      <div className="text-amber-700">
        <FaFileSignature className="inline-block mr-2"/>
        For Signature
      </div>
    ) : (status === 3) ? (
      <div className="text-cyan-700">
        <FaPrint className="inline-block mr-2"/>
        For Release
      </div>
    ) : (status === 4) ? (
      <div className="text-indigo-700">
        <FaCalendarDay className="inline-block mr-2"/>
        To Receive
      </div>
    ) : (status === 5) ? (
      <div className="text-green-700">
        <FaCheckSquare className="inline-block mr-2"/>
        Claimed
      </div>
    ) : (status === 6) ? (
      <div className="text-red-700">
        <FaTimesCircle className="inline-block mr-2"/>
        Unclaimed
      </div>
    ) : (
      <div className="text-emerald-700">
        <FaDatabase className="inline-block mr-2"/>
        Admin
      </div>
    )
  )
}