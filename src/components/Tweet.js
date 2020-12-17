const Tweet = (props) => {
  return (
    <div className="tweet">
      <h2>{props.username}</h2>
      <p>{props.tweetText}</p>
      <button>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
