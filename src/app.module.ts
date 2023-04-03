import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarrierModule } from './carrier/carrier.module';
import { ShipmentModule } from './shipment/shipment.module';
import { EmployeeModule } from './employee/employee.module';
import { TransactionModule } from './transaction/transaction.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    CarrierModule,
    ShipmentModule,
    EmployeeModule,
    TransactionModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
