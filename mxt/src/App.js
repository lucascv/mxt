import './App.css';
import SearchBar from './Components/SearchBar';
import RadioButtons from './Components/RadioButtons';
import SearchList from './Components/SearchList';

function App() {
  return (
    <div>
      <h1>MxtMovies</h1>
      <RadioButtons></RadioButtons>
      <SearchBar></SearchBar>
      <SearchList></SearchList>
    </div>
  );
}

export default App;
