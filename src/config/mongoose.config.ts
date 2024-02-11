import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
const MONGO_URI: string | undefined = process.env.MONGO_URI;
const connectToDatabase = async (): Promise<void> => {
      try {
            mongoose.connect(MONGO_URI as string);

            const db = mongoose.connection;

            db.on(
                  'error',
                  console.error.bind(console, 'MongoDB connection error:'),
            );
            db.once('open', () => {
                  console.log('Connected to MongoDB');
            });
            // console.log('Connected to MongoDB');
      } catch (error) {
            console.error('MongoDB connection error:', error);
      }
};

export default connectToDatabase;
