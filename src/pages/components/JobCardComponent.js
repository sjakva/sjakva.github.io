import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
} from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function JobCardComponent(props) {
  const [expanded, setExpanded] = React.useState(false);
  const job = props.job;

  console.log(window);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card sx={{ maxWidth: 400 }} raised>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          style={{ backgroundColor: "#6F562B" }}
          title={job.company}
          subheader={job.position}
        />
        <CardMedia component="img" height="75" image={job.logo} />
        <CardActions disableSpacing style={{ backgroundColor: "#6F562B" }}>
          {job.bullets != null ? (
            <ExpandMore
              style={{ backgroundColor: "#AE956A" }}
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          ) : (
            <></>
          )}
        </CardActions>
        {job.bullets ? (
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent style={{ backgroundColor: "#D6C09C" }}>
              {job.bullets.map((bullet) => {
                return (
                  <ListItem key={`item-${bullet}`}>
                    <ListItemText primary={`${bullet}`} />
                  </ListItem>
                );
              })}
            </CardContent>
          </Collapse>
        ) : (
          <></>
        )}
      </Card>
      <br />
    </>
  );
}
