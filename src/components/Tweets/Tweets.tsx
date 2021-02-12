import React, { memo } from "react";
import List from "@material-ui/core/List";
import Tweet from "./Tweet";
import { TweetsProps } from "./types";

const Tweets = ({ tweets }: TweetsProps) => {
  return (
    <List>
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          text={tweet.text}
          image={tweet.image}
          username={tweet.username}
        />
      ))}
    </List>
  );
};

export default memo(Tweets);
