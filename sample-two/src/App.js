
import './App.css';
import  Main  from './Main';
import cat1 from './images/cat1.png';
import cat2 from './images/cat2.png';
import cat3 from './images/cat3.png';
import cat4 from './images/cat4.png';
function App() {
  return (
    <div className='card-sec'>
      <Main img={cat1} name="Meow" phn="(220)-5678" mail="iamTheCat@meow.com"/>
      <Main img={cat2} name="Mr.WhiskirSon" phn="(849)-99077058" mail="iamTheCat1@meow.com"/>
      <Main img={cat3} name="Mr.John" phn="(756)-9328130" mail="iamTheCat3@meow.com"/>
      <Main img={cat4} name="Miss.Rockson" phn="(888)-99077058" mail="iamTheCat4@meow.com"/>
    </div>
  );
}

export default App;
