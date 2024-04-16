import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ResumeShowPage() {
  const [resume, setResume] = useState({});
  const params = useParams();

  const handleShowResume = (props) => {
    // axios.get(`http://localhost:3000/resumes/${params.id}.json`).then((response) => {
    //   setResume(response.data);
    // });
  };

  useEffect(handleShowResume, []);

  return (
    <div id="resumes-show">
      <h1>Resume Info</h1>
      <p>First: {resume.firstName}</p>
      <p>Last: {resume.lastName}</p>
      <p>Short Bio: {resume.shortBio}</p>
    </div>
  );
}
