import './App.css';
import SearchBar from './Components/SearchBar';
import RadioButtons from './Components/RadioButtons';
import SearchList from './Components/SearchList';

function App() {
  return (
    <div>
      <h1 className="title">MxtMovies</h1>
      <div className="container">
        <RadioButtons className="inside-container"></RadioButtons>
        <SearchBar className="inside-container"></SearchBar>
        <SearchList className="inside-container"></SearchList>
      </div>
    </div>
  );
}

export default App;
