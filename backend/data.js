import bcrypt from 'bcrypt';

const data = {
  users: [
    {
      name: 'Dhiraj',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
        name: 'X-mas tree',
        category: 'Toys',
        image: '/images/p1.png',
        price: 120,
        countInStock: 10,
        brand: 'Dunzo',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
      
        name: 'Kalash',
        category: 'Worship-item',
        image: '/images/p2.png',
        price: 100,
        countInStock: 20,
        brand: 'Loacal',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
      
        name: 'Puja thali',
        category: 'Worship-item',
        image: '/images/p3.png',
        price: 220,
        countInStock: 0,
        brand: 'Loacal',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {

        name: 'Santa',
        category: 'Toys',
        image: '/images/p4.png',
        price: 78,
        countInStock: 15,
        brand: 'Dunzo',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
      
        name: 'Diya',
        category: 'Worship-item',
        image: '/images/p5.png',
        price: 65,
        countInStock: 5,
        brand: 'Loacal',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },

      {
      
        name: 'Weeding item',
        category: 'Weeding item',
        image: '/images/p6.png',
        price: 139,
        countInStock: 12,
        brand: 'Weeding.com',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },

      {
      
        name: 'Weeding item',
        category: 'Weeding item',
        image: '/images/p6.png',
        price: 130,
        countInStock: 12,
        brand: 'Weeding.com',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },

      {
      
        name: 'Weeding item',
        category: 'Weeding item',
        image: '/images/p6.png',
        price: 139,
        countInStock: 12,
        brand: 'Weeding.com',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      
      {
      
        name: 'Weeding item',
        category: 'Weeding item',
        image: '/images/p6.png',
        price: 139,
        countInStock: 12,
        brand: 'Weeding.com',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      
      {
      
        name: 'Weeding item',
        category: 'Weeding item',
        image: '/images/p6.png',
        price: 139,
        countInStock: 12,
        brand: 'Weeding.com',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      
      {
      
        name: 'Weeding item',
        category: 'Weeding item',
        image: '/images/p6.png',
        price: 139,
        countInStock: 12,
        brand: 'Weeding.com',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      }
    ],
  };
  export default data;
  