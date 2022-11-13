import * as React from "react"
// import my fancy third-party component
import Button from "@material-ui/core/Button"
import { Box, Container, List, ListItem, ListItemText, ListSubheader } from "@material-ui/core"

// import React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

function Home() {
  return (
    <div>
      <p>This is my super awesome page made with Gatsby!</p>

      {/* use my fancy third-party component */}
      <Button variant="contained">Fancy button!</Button>
    </div>
  )
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        <span style={headingAccentStyles}>Resume</span>
      </h1>

    <Container>
      <Box>
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
          >
          {[0, 1, 2, 3, 4].map((sectionId) => (
            <li key={`section-${sectionId}`}>
              <ul>
                <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                {[0, 1, 2].map((item) => (
                  <ListItem key={`item-${sectionId}-${item}`}>
                    <ListItemText primary={`Item ${item}`} />
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
        </List>
        {Home()}
      </Box>
    </Container>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Shoaib Jakvani</title>
