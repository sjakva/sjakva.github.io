import * as React from "react";
import { Box, Container } from "@material-ui/core";

import JobCardComponent from "./components/JobCard";

const IndexPage = () => {
  const experience_descriptions = [
    {
      company: "Sav.com, LLC",
      position: "Web Developer",
      start_date: "June 2022",
      end_date: "Present",
      description: "",
      bullets: [],
      keywords: [],
    },
    {
      company: "University of Illinois - College of Pharmacy",
      position: "Computer Specialist I",
      start_date: "July 2021",
      end_date: "June 2022",
      description: "",
      bullets: [
        "Diagnosed and resolved client incidents/requests relating to software/hardware, networks, communications, computer usage policy, and operating systems (Windows, Macintosh, Unix).",
        "Reported incidents/requests on TeamDynamix ticketing platform.",
        "Manage Helpdesk solely during the evening shifts.",
        "Supervise and train undergraduate student staff on ITU processes, technology, and applications.",
        "Created and maintained monthly reports utilizing Lansweeper/SQL queries for outdated software and OS Environments deployed to existing devices",
      ],
      keywords: [],
    },
    {
      company: "Hendrickson Advanced Technology Group",
      position: "Frontend Intern",
      start_date: "July 2020",
      end_date: "October 2020",
      description:
        "Designed a front-end Ionic React dashboard that outputted GraphQL queried data into componentized charts.",
      bullets: [
        "Developed front-end user interface in JavaScript/HTML/CSS using the Ionic React library.",
        "Assisted team leader in testing functionality through GraphQL client (SQL) and decomposing code into new React components.",
        "Tested back-end server connections using Linux terminal and Raspberry Pi device.",
        "Created documentation covering different possible solutions to existing needs/problems and presented them in meetings in order to redesign products according to company standards",
      ],
      keywords: [],
    },
  ];

  return (
    <main>
      <Container>
        <Box>
          {/* Generate cards for each job entry */}
          {experience_descriptions.map((job) => {
            return <JobCardComponent job={job} />;
          })}

          {/* <Button variant="contained">BOOP</Button> */}
        </Box>
      </Container>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Shoaib Jakvani</title>;
