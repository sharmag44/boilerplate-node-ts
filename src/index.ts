import * as dotenv from 'dotenv';
import app from './config/express.config';
import { userRoutes } from './routes/user.routes';
import connectToDatabase from './config/mongoose.config';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './swaggerOptions';
import { Request, Response } from 'express';
// Define routes

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api/users', userRoutes);

app.get('/', async (_req: Request, res: Response) => {
      return res.send({ isSuccess: true, message: 'Code Working' });
});

connectToDatabase();
// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
});
