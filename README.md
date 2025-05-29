# Node.js CRUD API

A simple RESTful API built with Node.js, Express, and MongoDB for performing CRUD operations.

## Features

- Create, Read, Update, and Delete operations for products
- MongoDB database integration
- Environment variable configuration
- RESTful API endpoints

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local instance or MongoDB Atlas)
- npm or yarn

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd node-crud
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the MongoDB connection string and other variables as needed
   ```
   cp .env.example .env
   ```

## Configuration

Create a `.env` file in the root directory with the following variables:

```
MONGODB_URI=mongodb://localhost:27017/your-database
PORT=3010
```

## Running the Application

### Development mode
```
npm run dev
```

### Production mode
```
npm run serve
```

## API Endpoints

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a specific product
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Example Requests

### Get all products
```
curl http://localhost:3010/api/products
```

### Get a specific product
```
curl http://localhost:3010/api/products/[product-id]
```

### Create a new product
```
curl -X POST -H "Content-Type: application/json" -d '{"name":"Product Name","quantity":10,"price":99.99,"image":"image-url"}' http://localhost:3010/api/products
```

### Update a product
```
curl -X PUT -H "Content-Type: application/json" -d '{"name":"Updated Product Name","quantity":20,"price":199.99,"image":"new-image-url"}' http://localhost:3010/api/products/[product-id]
```

### Delete a product
```
curl -X DELETE http://localhost:3010/api/products/[product-id]
```

## License

ISC
