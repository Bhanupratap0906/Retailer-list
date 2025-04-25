import { useState, useEffect } from 'react';
import { useRetailersContext } from '../context/RetailersContext';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const { setSearchQuery } = useRetailersContext();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [inputValue, setSearchQuery]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search retailers..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <span className="search-icon">🔍</span>
    </div>
  );
};

export default SearchBar; 