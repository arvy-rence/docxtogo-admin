import React from "react";
import {LoggedInNavbar} from "../../../../../components/Navbar";

export const StudentPage = ({lrn}) => {
  return (
    <>
      <LoggedInNavbar activePage="class-list"/>
      <div className="mx-[5%] my-[2rem]">
        <h1 className="font-work text-3xl font-bold text-primary">
          Student Page {lrn}
        </h1>
      </div>
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
  return {
    props: {
      lrn: params.lrn
    }
  }
}

export default StudentPage;