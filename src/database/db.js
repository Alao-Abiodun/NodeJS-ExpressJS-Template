import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
};

const connection = async () => {
  try {
    await mongoose.connect(MONGO_URI, options);
    console.log('Database connected');
  } catch (error) {
    console.log('Database Not Connected');
  }
};

export default connection;
