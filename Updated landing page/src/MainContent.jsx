import React from 'react';
import ItemCard from './ItemCard'; // Import the ItemCard component
import './App.css'

// const items = [
//   { id: 1, name: 'Item 1', description: 'Description of Item 1', imageUrl: 'https://example.com/image1.jpg' },
//   { id: 2, name: 'Item 2', description: 'Description of Item 2', imageUrl: 'https://example.com/image2.jpg' },
//   { id: 3, name: 'Item 3', description: 'Description of Item 3', imageUrl: 'https://example.com/image3.jpg' }
// ];
const items = [
  {
    id: 1,
    name: 'Smartphone',
    brand: 'Samsung',
    price: 599.99,
    description: 'A high-quality smartphone with advanced features.',
    image: 'https://m.media-amazon.com/images/I/61L1ItFgFHL.jpg',
  },
  {
    id: 2,
    name: 'Laptop',
    brand: 'Apple',
    price: 1299.99,
    description: 'A powerful laptop for professional use.',
    image: 'https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg',
  },
  {
    id: 3,
    name: 'Headphones',
    brand: 'Sony',
    price: 149.99,
    description: 'High-fidelity headphones for immersive audio experience.',
    image: 'https://m.media-amazon.com/images/I/41tp0JPPlmL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 4,
    name: 'Smart Watch',
    brand: 'Fitbit',
    price: 199.99,
    description: 'Track your fitness and receive notifications on the go.',
    image: 'https://m.media-amazon.com/images/I/712YIFdUHLL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 5,
    name: 'Tablet',
    brand: 'Microsoft',
    price: 499.99,
    description: 'A versatile tablet for work and entertainment.',
    image: 'https://www.reliancedigital.in/medias/Samsung-Galaxy-TabS6-Tablet-493177064-i-7-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzMwMHxpbWFnZS9qcGVnfGltYWdlcy9oMzYvaDk5Lzk4NjQzOTkwMjgyNTQuanBnfDZmMWQyNzQ3MWJlZjdiOGUzZTZhMGYxZWY0ZTU0NGMxNTY2YzcwNjhmZTQzMGE4YWU5YTE5NDY4YjhlZjNmMGU',
  },
  {
    id: 6,
    name: 'Wireless Speaker',
    brand: 'JBL',
    price: 99.99,
    description: 'Enjoy music wirelessly with high-quality sound.',
    image: 'https://m.media-amazon.com/images/I/31cBaG7eSTL._SX300_SY300_QL70_FMwebp_.jpg',
  },
  // Add more products as needed
];

const LandingPage = () => {
  return (
    <div className="container">
      <h1>Main Area</h1>
      <div className="card-container" style={{display:'flex'}}>
        {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;

