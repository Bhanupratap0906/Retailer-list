import { createContext, useContext, useState, useEffect } from 'react';
import { retailers as mockRetailers, categories as mockCategories, locations as mockLocations } from '../utils/mockData';
import { getCurrentLocation } from '../utils/geolocation';

const RetailersContext = createContext();

export const useRetailersContext = () => useContext(RetailersContext);

export const RetailersProvider = ({ children }) => {
  const [retailers, setRetailers] = useState(mockRetailers);
  const [filteredRetailers, setFilteredRetailers] = useState(mockRetailers);
  const [categories] = useState(mockCategories);
  const [locations] = useState(mockLocations);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        setIsLoading(true);
        const location = await getCurrentLocation();
        setUserLocation(location);
        setIsLoading(false);
      } catch (error) {
        console.error('Error getting location:', error);
        setError('Unable to get your location. Some features may be limited.');
        setIsLoading(false);
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    let result = mockRetailers;

    if (searchQuery) {
      result = result.filter(retailer => 
        retailer.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter(retailer => retailer.category === selectedCategory);
    }

    if (selectedLocation !== 'All') {
      result = result.filter(retailer => retailer.location === selectedLocation);
    }

    if (userLocation) {
      result = [...result].sort((a, b) => a.distance - b.distance);
    }

    setFilteredRetailers(result);
  }, [searchQuery, selectedCategory, selectedLocation, userLocation]);

  const value = {
    retailers,
    filteredRetailers,
    categories,
    locations,
    selectedCategory,
    setSelectedCategory,
    selectedLocation,
    setSelectedLocation,
    searchQuery,
    setSearchQuery,
    userLocation,
    isLoading,
    error
  };

  return (
    <RetailersContext.Provider value={value}>
      {children}
    </RetailersContext.Provider>
  );
}; 