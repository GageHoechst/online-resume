/* eslint-disable react/prop-types */
export function ResumeIndex(props) {
  return (
    <div>
      <h2>Students</h2>
      {props.resumes.map((resume) => (
        <div key={resume.id}>
          <p>First Name: {resume.firstName}</p>
          <p>Last Name: {resume.lastName}</p>
          <p>About Me: {resume.shortBio}</p>
        </div>
      ))}
    </div>
  );
}
