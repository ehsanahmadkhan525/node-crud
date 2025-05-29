import express from 'express';
import { config } from 'dotenv';
import swaggerUi from 'swagger-ui-express';

config();

import productRoute from './routes/product.route';
import connectDB from './config/database';
import { swaggerSpec } from './config/swagger';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', productRoute);

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const port = process.env.PORT || 3010;

// Connect to database
connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
    
