import mongoose, { ConnectOptions } from 'mongoose';

const { Schema } = mongoose;

import * as dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_LOCAL_URI as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions,
    );
    console.log('Connected To MongoDB Successfully ✨ ❤️');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export { connectDB, mongoose, Schema };
