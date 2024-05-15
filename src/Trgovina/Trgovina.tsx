import React from 'react';

const Trgovina = () => {
  return (
    <div>
      <header>
        <h1>My Shop</h1>
        {/* Add navigation links or other header content */}
      </header>
      <div className="container">
        <aside className="sidebar">
          <h2>Categories</h2>
          {/* Add category links */}
          <ul>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
            {/* Add more categories */}
          </ul>
        </aside>
        <main className="content">
          <h2>Products</h2>
          {/* Add product listings */}
          <div className="product">
            <img src="product-image.jpg" alt="Product" />
            <h3>Product Name</h3>
            <p>Product Description</p>
            <p>$99.99</p>
            {/* Add "Add to Cart" button or other actions */}
          </div>
          {/* Add more products */}
        </main>
      </div>
      <footer>
        <p>&copy; 2024 My Shop. All rights reserved.</p>
        {/* Add footer content */}
      </footer>
    </div>
  );
};

export default Trgovina;
