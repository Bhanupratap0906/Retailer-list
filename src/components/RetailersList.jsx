import { useRetailersContext } from '../context/RetailersContext';
import RetailerCard from './RetailerCard';
import '../styles/RetailersList.css';

const RetailersList = () => {
  const { filteredRetailers, isLoading, error } = useRetailersContext();

  const retailersByLocation = filteredRetailers.reduce((acc, retailer) => {
    if (!acc[retailer.location]) {
      acc[retailer.location] = [];
    }
    acc[retailer.location].push(retailer);
    return acc;
  }, {});

  if (isLoading) {
    return <div className="retailers-loading">Loading retailers...</div>;
  }

  if (error) {
    return <div className="retailers-error">{error}</div>;
  }

  if (filteredRetailers.length === 0) {
    return <div className="retailers-empty">No retailers found for your search criteria.</div>;
  }

  return (
    <div className="retailers-list">
      {Object.entries(retailersByLocation).map(([location, retailers]) => (
        <div key={location} className="location-group">
          <h2 className="location-title">{location}</h2>
          <div className="retailers-group">
            {retailers.map(retailer => (
              <RetailerCard key={retailer.id} retailer={retailer} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RetailersList;