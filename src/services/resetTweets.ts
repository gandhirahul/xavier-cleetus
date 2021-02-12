import axios from "axios";
import { serverURL } from "./constants";

export type GetTweetsRequestParams = {
  count: number;
  afterId?: number;
};

const resetTweetsEndPoint = `${serverURL}/reset`;

const resetTweets = async (): Promise<undefined> => {
  await axios.get(resetTweetsEndPoint);

  return undefined;
};

export default resetTweets;
