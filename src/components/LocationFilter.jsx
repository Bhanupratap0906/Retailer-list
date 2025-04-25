import { useRetailersContext } from '../context/RetailersContext';
import '../styles/LocationFilter.css';

const LocationFilter = () => {
  const { locations, selectedLocation, setSelectedLocation } = useRetailersContext();

  return (
    <div className="location-filter">
      <label htmlFor="location-select">Filter by location:</label>
      <select 
        id="location-select"
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
      >
        {locations.map(location => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationFilter; 