import React from "react";
import axios from "../../../server/index"
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
        className="font-work m-5"
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

  const {data} = await axios.get("/section");

  console.log(data.sections)
  return {
    props: {
      sectionList: data.sections
    },
  };
}

export default ClassList