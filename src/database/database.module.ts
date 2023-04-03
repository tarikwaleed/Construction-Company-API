import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/salah_back', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
