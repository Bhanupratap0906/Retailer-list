import { useState, useEffect } from 'react';
import { RetailersProvider } from './context/RetailersContext';
import AppHeader from './components/AppHeader';
import CategoryFilter from './components/CategoryFilter';
import LocationFilter from './components/LocationFilter';
import RetailersList from './components/RetailersList';
import './App.css';

function App() {
  return (
    <RetailersProvider>
      <div className="app-container">
        <AppHeader />
        <div className="content">
          <div className="filters-section">
            <CategoryFilter />
            <LocationFilter />
          </div>
          <RetailersList />
        </div>
      </div>
    </RetailersProvider>
  );
}

export default App;
