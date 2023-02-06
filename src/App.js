import './App.css';
import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="section">
        <CountriesList countries={countries} />
        <Route path="/:id" element={<CountryDetails countries={countries} />} />
      </div>
    </div>
  );
}

export default App;
