import SearchBar from './SearchBar';
import '../styles/AppHeader.css';

const AppHeader = () => {
  return (
    <header className="app-header">
      <h1>Nearby Retailers</h1>
      <SearchBar />
    </header>
  );
};

export default AppHeader; 