import { Joke } from './Joke';
import './App.css';
import jokesData from './jokesData';
function App() {
  let jokesElement=jokesData.map((joke)=>{
    return <Joke 
      setup={joke.setup}
      punchline={joke.punchline}
      jokesCount={joke.jokesCount}
      isFunny={joke.isFunny}
      comments={joke.comments}
    />
  })
  return (
    <>
      {jokesElement}
    </>
  );
}

export default App;
