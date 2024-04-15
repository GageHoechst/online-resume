/* eslint-disable react/prop-types */
export function ResumeShow(props) {
  return (
    <div>
      <h2>Student</h2>
      <p>First Name: {props.resume.firstName}</p>
      <p>Last Name: {props.resume.lastName}</p>
      <p>About Me: {props.resume.shortBio}</p>
    </div>
  );
}
