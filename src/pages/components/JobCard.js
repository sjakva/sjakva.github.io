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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
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
  console.log(props.job);
  const job = props.job;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={job.company}
        subheader={job.position}
      />
      {/* <CardMedia
          component="img"
          height="194"
          image="../images/icon.png"
          alt="Paella dish"
        /> */}
      <CardContent>
        <List>
          {/* <ListSubheader /> */}
          <ListItemText primary />
          <ListItem></ListItem>
        </List>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      {job.bullets ? (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
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
  );
}
