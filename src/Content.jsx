import { ResumeIndex } from "./ResumeIndex";
import { Routes, Route } from "react-router-dom";
import { ResumeShow } from "./ResumeShow";
import { useState } from "react";
import { ResumeShowPage } from "./ResumeShowPage";

const resumes = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    shortBio: "Passionate software developer with a love for coding.",
    linkedInURL: "https://www.linkedin.com/in/johndoe/",
    twitterHandle: "@johndoe",
    personalBlogURL: "https://johndoe.com",
    onlineResumeURL: "https://johndoe.com/resume",
    githubURL: "https://github.com/johndoe",
    photo: "https://johndoe.com/photo.jpg",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phoneNumber: "987-654-3210",
    shortBio: "Experienced web designer with a creative mind.",
    linkedInURL: "https://www.linkedin.com/in/janesmith/",
    twitterHandle: "@janesmith",
    personalBlogURL: "https://janesmith.com",
    onlineResumeURL: "https://janesmith.com/resume",
    githubURL: "https://github.com/janesmith",
    photo: "https://janesmith.com/photo.jpg",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Williams",
    email: "bob.williams@example.com",
    phoneNumber: "555-987-6543",
    shortBio: "Dedicated software engineer with a passion for open-source projects.",
    linkedInURL: "https://www.linkedin.com/in/bobwilliams/",
    twitterHandle: "@bobw_dev",
    personalBlogURL: "https://bobwilliams.dev",
    onlineResumeURL: "https://bobwilliams.dev/resume",
    githubURL: "https://github.com/bobwilliams",
    photo: "https://bobwilliams.dev/photo.jpg",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    phoneNumber: "555-123-4567",
    shortBio: "Passionate educator and advocate for STEM education.",
    linkedInURL: "https://www.linkedin.com/in/alicejohnson/",
    twitterHandle: "@alice_j",
    personalBlogURL: "https://alicejohnson.com",
    onlineResumeURL: "https://alicejohnson.com/resume",
    githubURL: "https://github.com/alicejohnson",
    photo: "https://alicejohnson.com/photo.jpg",
  },
  {
    id: 5,
    firstName: "Emily",
    lastName: "Garcia",
    email: "emily.garcia@example.com",
    phoneNumber: "555-555-5555",
    shortBio: "Graphic designer with a knack for creativity and attention to detail.",
    linkedInURL: "https://www.linkedin.com/in/emilygarcia/",
    twitterHandle: "@emilygfx",
    personalBlogURL: "https://emilygarcia.design",
    onlineResumeURL: "https://emilygarcia.design/resume",
    githubURL: "https://github.com/emilygfx",
    photo: "https://emilygarcia.design/photo.jpg",
  },
];

export function Content() {
  const [isResumeShowVisible, setIsResumeShowVisible] = useState(false);
  const [currentResume, setCurrentResume] = useState({});

  const handleShowResume = (resume) => {
    console.log("handleShowResume", resume);
    setIsResumeShowVisible(true);
    setCurrentResume(resume);
  };
  return (
    <main>
      <Routes>
        <Route path="/" element={<ResumeIndex resumes={resumes} onShowResume={handleShowResume} />} />
        <Route path="resumes/:id" element={<ResumeShowPage />} />
      </Routes>
      {/* <ResumeShow resumes={currentResume} show={isResumeShowVisible} /> */}
    </main>
  );
}
// howdy
