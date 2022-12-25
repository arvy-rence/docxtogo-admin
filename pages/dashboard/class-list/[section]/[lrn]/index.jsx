import React from "react";
import {LoggedInNavbar} from "../../../../../components/Navbar";
import {Loader} from "../../../../../components/Loader";

/**
 * Dynamic page to render a student's information
 * @param lrn LRN of the student which will be used to fetch the student's information
 * @returns {JSX.Element}
 * @constructor
 */
export const StudentPage = ({lrn}) => {
  return (
    <>
      <LoggedInNavbar activePage="class-list"/>
      <Loader children={
        <>
          <div className="mx-[5%] my-[2rem]">
            <h1 className="font-work text-3xl font-bold text-primary">
              Student Page {lrn}
            </h1>
          </div>
        </>
      } data={lrn}/>
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
  // TODO get student information via params
  return {
    props: {
      lrn: params.lrn
    }
  }
}

export default StudentPage;