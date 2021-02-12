import { useMemo, useState, useEffect, useCallback } from "react";
import { useQuery } from "react-query";
import uniqBy from "lodash/uniqBy";
import orderBy from "lodash/orderBy";
import { TweetType } from "../components/Tweets/types";
import getTweets, { GetTweetsRequestParams } from "../services/getTweets";
import resetTweets from "../services/resetTweets";
import isTweetIdReachedLimit from "../utils/isTweetIdReachedLimit";

type UseTweetsReturn = {
  isLoading: boolean;
  tweets: TweetType[];
};

const initialFetchCount = 10;
const fetchCount = 1;
const reactQueryConfig = {
  retry: false,
  refetchInterval: 2000
};

const useTweets = (): UseTweetsReturn => {
  const [tweets, setTweets] = useState<TweetType[]>([]);

  const queryParams = useMemo(() => {
    const params: GetTweetsRequestParams = { count: initialFetchCount };
    if (tweets && tweets.length > 0 && !isTweetIdReachedLimit(tweets)) {
      params.count = fetchCount;
      params.afterId = tweets[0].id;
    }

    return params;
  }, [tweets]);

  const callResetTweetsAPIAndEmptyTweets = useCallback(async () => {
    await resetTweets();
    setTweets([]);
  }, []);

  useEffect(() => {
    if (isTweetIdReachedLimit(tweets)) {
      callResetTweetsAPIAndEmptyTweets();
    }

    return () => {
      if (isTweetIdReachedLimit(tweets)) {
        callResetTweetsAPIAndEmptyTweets();
      }
    };
  }, [callResetTweetsAPIAndEmptyTweets, tweets]);

  const { isLoading } = useQuery(["tweets"], () => getTweets(queryParams), {
    ...reactQueryConfig,
    onSuccess: (newTweets) => {
      const mergedTweets = [...newTweets, ...tweets];
      const uniqueTweets = uniqBy(mergedTweets, "id");
      const orderedTweets = orderBy(uniqueTweets, "id", "desc");

      setTweets(orderedTweets);
    }
  });

  return {
    isLoading,
    tweets
  };
};

export default useTweets;
