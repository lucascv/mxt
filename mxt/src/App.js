import './App.css';
import SearchBar from './Components/SearchBar';
import RadioButtons from './Components/RadioButtons';
import SearchList from './Components/SearchList';

function App() {
  return (
    <div>
      <h1 className="title">MxtMovies</h1>
      <div className="container">
        <RadioButtons></RadioButtons>
        <SearchBar></SearchBar>
      </div>
      <div className="inside-container">
        <SearchList></SearchList>
      </div>
    </div>
  );
}

export default App;
