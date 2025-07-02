
import './App.css';
import Header from './Header';
import { Main } from './Main';
import america from './images/america.png';
import china from './images/china.png';
import india from './images/india.png';
import japan from './images/japan.png';
function App() {
  return (
    <>
      <Header/>

      <Main 
        image={america}
        title="America"
        description="A beautiful country with diverse landscapes with modern architecture."
        list={[
          "Known for its cultural diversity",
          "Home to the Statue of Liberty",
          "Famous for its national parks",
          "Has a significant influence on global culture",
          "Offers a wide range of cuisines"
        ]}
        view="https://en.wikipedia.org/wiki/United_States"
      />
      <Main
        image={china}
        title="China"
        description="A country with a rich history and a rapidly growing economy."  
        list={[
          "Home to the Great Wall of China",
          "Famous for its cuisine",
          "Has a significant influence on global trade",
          "Known for its technological advancements",
          "Offers a mix of traditional and modern attractions"
        ]}
        view="https://en.wikipedia.org/wiki/China"
      />
      <Main
        image={india}
        title="India"
        description="A country known for its rich history and diverse culture."
        list={[
          "Home to the Taj Mahal",
          "Famous for its spices",
          "Has a wide variety of languages",
          "Known for its festivals",
          "Offers a rich culinary experience"
        ]}
        view="https://en.wikipedia.org/wiki/India"
      />
      <Main
        image={japan}
        title="Japan"
        description="A country known for its unique blend of tradition and modernity."
        list={[
          "Home to Mount Fuji",
          "Famous for its cherry blossoms",
          "Known for its technological innovations",
          "Offers a rich cultural heritage",
          "Has a unique culinary scene"
        ]}
        view="https://en.wikipedia.org/wiki/Japan"
      />
    </>
  );
}

export default App;
