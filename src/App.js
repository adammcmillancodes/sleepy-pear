import logo from './logo.svg';
import './App.css';
import LocationSearch from './Modules/LocationSearch/LocationSearch.js'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <LocationSearch />
      </header>
    </div>
  );
}

export default App;
