import React from "react";
import {Navbar, Button} from "flowbite-react";
import Link from "next/link";

export const LoggedInNavbar = ({activePage}) => {
  return (
    <Navbar
      fluid={true}
      className="bg-primary px-6"
    >
      <Navbar.Brand href="/dashboard">
        <span className="text-2xl font-semibold text-white font-work">
          DocsToGo
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link href="/">
          <Button className="text-white font-work font-bold">
            LOG OUT
          </Button>
        </Link>
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
        <Link href="/dashboard"
              className={`font-work ${activePage === 'dashboard' ? 'text-white' : 'text-[#538ed8]'} text-lg`}>
          Dashboard
        </Link>
        <Link href="/dashboard/class-list"
              className={`font-work ${activePage === 'class-list' ? 'text-white' : 'text-[#538ed8]'} text-lg`}>
          List of Classes
        </Link>
        <Link href="/dashboard/requests"
              className={`font-work ${activePage === 'requests' ? 'text-white' : 'text-[#538ed8]'} text-lg`}>
          Requests
        </Link>
        <Link href="/dashboard/logs"
              className={`font-work ${activePage === 'logs' ? 'text-white' : 'text-[#538ed8]'} text-lg`}>
          Logs
        </Link>
        <Link href="/dashboard/reports"
              className={`font-work ${activePage === 'reports' ? 'text-white' : 'text-[#538ed8]'} text-lg`}>
          Reports
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}