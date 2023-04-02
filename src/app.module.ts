import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarrierModule } from './carrier/carrier.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/salah_back', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    CarrierModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log("Connected to the Database");
  }
}
