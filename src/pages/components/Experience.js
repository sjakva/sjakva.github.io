import * as React from "react";
import { Box } from "@material-ui/core";
import JobCardComponent from "./JobCardComponent";

export default function ExperienceComponent() {
  const experience_descriptions = [
    {
      company: "Sav.com, LLC",
      position: "Web Developer",
      start_date: "June 2022",
      end_date: "Present",
      description: "",
      bullets: null,
      keywords: [],
      logo: "https://d2x3xhvgiqkx42.cloudfront.net/2788338f-8b2a-4cdd-adca-2e413db48da1/72d10ce8-08a3-44a9-adbc-31b7f1ece8bf/2022/06/09/9eede671-495c-4f6c-bf98-5946ec88fc24/1d268760-20ef-4af8-a787-6d6f03708d48.png",
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
      logo: "https://wjm.s3.amazonaws.com/mgma/uploads/23057_1650465322.png",
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
      logo: "https://www.hendrickson-intl.com/getmedia/18cd3d85-9290-49a4-a410-2402af8ab943/TheWorldRidesOnUs.jpg",
    },
  ];

  return (
    <Box height={"fit-content"}>
      {/* Generate cards for each job entry */}
      {experience_descriptions.map((job) => {
        return <JobCardComponent job={job} />;
      })}

      {/* <Button variant="contained">BOOP</Button> */}
    </Box>
  );
}
