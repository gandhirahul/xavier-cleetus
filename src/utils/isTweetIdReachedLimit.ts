import { TweetType } from "../components/Tweets/types";

const tweetsLimit = 10000;

const isTweetIdReachedLimit = (tweets: TweetType[]) => {
  if (tweets.length === 0) {
    return false;
  }

  const isReachedLimit = tweets[0].id >= tweetsLimit;

  return isReachedLimit;
};

export default isTweetIdReachedLimit;
