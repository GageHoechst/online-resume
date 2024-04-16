/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ResumeShowPage(props) {
  console.log(props);
  const [resume, setResume] = useState({});
  const params = useParams();

  const handleShowResume = () => {
    // axios.get(`http://localhost:3000/resumes/${params.id}.json`).then((response) => {
    //   setResume(response.data);
    // });
  };

  useEffect(handleShowResume, []);

  return (
    <div id="resumes-show">
      <h1>Resume Info</h1>
      <p>First: {props.resume.firstName}</p>
      <p>Last: {props.resume.lastName}</p>
      <p>Email: {props.resume.email}</p>
      <p>Phone Number: {props.resume.phoneNumber}</p>
      <p>Short Bio: {props.resume.shortBio}</p>
      <p>LinkedIn: {props.resume.linkedInURL}</p>
      <p>Twitter: {props.resume.twitterHandle}</p>
      <p>Personal Blog: {props.resume.personalBlogURL}</p>
      <p>Online: {props.resume.onlineResumeURL}</p>
      <p>Github: {props.resume.githubURL}</p>
    </div>
  );
}
