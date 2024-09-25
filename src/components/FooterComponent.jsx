import React from 'react';

function FooterComponent() {
  return (
    <footer className="bg-blue-600 text-white text-center py-6">
      <p>&copy; 2024 Laptop Showcase. All Rights Reserved.</p>
      <div className="mt-4">
        <a href="#" className="text-white mx-2">Facebook</a>
        <a href="#" className="text-white mx-2">Twitter</a>
        <a href="#" className="text-white mx-2">Instagram</a>
      </div>
      <p className="mt-2">Contact us: support@laptopshowcase.com</p>
    </footer>
  );
}

export default FooterComponent;
