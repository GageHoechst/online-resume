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
      <div className="card" style={{ width: "30rem" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item-1">
            {props.resume.firstName} {props.resume.lastName}
          </li>
          <li className="list-group-item">{props.resume.photo}</li>
          <li className="list-group-item">{props.resume.shortBio}</li>
          <li className="list-group-item">{props.resume.email}</li>
          <li className="list-group-item">{props.resume.phoneNumber}</li>
          <li className="list-group-item">{props.resume.linkedInURL}</li>
          <li className="list-group-item">{props.resume.twitterHandle}</li>
          <li className="list-group-item">{props.resume.personalBlogURL}</li>
          <li className="list-group-item">{props.resume.onlineResumeURL}</li>
          <li className="list-group-item">{props.resume.githubURL}</li>
          {/* <p>First: {props.resume.firstName}</p>
          
          <p>LinkedIn: {props.resume.linkedInURL}</p>
          <p>Twitter: {props.resume.twitterHandle}</p>
          <p>Personal Blog: {props.resume.personalBlogURL}</p>
          <p>Online: {props.resume.onlineResumeURL}</p>
        <p>Github: {props.resume.githubURL}</p> */}
          {/* <p>Github: {props.resume.photo}</p> */}
        </ul>
      </div>
    </div>
  );
}
