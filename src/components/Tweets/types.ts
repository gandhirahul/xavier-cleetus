export type TweetType = {
  id: number;
  image: string;
  text: string;
  timeStamp: number;
  username: string;
};

export type TweetProps = Pick<TweetType, "image" | "text" | "username">;

export type TweetsProps = {
  tweets: TweetType[];
};
