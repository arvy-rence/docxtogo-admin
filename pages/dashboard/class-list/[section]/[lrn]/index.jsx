import React, {useState} from "react";
import {LoggedInNavbar} from "../../../../../components/Navbar";
import {Loader} from "../../../../../components/Loader";
import {Label, TextInput, Button, Checkbox, FileInput, ListGroup} from "flowbite-react";
import {BsFillFileEarmarkTextFill} from "react-icons/bs";
import EditStudentForm from "../../../../../components/studentPage/EditStudentForm";

/**
 * Dynamic page to render a student's information
 * @param lrn LRN of the student which will be used to fetch the student's information
 * @param studentInfo Object containing the student's information
 * @returns {JSX.Element}
 * @constructor
 */
export const StudentPage = ({lrn, studentInfo}) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  function handleFileSelect(e) {
    const files = Array.prototype.slice.call(e.target.files)
    setUploadedFiles(files);
  }

  function handlePrint(e) {
    e.preventDefault();
    // print selected files
    print()
  }

  return (
    <>
      <LoggedInNavbar activePage="class-list"/>
      <Loader children={
        <>
          <div className="mx-[5%] my-[2rem]">
            <h1 className="font-work text-3xl font-bold text-primary">
              Student Page of
            </h1>
            <div className="flex gap-[10rem] font-work">
              <EditStudentForm/>
              <div id="fileUpload" className="w-1/2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="file"
                    className="font-work text-primary text-xl font-bold"
                    value="Select files for printing"
                  />
                </div>
                <FileInput
                  id="file"
                  multiple={true}
                  onChange={handleFileSelect}
                  helperText="Upload related files to print it"
                />
                <div className="mt-8">
                  <h3 className="font-work text-xl font-bold text-primary">
                    Selected files
                  </h3>
                  <ListGroup>
                    {(uploadedFiles.length > 0) ?
                      uploadedFiles.map((file, index) => (
                        <ListGroup.Item key={index} icon={BsFillFileEarmarkTextFill}>
                          <div className="flex justify-between">
                            {file.name}{'  '}
                          </div>
                        </ListGroup.Item>
                      )) : (
                        <ListGroup.Item icon={BsFillFileEarmarkTextFill}>
                          <div className="flex justify-between">
                            No files selected
                          </div>
                        </ListGroup.Item>
                      )
                    }
                  </ListGroup>
                  <Button className="mt-4" onClick={handlePrint} disabled={uploadedFiles.length === 0}>
                    Print selected files
                  </Button>
                </div>
              </div>
            </div>
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
  try {
    return {
      props: {
        lrn: params.lrn,
      }
    }
  } catch (e) {
    console.error(e);
    return {
      notFound: true
    }
  }
}

export default StudentPage;