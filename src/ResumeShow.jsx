/* eslint-disable react/prop-types */
export function ResumeShow(props) {
  console.log(props);
  return (
    <div id="resumes-show">
      <h2>Student</h2>
      <p>First Name: {props.resumes.firstName}</p>
      <p>Last Name: {props.resumes.lastName}</p>
      <p>About Me: {props.resumes.shortBio}</p>
    </div>
  );
}


