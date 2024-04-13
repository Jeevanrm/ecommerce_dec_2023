import React, { useState } from 'react';

const Sidebar = ({ applyFilters }) => {
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    priceRange: ''
    // Add more filter options as needed
  });

  const [showSidebar, setShowSidebar] = useState(false);

  const handleCheckboxChange = (filterType, value) => {
    const updatedFilters = { ...filters };
    const index = updatedFilters[filterType].indexOf(value);
    if (index === -1) {
      updatedFilters[filterType].push(value);
    } else {
      updatedFilters[filterType].splice(index, 1);
    }
    setFilters(updatedFilters);
  };

  const handlePriceChange = (event) => {
    setFilters({ ...filters, priceRange: event.target.value });
  };

  const handleApplyFilters = () => {
    applyFilters(filters);
  };

  return (
    <div className={`col-md-3 sidebar ${showSidebar ? 'show' : ''}`}>
      <button className='btn toggle-btn d-md-none' variant="primary" onClick={() => setShowSidebar(!showSidebar)}>
        Toggle Sidebar
      </button>
      <div className="sidebar-content">
        <h2>Filter Products</h2>
        <div>
          <h3>Category</h3>
          <ul>
            <li>
              <input type="checkbox" onChange={() => handleCheckboxChange('category', 'Electronics')} />
              <label>Electronics</label>
            </li>
            <li>
              <input type="checkbox" onChange={() => handleCheckboxChange('category', 'Clothing')} />
              <label>Clothing</label>
            </li>
            {/* Add more category options */}
          </ul>
        </div>
        <div>
          <h3>Brand</h3>
          <ul>
            <li>
              <input type="checkbox" onChange={() => handleCheckboxChange('brand', 'Samsung')} />
              <label>Samsung</label>
            </li>
            <li>
              <input type="checkbox" onChange={() => handleCheckboxChange('brand', 'Apple')} />
              <label>Apple</label>
            </li>
            {/* Add more brand options */}
          </ul>
        </div>
        <div>
          <h3>Price Range</h3>
          <input type="range" min="0" max="1000" onChange={handlePriceChange} />
          {/* Add more price range options */}
        </div>
        <button onClick={handleApplyFilters} className="btn btn-primary">Apply Filters</button>
      </div>
    </div>
  );
};

export default Sidebar;
