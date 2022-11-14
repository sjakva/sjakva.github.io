import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExperienceComponent from "./Experience";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function HomePage() {
  // tabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#1B473E",
        display: "flex",
        height: "fit-content",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{ bgcolor: "#446F67", width: 150 }}
      >
        <Tab label="About Me" {...a11yProps(0)} />
        <Tab label="Education" {...a11yProps(1)} />
        <Tab label="Experience" {...a11yProps(2)} />
        <Tab label="Projects" {...a11yProps(3)} />
        <Tab label="Contact" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
        {/* <AboutMe /> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
        {/* <EducationComponent /> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ExperienceComponent />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
        {/* <ProjectsComponent /> */}
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
        {/* <ContactMe /> */}
      </TabPanel>
    </Box>
  );
}
