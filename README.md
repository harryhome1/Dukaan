# Dukaan

Dukaan is an e-commerce platform that enables businesses to create their own online stores and sell products directly to customers. The platform offers a comprehensive suite of tools for inventory management, order processing, and customer engagement.

## Features

- **Store Creation**: Easily set up your online store with customizable templates
- **Product Management**: Add, edit, and organize products with descriptions, images, and pricing
- **Inventory Tracking**: Monitor stock levels and receive alerts for low inventory
- **Order Processing**: Manage orders from receipt to fulfillment and shipping
- **Payment Integration**: Accept payments through multiple gateways including credit/debit cards, digital wallets, and more
- **Customer Management**: Build and maintain customer profiles and purchase history
- **Analytics Dashboard**: Get insights into sales, revenue, and customer behavior
- **Mobile Responsive**: Optimized shopping experience across all devices
- **SEO Tools**: Improve your store's visibility on search engines
- **Marketing Capabilities**: Run promotions, discounts, and email campaigns

## Tech Stack

- **Frontend**:
  - React.js
  - Redux for state management
  - Styled Components / SCSS
  - Material UI components
  
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB for database
  - Mongoose ODM
  
- **Authentication**:
  - JWT (JSON Web Tokens)
  - OAuth integrations
  
- **Deployment & Infrastructure**:
  - Docker containerization
  - CI/CD pipelines
  - Cloud hosting compatibility

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/harryhome1/Dukaan.git
   cd Dukaan
   ```

2. Install dependencies for both frontend and backend:
   ```
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the server directory with the following variables:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/dukaan
     JWT_SECRET=your_jwt_secret_key
     NODE_ENV=development
     STRIPE_API_KEY=your_stripe_api_key
     ```

4. Start the development servers:
   ```
   # Start backend server (from server directory)
   npm run dev

   # Start frontend server (from client directory)
   npm start
   ```

5. Access the application:
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

## Project Structure

```
Dukaan/
├── client/                # Frontend React application
│   ├── public/            # Static files
│   ├── src/               # Source files
│   │   ├── assets/        # Images, fonts, etc.
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── redux/         # Redux state management
│   │   ├── services/      # API service integration
│   │   ├── styles/        # Global styles
│   │   ├── utils/         # Utility functions
│   │   ├── App.js         # Main application component
│   │   └── index.js       # Entry point
│   ├── package.json       # Dependencies and scripts
│   └── README.md          # Frontend documentation
│
├── server/                # Backend Node.js/Express application
│   ├── config/            # Configuration files
│   ├── controllers/       # Request handlers
│   ├── middleware/        # Custom middleware
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   ├── utils/             # Utility functions
│   ├── app.js             # Express app setup
│   ├── server.js          # Server entry point
│   ├── package.json       # Dependencies and scripts
│   └── README.md          # Backend documentation
│
├── .gitignore             # Git ignore file
├── docker-compose.yml     # Docker compose configuration
├── Dockerfile             # Docker configuration
└── README.md              # Main repository documentation
```

## API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register a new merchant
- `POST /api/auth/login` - Authenticate merchant and return token
- `POST /api/auth/refresh` - Refresh authentication token

### Store Endpoints
- `GET /api/stores` - Get merchant's stores
- `POST /api/stores` - Create a new store
- `GET /api/stores/:id` - Get store details
- `PUT /api/stores/:id` - Update store information
- `DELETE /api/stores/:id` - Delete a store

### Product Endpoints
- `GET /api/products` - Get all products
- `POST /api/products` - Add a new product
- `GET /api/products/:id` - Get product details
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete a product
- `GET /api/products/category/:category` - Get products by category

### Order Endpoints
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create a new order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order status
- `DELETE /api/orders/:id` - Cancel an order

### Customer Endpoints
- `GET /api/customers` - Get all customers
- `POST /api/customers` - Add a new customer
- `GET /api/customers/:id` - Get customer details
- `PUT /api/customers/:id` - Update customer information
- `DELETE /api/customers/:id` - Delete a customer

### Payment Endpoints
- `POST /api/payments/process` - Process a payment
- `GET /api/payments/history` - Get payment history
- `POST /api/payments/refund` - Process a refund

## Features in Development

- **Multi-language Support**: Expand store accessibility to international customers
- **Advanced Analytics**: Deeper insights into customer behavior and sales patterns
- **Mobile App**: Native mobile applications for iOS and Android
- **Subscription Management**: Tools for recurring billing and subscription products
- **Marketplace Integration**: Connect with popular marketplaces like Amazon and eBay

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## Deployment

### Docker Deployment
1. Build and run with Docker Compose:
   ```
   docker-compose up -d
   ```

### Manual Deployment
1. Set up production environment variables
2. Build the frontend:
   ```
   cd client
   npm run build
   ```
3. Start the production server:
   ```
   cd server
   npm start
   ```

