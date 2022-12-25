import React, {
  useEffect,
  useState,
} from "react";
import {LoggedInNavbar} from "../../../components/Navbar";
import {Tabs} from "flowbite-react";
import {SectionTable} from "../../../components/class-list/SectionTable";

const ClassList = ({sectionList}) => {
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
          <SectionTable sections={sectionList.grade11}/>
        </Tabs.Item>
        <Tabs.Item title="Grade 12">
          <SectionTable sections={sectionList.grade12}/>
        </Tabs.Item>
      </Tabs.Group>
    </>
  )
}

export async function getStaticProps() {
  // TODO fetch section list make sure to use the structure {grade11: [{...}], grade12: [{...}]}
  const sections = {
    grade11: [
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
    ],
    grade12: [
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
  }
  return {
    props: {
      sectionList: sections
    },
  };
}

export default ClassList