import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ResumeShowPage() {
  const [resume, setResume] = useState({});
  const params = useParams();

  const handleShowResume = () => {
    axios.get(`http://localhost:3000/resumes/${params.id}.json`).then((response) => {
      setResume(response.data);
    });
  };

  useEffect(handleShowResume, []);

  return (
    <div>
      <h1>Product Info</h1>
      <p>Name: {resume.name}</p>
      <p>Price: {resume.price}</p>
      <p>Description: {resume.description}</p>
    </div>
  );
}
