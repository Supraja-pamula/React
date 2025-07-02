import countryData from './countryData';
import './App.css';
import Header from './Header';
import { Main } from './Main';

function App() {
  let countryDetailElement =countryData.map((country)=>{
    console.log(country)
    return (
    <Main 
      // country={country}
      image={country.image}
      title={country.title}
      description={country.description} 
      list={country.list}
      view={country.view}
   />)
  })
  return (
    <>
      <Header/>
      {countryDetailElement}
    </> 
  );
}

export default App;
