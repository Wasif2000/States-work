import React from 'react';

function Laptop() {
    const laptops = [
        { id: 1, model: 'Laptop Model 1', specs: 'Intel i5, 8GB RAM, 512GB SSD', price: 799 },
        { id: 2, model: 'Laptop Model 2', specs: 'AMD Ryzen 5, 16GB RAM, 1TB HDD', price: 899 },
        { id: 3, model: 'Laptop Model 3', specs: 'Intel i7, 16GB RAM, 256GB SSD', price: 1099 },
        { id: 4, model: 'Laptop Model 4', specs: 'Apple M1, 8GB RAM, 512GB SSD', price: 1299 },
        { id: 5, model: 'Laptop Model 5', specs: 'Intel i9, 32GB RAM, 1TB SSD', price: 1999 },
      ];
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold">{laptop.model}</h2>
      <p className="mt-2">{laptop.specs}</p>
      <p className="mt-4 text-lg font-bold">${laptop.price}</p>
    </div>
  );
}

export default Laptop;
