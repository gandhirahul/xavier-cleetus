import React, { memo } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { TweetProps } from "./types";

const Tweet = ({ text, image, username }: TweetProps) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt={text} src={image} />
      </ListItemAvatar>
      <ListItemText primary={username} secondary={text} />
    </ListItem>
  );
};

export default memo(Tweet);
