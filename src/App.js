import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  const username = "a_wildlifer";
  const tweetText = "LeBron James is the GOAT.";
  return (
    <div>
      <div>
        <h1>Hello {username}!</h1>
      </div>
      <div>
        <CreateTweet />
      </div>
      <div>
        <TweetList username={username} tweetText={tweetText} />
      </div>
    </div>
  );
}

export default App;
