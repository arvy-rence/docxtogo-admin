import React, {useState} from "react";
import {LoggedInNavbar} from "../../../../components/Navbar";
import {ClassTable} from "../../../../components/class-list/ClassTable";
import {AddStudentModal} from "../../../../components/class-list/AddStudentModal";
import {Loader} from "../../../../components/Loader";
import {TextInput} from "flowbite-react";
import {FaSearch} from "react-icons/fa";

/**
 * Dynamic page to render students in a section
 * @param section Section of the class list to be consumed by AddStudentModal
 * @param students Array of students in the class to be consumed by `ClassTable`
 * @see ClassTable
 * @see AddStudentModal
 * @returns {JSX.Element}
 * @constructor
 */
export const SectionPage = ({section, students}) => {
  const [search, setSearch] = useState("");
  const [filteredStudents, setFilteredStudents] = useState(students);

  return (
    <>
      <LoggedInNavbar activePage="class-list"/>
      <Loader data={section} children={
        <>
          <div className="mx-[5%] my-[2rem] flex justify-between">
            <h1 className="font-work text-3xl font-bold text-primary">
              Section {section}
            </h1>
            <div className="flex gap-4">
              <TextInput
                id="search"
                type="text"
                icon={FaSearch}
                placeholder="Search for anything"
                onChange={(e) => setSearch(e.target.value)}
                required={true}
                className="font-work w-[20rem] h-[2.5rem] text-sm"
              />
              <AddStudentModal section={section}/>
            </div>
          </div>
          <div className="mx-[5%] my-[2rem]">
            {(students ?
                <ClassTable students={filteredStudents}/> :
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