import React, { useState } from 'react';

function OrderForm({ selectedLaptop, closeForm }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., sending the data to an API
    alert(`Order placed for: ${selectedLaptop.model} \nName: ${name} \nEmail: ${email} \nComments: ${comments}`);
    // Reset form fields
    setName('');
    setEmail('');
    setComments('');
    closeForm();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-80">
        <h2 className="text-xl font-semibold mb-4">Order Laptop</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block">
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Comments:
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                rows="3"
              />
            </label>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Place Order
          </button>
          <button type="button" onClick={closeForm} className="mt-2 bg-red-600 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
