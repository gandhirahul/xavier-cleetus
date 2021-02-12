import axios from "axios";
import { serverURL } from "./constants";
import { TweetType } from "../components/Tweets/types";

export type GetTweetsRequestParams = {
  count: number;
  afterId?: number;
};

const getTweetsEndPoint = `${serverURL}/api`;

const getTweets = async (
  params: GetTweetsRequestParams
): Promise<TweetType[]> => {
  const response = await axios.get(getTweetsEndPoint, {
    params
  });

  return response.data;
};

export default getTweets;
