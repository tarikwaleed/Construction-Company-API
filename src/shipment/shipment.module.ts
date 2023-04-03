import { Module } from '@nestjs/common';
import { ShipmentService } from './shipment.service';
import { ShipmentController } from './shipment.controller';
import { DatabaseModule } from 'src/database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { shipmentSchema } from './entities/shipment.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'Shipment', schema: shipmentSchema }]),
  ],
  controllers: [ShipmentController],
  providers: [ShipmentService],
})
export class ShipmentModule {}
