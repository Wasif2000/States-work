import React from 'react';
import LaptopCard from './LaptopCard';

const laptops = [
  { id: 1, model: 'Laptop Model 1', specs: 'Intel i5, 8GB RAM, 512GB SSD', price: 799 },
  { id: 2, model: 'Laptop Model 2', specs: 'AMD Ryzen 5, 16GB RAM, 1TB HDD', price: 899 },
  { id: 3, model: 'Laptop Model 3', specs: 'Intel i7, 16GB RAM, 256GB SSD', price: 1099 },
  { id: 4, model: 'Laptop Model 4', specs: 'Apple M1, 8GB RAM, 512GB SSD', price: 1299 },
  { id: 5, model: 'Laptop Model 5', specs: 'Intel i9, 32GB RAM, 1TB SSD', price: 1999 },
];

function LaptopsCard() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <header className="bg-blue-600 text-white text-center py-6">
        <h1 className="text-3xl font-bold">Laptops Showcase</h1>
        <p className="mt-2">Explore the best laptops available</p>
      </header>

      <main className="container mx-auto p-6">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {laptops.map(laptop => (
            <LaptopCard key={laptop.id} laptop={laptop} />
          ))}
        </section>
      </main>

      <footer className="bg-blue-600 text-white text-center py-4">
        <p>&copy; 2024 Laptop Showcase. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default LaptopsCard;
