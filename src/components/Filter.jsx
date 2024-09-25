import React, { useState } from 'react';

function Filter({ setFilters }) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilter = () => {
    setFilters({ minPrice: Number(minPrice), maxPrice: Number(maxPrice) });
  };

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Filter Laptops</h2>
      <div className="mt-4">
        <label className="block">
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mt-4">
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <button
          onClick={handleFilter}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
}

export default Filter;
