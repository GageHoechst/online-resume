/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export function ResumeIndex(props) {
  return (
    <div>
      <h2>Students</h2>
      <div className="col">
        <div className="row row-cols-1 row-cols-md-3 g-5">
          {props.resumes.map((resume) => (
            <div key={resume.id} className="border-warning mb-3">
              <p>First Name: {resume.firstName}</p>
              <p>Last Name: {resume.lastName}</p>
              <p>About Me: {resume.shortBio}</p>
              <Link to={`/resumes/${resume.id}`}>
                <button onClick={() => props.onShowResume(resume)} className="btn btn-info">
                  More Info
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
