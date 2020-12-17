import Tweet from "./Tweet";

const TweetList = (props) => {
  return (
    <div className="tweetList">
      <Tweet username={props.username} tweetText={props.tweetText} />
      <Tweet username={props.username} tweetText={props.tweetText} />
      <Tweet username={props.username} tweetText={props.tweetText} />
    </div>
  );
};

export default TweetList;
