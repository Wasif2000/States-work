import React, { useState } from 'react';
import LaptopCard from './LaptopCard';
import FilterComponent from './FilterComponent';
import FooterComponent from './FooterComponent';
import OrderForm from './OrderForm';



function App() {
  const [filters, setFilters] = useState({ minPrice: 0, maxPrice: Infinity });
  const [selectedLaptop, setSelectedLaptop] = useState(null);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  
  const filteredLaptops = initialLaptops.filter(laptop => 
    laptop.price >= filters.minPrice && laptop.price <= filters.maxPrice
  );

  const handleOrder = (laptop) => {
    setSelectedLaptop(laptop);
    setIsOrderFormOpen(true);
  };

  const closeForm = () => {
    setIsOrderFormOpen(false);
    setSelectedLaptop(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <header className="bg-blue-600 text-white text-center py-6">
        <h1 className="text-3xl font-bold">Laptops Showcase</h1>
        <p className="mt-2">Explore the best laptops available</p>
      </header>

      <main className="container mx-auto p-6">
        <FilterComponent setFilters={setFilters} />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLaptops.map(laptop => (
            <div key={laptop.id} onClick={() => handleOrder(laptop)}>
              <LaptopCard laptop={laptop} />
            </div>
          ))}
        </section>
      </main>

      <FooterComponent />

      {isOrderFormOpen && (
        <OrderForm selectedLaptop={selectedLaptop} closeForm={closeForm} />
      )}
    </div>
  );
}

export default App;
