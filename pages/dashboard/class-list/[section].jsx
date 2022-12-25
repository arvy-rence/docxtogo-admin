import React from "react";
import {LoggedInNavbar} from "../../../components/Navbar";
import {ClassTable} from "../../../components/class-list/ClassTable";
import {AddStudentModal} from "../../../components/class-list/AddStudentModal";
import {Loader} from "../../../components/Loader";

export const SectionPage = ({section, students}) => {
  return (
    <>
      <LoggedInNavbar activePage="class-list"/>
      <Loader data={section} children={
        <>
          <div className="mx-[5%] my-[2rem] flex justify-between">
            <h1 className="font-work text-3xl font-bold text-primary">
              Section {section}
            </h1>
            <div>
              <AddStudentModal section={section}/>
            </div>
          </div>
          <div className="mx-[5%] my-[2rem]">
            {(students ?
              <ClassTable students={students}/> :
              <h1 className="font-work text-3xl font-bold text-primary">No students in this section</h1>
            )}
          </div>
        </>
      }/>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps({params}) {
  // TODO get class information from database (use the params)
  const students = [
    {
      lrn: "136814060704",
      name: "Clarence Rhey Salaveria",
      gender: 'M',
      strand: "STEM",
      status: true,
    },
    {
      lrn: "523625448820",
      name: "Saira Caga",
      gender: 'F',
      strand: "ABM",
      status: true,
    },
    {
      lrn: "963524797632",
      name: "Jon Arvy Enriquez",
      gender: 'M',
      strand: "STEM",
      status: true,
    },
    {
      lrn: "236548953264",
      name: "Marialy Detondoy",
      gender: 'F',
      strand: "HUMSS",
      status: false,
    }
  ]
  return {
    props: {
      section: params.section,
      students: students
    }
  }
}

export default SectionPage;