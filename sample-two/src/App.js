
import './App.css';
import { Joke } from './Joke';
function App() {
  return (
    <div className="appSection">
      <Joke 
        setup="Why did the scarecrow win an award?" 
        punchline="Because he was outstanding in his field!" 
        jokesCount={5}
        isFunny={true}
        comments={[
          {
            id:1,
            text:"This is a great joke!"
          },
          {
            id:2,
            text:"I love scarecrow jokes!"
          }
        ]}
      />
      <Joke 
        setup="Why don't skeletons fight each other?" 
        punchline="They don't have the guts!" 
        jokesCount={3}
        isFunny={false}
        comments={[
          {
            id:1,
            text:"Haha, that's a good one!"
          },
          {
            id:2,
            text:"Not funny at all!"
          }
        ]}
      />
      <Joke 
        setup="Why did the math book look sad?" 
        punchline="Because it had too many problems!" 
        jokesCount={4}
        isFunny={true}
        comments={[
          {
            id:1,
            text:"Math jokes are the best!"
          },
          {
            id:2,
            text:"I can relate to that!"
          }
        ]}
      />
      <Joke 
        setup="What do you call fake spaghetti?" 
        punchline="An impasta!" 
        jokesCount={2}
        isFunny={true}
        comments={[
          {
            id:1,
            text:"That's a pasta joke!"
          },
          {
            id:2,
            text:"I can't believe it's not butter!"
          }
        ]}
      />
    </div>
  );
}

export default App;
