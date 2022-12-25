import React, {
  useEffect,
  useState,
} from "react";
import {LoggedInNavbar} from "../../../components/Navbar";
import {Tabs} from "flowbite-react";
import {SectionTable} from "../../../components/class-list/SectionTable";

const ClassList = () => {
  const grade11 = [
    {
      section: "11-A",
      adviser: "Mr. John Doe",
      strand: "STEM",
      roomAssignment: "REX 302"
    },
    {
      section: "11-B",
      adviser: "Mr. John Doe",
      strand: "ABM",
      roomAssignment: "WIN 102"
    },
    {
      section: "11-C",
      adviser: "Mr. John Doe",
      strand: "HUMSS",
      roomAssignment: "REX 202"
    }
  ]

  const grade12 = [
    {
      section: "12-A",
      adviser: "Mr. John Doe",
      strand: "STEM",
      roomAssignment: "WES 202"
    },
    {
      section: "12-B",
      adviser: "Mr. John Doe",
      strand: "ABM",
      roomAssignment: "WIN 202"
    },
    {
      section: "12-C",
      adviser: "Mr. John Doe",
      strand: "HUMSS",
      roomAssignment: "REX 202"
    }
  ]

  return (
    <>
      <LoggedInNavbar activePage="class-list"/>
      <Tabs.Group
        aria-label="Tabs with underline"
        style="pills"
        className="font-work m-[1rem]"
      >
        <Tabs.Item
          title="Grade 11"
          active={true}
        >
          <SectionTable sections={grade11}/>
        </Tabs.Item>
        <Tabs.Item title="Grade 12">
          <SectionTable sections={grade12}/>
        </Tabs.Item>
      </Tabs.Group>
    </>
  )
}

export default ClassList