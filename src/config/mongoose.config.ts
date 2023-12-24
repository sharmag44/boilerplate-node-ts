// import mongoose from 'mongoose';

// const MONGO_URI = 'mongodb://bcoderAdmin:bcoderAdmin123@199.192.21.220:27017/boilerplate-api-ts?authSource=admin';

// mongoose.connect(MONGO_URI);

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// export default mongoose;


import mongoose from 'mongoose';
const MONGO_URI = 'mongodb://bcoderAdmin:bcoderAdmin123@199.192.21.220:27017/boilerplate-api-ts?authSource=admin';

const connectToDatabase = async (): Promise<void> => {
  try {
    mongoose.connect(MONGO_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
    // console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default connectToDatabase;
