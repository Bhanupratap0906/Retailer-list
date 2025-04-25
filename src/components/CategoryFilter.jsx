import { useRetailersContext } from '../context/RetailersContext';
import '../styles/CategoryFilter.css';

const CategoryFilter = () => {
  const { categories, selectedCategory, setSelectedCategory } = useRetailersContext();

  return (
    <div className="category-filter">
      <h3>Categories</h3>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter; 