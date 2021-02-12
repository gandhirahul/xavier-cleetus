import React, { memo } from "react";
import Tweets from "./components/Tweets/Tweets";
import Loader from "./components/Loader/Loader";
import useTweets from "./hooks/useTweets";

const App = () => {
  const { isLoading, tweets } = useTweets();
  const isTweetsEmpty = !tweets || (tweets && tweets.length === 0);

  if (isLoading || isTweetsEmpty) {
    return <Loader />;
  }

  return <Tweets tweets={tweets} />;
};

export default memo(App);
